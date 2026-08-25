import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "100kb" }));

const GEMINI_KEYS = [
  process.env.API_KEY_1?.trim(),
  process.env.API_KEY_2?.trim(),
  process.env.API_KEY_3?.trim(),
  process.env.API_KEY_4?.trim(),
  process.env.API_KEY_5?.trim()
].filter(Boolean);

const GEMINI_MODEL =
  process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";

const PORT = process.env.PORT || 3000;


// =====================================================
// URL UTILITIES
// =====================================================

const SHORTENERS = new Set([
  "bit.ly",
  "tinyurl.com",
  "t.co",
  "goo.gl",
  "shorturl.at",
  "cutt.ly",
  "rebrand.ly",
  "is.gd",
  "s.id",
  "ow.ly",
  "buff.ly"
]);

const OFFICIAL_BRANDS = [
  {
    brand: "Vietcombank",
    official: "vietcombank.com.vn"
  },
  {
    brand: "BIDV",
    official: "bidv.com.vn"
  },
  {
    brand: "Agribank",
    official: "agribank.com.vn"
  },
  {
    brand: "VNeID",
    official: "vneid.gov.vn"
  },
  {
    brand: "Shopee",
    official: "shopee.vn"
  },
  {
    brand: "VNPost",
    official: "vnpost.vn"
  },
  {
    brand: "GHTK",
    official: "ghtk.vn"
  }
];

function extractUrls(text) {
  return String(text || "").match(/https?:\/\/[^\s<>"']+/gi) || [];
}

function normalizeHostname(hostname) {
  return String(hostname || "")
    .toLowerCase()
    .replace(/^www\./, "");
}


// =====================================================
// URL ANALYSIS
// =====================================================

function analyzeUrlStructure(inputUrl) {
  let parsed;

  try {
    parsed = new URL(inputUrl);
  } catch {
    return {
      valid: false,
      url: inputUrl,
      reasons: ["URL không hợp lệ."]
    };
  }

  const hostname = normalizeHostname(parsed.hostname);

  const reasons = [];
  let suspicionScore = 0;

  if (SHORTENERS.has(hostname)) {
    suspicionScore += 20;
    reasons.push(
      "Đây là link rút gọn nên URL hiển thị không cho biết website đích."
    );
  }

  if (parsed.protocol !== "https:") {
    suspicionScore += 15;
    reasons.push("Không sử dụng HTTPS.");
  }

  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
    suspicionScore += 35;
    reasons.push("Tên miền sử dụng địa chỉ IP thay vì domain thông thường.");
  }

  if (hostname.includes("xn--")) {
    suspicionScore += 30;
    reasons.push("Tên miền có Punycode, có thể dùng để giả mạo ký tự.");
  }

  const suspiciousTlds = [
    ".top",
    ".cc",
    ".info",
    ".club",
    ".click",
    ".xyz",
    ".online",
    ".site"
  ];

  if (suspiciousTlds.some(tld => hostname.endsWith(tld))) {
    suspicionScore += 20;
    reasons.push(
      "Tên miền sử dụng đuôi thường xuất hiện trong các website không rõ nguồn gốc."
    );
  }

  for (const brand of OFFICIAL_BRANDS) {
    const brandName = brand.brand.toLowerCase();

    if (
      hostname.includes(brandName) &&
      !hostname.endsWith(brand.official)
    ) {
      suspicionScore += 40;

      reasons.push(
        `Tên miền có dấu hiệu giả mạo thương hiệu ${brand.brand}; domain chính thức là ${brand.official}.`
      );
    }
  }

  const suspiciousWords = [
    "login",
    "xacthuc",
    "xac-thuc",
    "verify",
    "verification",
    "secure",
    "security",
    "update",
    "khuyenmai",
    "khuyen-mai",
    "phatnguoi",
    "vneid"
  ];

  const matchedWords = suspiciousWords.filter(word =>
    hostname.includes(word)
  );

  if (matchedWords.length) {
    suspicionScore += Math.min(matchedWords.length * 10, 30);

    reasons.push(
      `Domain chứa từ khóa nhạy cảm: ${matchedWords.join(", ")}.`
    );
  }

  return {
    valid: true,
    url: inputUrl,
    protocol: parsed.protocol,
    hostname,
    path: parsed.pathname,
    isShortener: SHORTENERS.has(hostname),
    suspicionScore: Math.min(suspicionScore, 100),
    reasons
  };
}


// =====================================================
// SAFE REDIRECT RESOLUTION
// =====================================================

async function resolveUrl(startUrl) {
  const chain = [];
  let currentUrl = startUrl;

  for (let i = 0; i < 5; i++) {
    chain.push(currentUrl);

    let parsed;

    try {
      parsed = new URL(currentUrl);
    } catch {
      break;
    }

    const hostname = normalizeHostname(parsed.hostname);

    // Only resolve HTTP(S)
    if (!["http:", "https:"].includes(parsed.protocol)) {
      break;
    }

    // Avoid fetching obviously local/internal targets
    if (
      hostname === "localhost" ||
      hostname.endsWith(".local") ||
      hostname.startsWith("127.") ||
      hostname.startsWith("10.") ||
      hostname.startsWith("192.168.")
    ) {
      return {
        originalUrl: startUrl,
        finalUrl: currentUrl,
        redirectChain: chain,
        blocked: true,
        blockedReason: "Đích đến có vẻ là địa chỉ nội bộ."
      };
    }

    try {
      const response = await fetch(currentUrl, {
        method: "HEAD",
        redirect: "manual",
        headers: {
          "User-Agent": "ScamCheck-Link-Analyzer/1.0"
        },
        signal: AbortSignal.timeout(5000)
      });

      const location = response.headers.get("location");

      if (!location) {
        return {
          originalUrl: startUrl,
          finalUrl: currentUrl,
          redirectChain: chain,
          blocked: false
        };
      }

      const nextUrl = new URL(location, currentUrl).toString();

      if (chain.includes(nextUrl)) {
        break;
      }

      currentUrl = nextUrl;
    } catch (error) {
      return {
        originalUrl: startUrl,
        finalUrl: currentUrl,
        redirectChain: chain,
        blocked: false,
        error: error.message
      };
    }
  }

  return {
    originalUrl: startUrl,
    finalUrl: currentUrl,
    redirectChain: chain,
    blocked: false
  };
}


// =====================================================
// PREPARE LINK INTELLIGENCE
// =====================================================

async function inspectLinks(message) {
  const urls = extractUrls(message);

  const results = [];

  for (const originalUrl of urls) {
    const originalAnalysis = analyzeUrlStructure(originalUrl);

    let resolved = {
      originalUrl,
      finalUrl: originalUrl,
      redirectChain: [originalUrl]
    };

    if (originalAnalysis.isShortener) {
      resolved = await resolveUrl(originalUrl);
    }

    const finalAnalysis = analyzeUrlStructure(resolved.finalUrl);

    results.push({
      original: originalUrl,
      resolved: resolved.finalUrl,
      redirectChain: resolved.redirectChain,
      originalAnalysis,
      finalAnalysis
    });
  }

  return results;
}


// =====================================================
// GEMINI PROMPT
// =====================================================

function buildGeminiPrompt(message, linkIntel) {
  return `
Bạn là hệ thống ScamCheck chuyên phân tích tin nhắn, đường dẫn và dấu hiệu thao túng tâm lý.

MỤC TIÊU:
Phân tích thật sự nội dung được cung cấp.
Không dùng câu trả lời mẫu.
Không được copy một câu trả lời cố định.
Mỗi tin nhắn phải có kết luận và lời khuyên phù hợp với chính nội dung đó.

==============================
TIN NHẮN NGƯỜI DÙNG
==============================

${message}

==============================
THÔNG TIN ĐƯỜNG DẪN
==============================

${JSON.stringify(linkIntel, null, 2)}

==============================
QUY TẮC ĐÁNH GIÁ
==============================

Chấm khá nghiêm.

"Nguy hiểm":
- Có yêu cầu OTP/mã xác thực/mật khẩu.
- Có yêu cầu chuyển tiền.
- Có yêu cầu chuyển tiền vào "tài khoản an toàn".
- Mạo danh ngân hàng/công an/tòa án/cơ quan nhà nước.
- Đe dọa bắt giữ, phạt tiền, khóa tài khoản để ép hành động.
- Hứa thưởng lớn nhưng yêu cầu phí.
- Yêu cầu cài ứng dụng không rõ nguồn.
- Link dẫn tới domain giả mạo thương hiệu.
- Link rút gọn redirect tới domain đáng ngờ.
- Có nhiều dấu hiệu lừa đảo kết hợp.

"Nghi ngờ":
- Có dấu hiệu bất thường nhưng chưa đủ bằng chứng.
- Có link rút gọn nhưng chưa phát hiện đích độc hại.
- Domain hoặc cách diễn đạt đáng ngờ nhưng chưa đủ để kết luận lừa đảo.

"An toàn":
- Không phát hiện dấu hiệu đáng kể.
- Không được gọi là An toàn chỉ vì không có từ "OTP".
- Nếu có URL, phải xem xét URL evidence trước khi kết luận.

QUAN TRỌNG:
Link rút gọn KHÔNG tự động có nghĩa là độc hại.
Nhưng link rút gọn phải được đánh dấu là "cần kiểm tra đích đến".

Không được khẳng định "malware", "virus", "độc hại 100%" nếu dữ liệu không chứng minh điều đó.

==============================
THÁM TỬ
==============================

Tự viết tối đa 4 bằng chứng.

Mỗi bằng chứng gồm:
- quote: trích nguyên văn từ tin nhắn hoặc URL evidence.
- reason: giải thích tại sao nó đáng chú ý.

Không bịa quote.

==============================
CÔ TÂM LÝ
==============================

Nếu Nguy hiểm hoặc Nghi ngờ:

manipulation:
Phân tích CHÍNH tin nhắn đang dùng chiến thuật tâm lý nào.
Ví dụ:
- tạo cảm giác khẩn cấp
- đe dọa hậu quả
- đánh vào lòng tham
- giả danh authority
- tạo cảm giác sợ hãi
- ép nạn nhân hành động trước khi suy nghĩ

advice:
Viết một lời nói tự nhiên, ngắn gọn như một chuyên gia tâm lý đang trấn an người nhận tin nhắn.

Không dùng câu mặc định.

Nếu An toàn:
psychology = null.

==============================
NGƯỜI ỨNG CỨU
==============================

Nếu Nghi ngờ hoặc Nguy hiểm:

Tạo đúng 4 nhóm hành động:

beforeAction:
Việc cần làm nếu CHƯA tương tác.

clicked:
Việc cần làm nếu ĐÃ BẤM LINK.

transferred:
Việc cần làm nếu ĐÃ CHUYỂN TIỀN.

otp:
Việc cần làm nếu ĐÃ CUNG CẤP OTP/MÃ XÁC THỰC.

Mỗi nhóm 2-4 bước.

Các bước phải phù hợp với loại scam được phát hiện.

Ví dụ nếu là ngân hàng thì ưu tiên liên hệ ngân hàng.
Nếu là link tải app thì ưu tiên gỡ app, kiểm tra quyền ứng dụng và đổi mật khẩu từ thiết bị an toàn.
Nếu là giả danh công an thì ưu tiên lưu bằng chứng và không chuyển tiền.

Không dùng cùng một bộ câu trả lời cho mọi tin nhắn.

==============================
ĐIỂM RỦI RO
==============================

riskScore:
0-29 = An toàn
30-59 = Nghi ngờ
60-100 = Nguy hiểm

Điểm phải phản ánh evidence thực tế.

==============================
JSON BẮT BUỘC
==============================

Chỉ trả JSON:

{
  "risk": "An toàn | Nghi ngờ | Nguy hiểm",
  "riskScore": 0,
  "summary": "",
  "indicators": [
    {
      "quote": "",
      "reason": "",
      "severity": "low | medium | high"
    }
  ],
  "psychology": {
    "manipulation": "",
    "advice": ""
  },
  "rescue": {
    "beforeAction": [],
    "clicked": [],
    "transferred": [],
    "otp": []
  }
}

Nếu risk = "An toàn":
"psychology": null

"rescue" vẫn phải tồn tại nhưng có thể để các mảng rỗng.

Yêu cầu:
- Tiếng Việt tự nhiên.
- Không bịa.
- Không dùng câu trả lời mẫu.
- Không nhắc rằng bạn là AI.
- Không giải thích ngoài JSON.
`;
}


// =====================================================
// GEMINI CALL
// =====================================================

async function askGemini(message, linkIntel) {
  const prompt = buildGeminiPrompt(message, linkIntel);

  let lastError = null;

  for (let i = 0; i < GEMINI_KEYS.length; i++) {
    const apiKey = GEMINI_KEYS[i];

    try {
      console.log(`Trying Gemini key ${i + 1}`);

      const url =
        `https://generativelanguage.googleapis.com/v1beta/models/` +
        `${GEMINI_MODEL}:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],

          generationConfig: {
            temperature: 0.25,
            maxOutputTokens: 5000,
            responseMimeType: "application/json"
          }
        }),

        signal: AbortSignal.timeout(30000)
      });

      const raw = await response.text();

      if (!response.ok) {
        console.error(
          `Gemini key ${i + 1} failed:`,
          response.status,
          raw
        );

        lastError = new Error(
          `Gemini ${response.status}: ${raw}`
        );

        continue;
      }

      const data = JSON.parse(raw);

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error("Gemini không trả nội dung.");
      }

      return extractJson(text);
    } catch (error) {
      console.error(
        `Gemini key ${i + 1} error:`,
        error.message
      );

      lastError = error;
    }
  }

  throw lastError || new Error("Gemini failed.");
}


// =====================================================
// JSON PARSER
// =====================================================

function extractJson(text) {
  const cleaned = String(text)
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const first = cleaned.indexOf("{");
  const last = cleaned.lastIndexOf("}");

  if (first === -1 || last === -1) {
    throw new Error("Gemini trả JSON không hợp lệ.");
  }

  return JSON.parse(
    cleaned.slice(first, last + 1)
  );
}


// =====================================================
// NORMALIZE — KHÔNG TỰ VIẾT NỘI DUNG
// =====================================================

function normalizeGeminiData(data) {
  const risks = [
    "An toàn",
    "Nghi ngờ",
    "Nguy hiểm"
  ];

  const risk = risks.includes(data?.risk)
    ? data.risk
    : "Nghi ngờ";

  const indicators = Array.isArray(data?.indicators)
    ? data.indicators
        .filter(x => x && typeof x === "object")
        .slice(0, 4)
        .map(x => ({
          quote: String(x.quote || ""),
          reason: String(x.reason || ""),
          severity: ["low", "medium", "high"].includes(x.severity)
            ? x.severity
            : "medium"
        }))
    : [];

  const psychology =
    risk === "An toàn"
      ? null
      : data?.psychology &&
        typeof data.psychology === "object"
      ? {
          manipulation: String(
            data.psychology.manipulation || ""
          ),
          advice: String(
            data.psychology.advice || ""
          )
        }
      : null;

  const rescue = {
    beforeAction: Array.isArray(data?.rescue?.beforeAction)
      ? data.rescue.beforeAction.slice(0, 4)
      : [],

    clicked: Array.isArray(data?.rescue?.clicked)
      ? data.rescue.clicked.slice(0, 4)
      : [],

    transferred: Array.isArray(data?.rescue?.transferred)
      ? data.rescue.transferred.slice(0, 4)
      : [],

    otp: Array.isArray(data?.rescue?.otp)
      ? data.rescue.otp.slice(0, 4)
      : []
  };

  return {
    risk,
    riskScore: Number.isFinite(Number(data?.riskScore))
      ? Math.max(0, Math.min(100, Number(data.riskScore)))
      : null,

    summary: String(data?.summary || ""),

    indicators,

    psychology,

    rescue,

    source: "Gemini AI"
  };
}


// =====================================================
// MAIN ENDPOINT
// =====================================================

app.post("/analyze", async (req, res) => {
  const message = String(req.body?.message || "").trim();

  if (!message) {
    return res.status(400).json({
      error: "Missing message"
    });
  }

  if (message.length > 10000) {
    return res.status(400).json({
      error: "Message too long"
    });
  }

  try {
    console.log("================================");
    console.log("Analyzing message");
    console.log("Length:", message.length);

    const linkIntel = await inspectLinks(message);

    console.log(
      "Links detected:",
      linkIntel.length
    );

    const aiResult = await askGemini(
      message,
      linkIntel
    );

    const result = normalizeGeminiData(
      aiResult
    );

    return res.json({
      ...result,
      links: linkIntel
    });

  } catch (error) {
    console.error(
      "Analysis failed:",
      error
    );

    return res.status(500).json({
      error: error.message
    });
  }
});


app.get("/", (req, res) => {
  res.send("ScamCheck backend is running");
});


app.listen(PORT, () => {
  console.log(
    `ScamCheck backend running on port ${PORT}`
  );

  console.log(
    `Gemini model: ${GEMINI_MODEL}`
  );

  console.log(
    `Gemini keys loaded: ${GEMINI_KEYS.length}`
  );
});
