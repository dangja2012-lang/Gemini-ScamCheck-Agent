// ==========================================
// 1. GLOBAL CONFIGURATION & DATA DICTIONARIES
// ==========================================

const samples = {
  1: "[VIETCOMBANK] Tai khoan cua ban dang bi dang nhap la tai thiet bi khac. Neu khong phai ban vui long truy cap vao link http://vietcornbank-login.cc de xac minh danh tinh va bao mat tai khoan ngay lap tuc!",
  2: "Bo Cong An thong bao: Ong/Ba dang lien quan den mot du an ma tuy xuyen quoc gia. Yeu cau cung cap ma OTP va rut het tien gui vao tai khoan an toan cua co quan dieu tra de kiem xat. Neu khong hop tac se bi bat giam sau 2 gio.",
  3: "Chuc mung thue bao 090xxxxxxx da may man trung thuong 1 chiec xe may SH 150i va 100 trieu dong tien mat tu chuong trinh TRI AN KHACH HANG. Vui long nop truoc 2 trieu dong phi van chuyen vao so tai khoan sau..."
};

const scamLibrary = [
  {
    id: "b1",
    category: "bank",
    title: "Giả mạo đăng nhập thiết bị lạ",
    desc: "Cảnh báo tài khoản đang bị đăng nhập trên thiết bị lạ và ép nhấn vào link.",
    msg: samples[1]
  },
  {
    id: "b2",
    category: "bank",
    title: "Nâng cấp hạn mức thẻ tín dụng",
    desc: "Mạo danh ngân hàng mời nâng hạn mức, bắt xác thực KYC qua web giả.",
    msg: "[BIDV] Khach hang du dieu kien nang cap han muc the tin dung len 100 trieu dong. Vui long cap nhat thong tin KYC tai http://bidv-khuyenmai.top"
  },
  {
    id: "b3",
    category: "bank",
    title: "Khóa thẻ vì thiếu sinh trắc học",
    desc: "Dọa khóa tài khoản nếu không bấm link cập nhật thông tin.",
    msg: "[AGRIBANK] The ATM cua quy khach tam thoi bi khoa vi chua cap nhat sinh trac hoc. Dang nhap tai http://agribank-xacthuc.info de mo khoa."
  },
  {
    id: "p1",
    category: "police",
    title: "Rửa tiền và ma túy",
    desc: "Dọa án hình sự, yêu cầu chuyển tiền vào tài khoản kiểm tra.",
    msg: samples[2]
  },
  {
    id: "p2",
    category: "police",
    title: "Thông báo phạt nguội",
    desc: "Mạo danh CSGT gửi link nộp phạt giả.",
    msg: "[CUC CSGT] Ban co 1 bien ban phat nguoi chua nop. Truy cap http://csgt-phatnguoi.gov-vn.club de nop phat."
  },
  {
    id: "p3",
    category: "police",
    title: "Lỗi định danh VNeID",
    desc: "Mạo danh công an lừa tải ứng dụng độc hại.",
    msg: "Cong an quan thong bao: Ho so VNeID cua cong dan bi loi. Lien he can bo qua Zalo de tai phan mem cap nhat: http://vneid-phongso.net"
  },
  {
    id: "g1",
    category: "gift",
    title: "Trúng thưởng xe máy SH",
    desc: "Báo trúng thưởng lớn, yêu cầu đóng phí trước.",
    msg: samples[3]
  },
  {
    id: "g2",
    category: "gift",
    title: "Quà miễn phí từ sàn thương mại",
    desc: "Dụ nhận quà miễn phí rồi kéo vào nhóm kiếm tiền giả.",
    msg: "[SHOPEE TANG QUA] Tang mien phi nuoc hoa Chanel cho khach hang may man. Ket ban Zalo nhan qua va tham gia nhom nhan hoa hong 200k/ngay."
  },
  {
    id: "g3",
    category: "gift",
    title: "Vòng quay may mắn",
    desc: "Dụ điền thông tin thẻ ATM để nhận tiền thưởng.",
    msg: "Ban co 01 luot quay may man voi co hoi trung thuong 50 trieu dong. Click de quay thuong va rut tien ve the: http://thegioididong-vongquay.top"
  },
  {
    id: "d1",
    category: "delivery",
    title: "Bưu phẩm thất lạc",
    desc: "Mạo danh bưu điện yêu cầu cập nhật địa chỉ qua link lạ.",
    msg: "[VNPOST] Kien hang cua ban bi rach tem van don. Vui long truy cap http://vnpost-buupham.info de cap nhat lai dia chi."
  },
  {
    id: "d2",
    category: "delivery",
    title: "Hàng quốc tế bị giữ ở hải quan",
    desc: "Yêu cầu đóng thuế hải quan giả để thông quan.",
    msg: "[HAI QUAN] Co 1 kien hang quoc te gui cho ong/ba dang bi giu vi chua nop thue hai quan. Vui long chuyen khoan 3.500.000d de thong quan."
  },
  {
    id: "d3",
    category: "delivery",
    title: "COD giả",
    desc: "Dồn ép người nhà chuyển tiền thu hộ giả.",
    msg: "Alo a/c co don hang 450k giao den nha cua GHTK. Em gui hang cho bao ve, nho anh chi chuyen khoan vao stk 019238xxx de hoan thanh don."
  }
];

let currentCategory = "all";
const VERIFIED_HOTLINES = [
  {
    name: "Công an",
    number: "113",
    note: "Gọi khi đã chuyển tiền, bị đe dọa, bị tống tiền hoặc có nguy cơ mất tài sản.",
    tags: ["urgent", "police", "transferred", "otp"]
  },
  {
    name: "Cứu hỏa / cứu nạn",
    number: "114",
    note: "Gọi khi có cháy nổ hoặc tình huống nguy hiểm tính mạng.",
    tags: ["emergency"]
  },
  {
    name: "Cấp cứu y tế",
    number: "115",
    note: "Gọi khi có vấn đề sức khỏe khẩn cấp.",
    tags: ["emergency"]
  },
  {
    name: "Phản ánh cuộc gọi / tin nhắn lừa đảo",
    number: "156",
    note: "Gọi hoặc nhắn tin để phản ánh cuộc gọi rác, cuộc gọi có dấu hiệu lừa đảo.",
    tags: ["report", "scam", "clicked", "none"]
  },
  {
    name: "Phản ánh SMS/cuộc gọi rác",
    number: "5656",
    note: "Có thể dùng để gửi phản ánh tin nhắn rác, cuộc gọi rác.",
    tags: ["report", "scam", "clicked", "none"]
  },
  {
    name: "Vietcombank",
    number: "1900545413",
    note: "Gọi nếu tin nhắn liên quan Vietcombank, tài khoản, thẻ hoặc OTP.",
    tags: ["bank", "vietcombank", "transferred", "otp", "clicked"]
  },
  {
    name: "BIDV",
    number: "19009247",
    note: "Gọi nếu tin nhắn liên quan BIDV, tài khoản, thẻ hoặc giao dịch.",
    tags: ["bank", "bidv", "transferred", "otp", "clicked"]
  },
  {
    name: "Agribank",
    number: "1900558818",
    note: "Gọi nếu tin nhắn liên quan Agribank, tài khoản, thẻ hoặc giao dịch.",
    tags: ["bank", "agribank", "transferred", "otp", "clicked"]
  }
];

let latestAnalyzedMessage = "";

// ==========================================
// 2. INITIALIZATION & UI ROUTING
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  renderHistory();
  renderLibraryGrid();
});

function fillSample(id) {
  const input = document.getElementById("message");
  input.value = samples[id] || "";
  input.focus();
}

function switchTab(tabName) {
  const analyzer = document.getElementById("tab-analyzer");
  const library = document.getElementById("tab-library");
  const btnAnalyzer = document.getElementById("tab-btn-analyzer");
  const btnLibrary = document.getElementById("tab-btn-library");

  const analyzerActive = tabName === "analyzer";

  analyzer.classList.toggle("hidden", !analyzerActive);
  library.classList.toggle("hidden", analyzerActive);

  btnAnalyzer.className = analyzerActive ? "tab-btn active-tab" : "tab-btn inactive-tab";
  btnLibrary.className = analyzerActive ? "tab-btn inactive-tab" : "tab-btn active-tab";

  if (!analyzerActive) renderLibraryGrid();
}

// ==========================================
// 3. URL DE-OBFUSCATION REFACTORING (THE PIPELINE)
// ==========================================

// Extracts all strings starting with http:// or https://
function extractAllUrls(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

// Sends short links to your Cloudflare Worker middleware wrapper
async function resolveShortLink(shortUrl) {
  if (
    typeof PROXY_API_URL === "undefined" ||
    !PROXY_API_URL ||
    !PROXY_API_URL.startsWith("http")
  ) {
    return shortUrl;
  }

  try {
    const res = await fetch(PROXY_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shortUrl }),
      signal: AbortSignal.timeout(4000) // Fallback limit of 4 seconds per fetch request
    });
    
    if (!res.ok) return shortUrl; // Fallback to raw link if gateway fails
    
    const data = await res.json();
    return data.realUrl || shortUrl;
  } catch (err) {
    console.warn(`Could not resolve link structure for ${shortUrl}:`, err);
    return shortUrl; 
  }
}

// ==========================================
// 4. MAIN SCANNER RUNNER
// ==========================================

async function analyzeMessage() {
  const msg = document.getElementById("message").value.trim();
  const resultDiv = document.getElementById("result");
  const analyzeBtn = document.getElementById("analyze-btn");

  if (!msg) {
    showError("⚠️ Vui lòng nhập hoặc dán nội dung tin nhắn cần kiểm tra.");
    return;
  }

  if (msg.length > 5000) {
    showError("⚠️ Tin nhắn quá dài, vui lòng rút gọn dưới 5000 ký tự.");
    return;
  }

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = loadingHtml();

  analyzeBtn.disabled = true;

  try {
    // Look for all embedded URLs inside user input text layout
    const foundUrls = extractAllUrls(msg);
    let completelyUnshortenedMsg = msg;

    if (foundUrls.length > 0) {
      analyzeBtn.innerText = "🔍 Đang giải mã đường dẫn ẩn...";
      
      // Request all link evaluations concurrently in parallel
      const resolvePromises = foundUrls.map(async (url) => {
        const realUrl = await resolveShortLink(url);
        return { original: url, resolved: realUrl };
      });
      
      const resolvedLinks = await Promise.all(resolvePromises);
      
      // Systematically rewrite short matches to target addresses inside user string copy
      resolvedLinks.forEach(item => {
        completelyUnshortenedMsg = completelyUnshortenedMsg.replace(item.original, item.resolved);
      });
    }

    analyzeBtn.innerText = "Đang phân tích bằng Gemini...";

    // Pass the completely unmasked text directly into Gemini engine
    const aiData = await callGemini(completelyUnshortenedMsg);
    let parsedData = normalizeAiData(aiData, completelyUnshortenedMsg);
parsedData = forceDangerIfObviousScam(parsedData, completelyUnshortenedMsg);

    saveToHistory(msg, parsedData);
    displayResult(msg, parsedData);
  } catch (err) {
    console.error("Gemini error:", err);

    const fallback = localFallbackAnalysis(msg);
    fallback.notice = "Gemini chưa trả kết quả hợp lệ nên hệ thống tạm dùng bộ phân tích dự phòng.";
    saveToHistory(msg, fallback);
    displayResult(msg, fallback);
  } finally {
    analyzeBtn.disabled = false;
    analyzeBtn.innerText = "🔍 Kiểm tra ngay";
  }
}

// ==========================================
// 5. LLM INTEGRATION LAYER
// ==========================================

async function callGemini(message) {
  const res = await fetch("https://gemini-scamcheck-agent-2.onrender.com/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const text = await res.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Backend returned non-JSON: " + text.slice(0, 120));
  }

  if (!res.ok) {
    throw new Error(data.error || "Backend error");
  }

  return data;
}

async function callGeminiWithModel(message, modelName, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `
Bạn là ScamCheck, chuyên gia phát hiện lừa đảo.

QUY TẮC PHÂN LOẠI:

NGUY HIỂM nếu có MỘT trong các dấu hiệu sau:
- yêu cầu OTP
- yêu cầu chuyển tiền
- yêu cầu chuyển vào "tài khoản an toàn"
- giả danh Công an
- giả danh Tòa án
- giả danh Viện Kiểm sát
- giả danh Ngân hàng
- đe dọa bắt giữ
- khóa tài khoản
- khóa SIM
- nhận thưởng nhưng yêu cầu đóng phí
- yêu cầu cài app
- yêu cầu bấm link

NGHI NGỜ nếu:
- chưa đủ bằng chứng là lừa đảo
- có vài dấu hiệu bất thường nhưng chưa chắc chắn

AN TOÀN nếu:
- không có dấu hiệu trên.

Tin nhắn:

"""
${message}
"""

Trả về JSON:

{
  "risk":"",
  "indicators":[],
  "actions":[],
  "psychology":""
}

Phân tích tin nhắn sau:
"""${message}"""

Yêu cầu:
- Dùng tiếng Việt dễ hiểu.
- Không bịa thông tin ngoài tin nhắn.
- Nếu an toàn: risk = "An toàn", indicators = [], psychology = null.
- Nếu nghi ngờ hoặc nguy hiểm: psychology phải có manipulation và advice.
- indicators tối đa 4 mục.
- actions đúng 3 mục.
- quote nên là đoạn trích có thật trong tin nhắn.
`
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 4096,
      responseMimeType: "application/json",
      responseSchema: {
        type: "object",
        properties: {
          risk: {
            type: "string",
            enum: ["An toàn", "Nghi ngờ", "Nguy hiểm"]
          },
          indicators: {
            type: "array",
            items: {
              type: "object",
              properties: {
                quote: { type: "string" },
                reason: { type: "string" }
              },
              required: ["quote", "reason"]
            }
          },
          actions: {
            type: "array",
            items: { type: "string" }
          },
          psychology: {
            nullable: true,
            type: "object",
            properties: {
              manipulation: { type: "string" },
              advice: { type: "string" }
            },
            required: ["manipulation", "advice"]
          }
        },
        required: ["risk", "indicators", "actions", "psychology"]
      }
    }
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const raw = await res.text();

  if (!res.ok) {
    throw new Error(`Gemini API lỗi ${res.status} với model ${modelName}: ${raw}`);
  }

  let apiData;
  try {
    apiData = JSON.parse(raw);
  } catch {
    throw new Error(`Gemini API trả response không phải JSON với model ${modelName}: ${raw}`);
  }

  const finishReason = apiData?.candidates?.[0]?.finishReason;
  const text = apiData?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text || !text.trim()) {
    throw new Error(`Gemini trả về rỗng với model ${modelName}. Finish reason: ${finishReason}. Raw: ${raw}`);
  }

  try {
    return JSON.parse(text);
  } catch {
    return JSON.parse(extractJsonObject(text));
  }
}

function extractJsonObject(text) {
  const cleaned = String(text)
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    throw new Error("Không tìm thấy JSON object trong Gemini text: " + cleaned);
  }

  return cleaned.slice(firstBrace, lastBrace + 1);
}

// ==========================================
// 6. RESPONSE NORMALIZATION & FALLBACKS
// ==========================================
function forceDangerIfObviousScam(data, originalMsg) {

  const clean = String(originalMsg || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const dangerRules = [
    "otp",
    "ma otp",
    "ma xac thuc",
    "tai khoan an toan",
    "cong an",
    "bo cong an",
    "bat giam",
    "ma tuy",
    "chuyen khoan",
    "rut het tien",
    "trung thuong",
    "nop truoc",
    "phi van chuyen",
    ".top",
    ".cc",
    ".info",
    ".club"
  ];

  const matched = dangerRules.filter(rule => clean.includes(rule));

  const hasBitly =
    clean.includes("bit.ly") ||
    clean.includes("tinyurl.com") ||
    clean.includes("goo.gl") ||
    clean.includes("t.co");

  // No danger keywords
  if (matched.length === 0) {

      // only short link
      if (hasBitly) {

          // keep Dangerous if Gemini already decided so
          if (data.risk === "Nguy hiểm")
              return data;

          return {
              ...data,
              risk: "Nghi ngờ"
          };
      }

      return data;
  }

  // obvious scam
  return {
      ...data,
      risk: "Nguy hiểm"
  };

}
function analyzeLinksInMessage(originalMsg) {
  const urls = extractAllUrls(originalMsg);

  const fakeDomains = [];
  const shortLinks = [];

  const shorteners = [
    "bit.ly", "tinyurl.com", "goo.gl", "t.co", "shorturl.at",
    "cutt.ly", "rebrand.ly", "is.gd", "s.id"
  ];

  const officialBrands = [
    {
      brand: "Vietcombank",
      official: "vietcombank.com.vn",
      suspiciousWords: ["vietcornbank", "vietcombank-login", "vcb-login", "vietcombank-xacthuc"]
    },
    {
      brand: "BIDV",
      official: "bidv.com.vn",
      suspiciousWords: ["bidv-khuyenmai", "bidv-login", "bidv-xacthuc"]
    },
    {
      brand: "Agribank",
      official: "agribank.com.vn",
      suspiciousWords: ["agribank-xacthuc", "agribank-login", "agribank-update"]
    },
    {
      brand: "VNeID",
      official: "vneid.gov.vn",
      suspiciousWords: ["vneid-phongso", "vneid-update", "vneid-login"]
    }
  ];

  urls.forEach(url => {
    let hostname = "";

    try {
      hostname = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    } catch {
      return;
    }

    if (shorteners.includes(hostname)) {
      shortLinks.push({
        url,
        domain: hostname,
        reason: "Đây là đường dẫn rút gọn, người dùng không nhìn thấy website thật trước khi bấm."
      });
    }

    officialBrands.forEach(item => {
      const looksFake =
        item.suspiciousWords.some(word => hostname.includes(word)) ||
        (
          hostname.includes(item.brand.toLowerCase()) &&
          !hostname.endsWith(item.official)
        );

      if (looksFake) {
        fakeDomains.push({
          url,
          domain: hostname,
          brand: item.brand,
          official: item.official,
          reason: `Tên miền giống ${item.brand} nhưng không phải tên miền chính thức ${item.official}.`
        });
      }
    });
  });

  return { urls, shortLinks, fakeDomains };
}
function normalizeAiData(data, originalMsg) {
  const allowedRisk = ["An toàn", "Nghi ngờ", "Nguy hiểm"];
  const risk = allowedRisk.includes(data?.risk) ? data.risk : "Nghi ngờ";

  let indicators = Array.isArray(data?.indicators) ? data.indicators : [];

  indicators = indicators
    .slice(0, 4)
    .filter(item => item && typeof item === "object")
    .map(item => ({
      quote: typeof item.quote === "string" ? item.quote : "",
      reason: typeof item.reason === "string" ? item.reason : "Dấu hiệu cần kiểm chứng thêm."
    }));

  if (risk !== "An toàn" && indicators.length === 0) {
    indicators.push({
      quote: originalMsg.slice(0, 40),
      reason: "Tin nhắn có dấu hiệu bất thường cần kiểm chứng."
    });
  }

  let actions = Array.isArray(data?.actions)
    ? data.actions.filter(action => typeof action === "string" && action.trim())
    : [];

  actions = actions.slice(0, 3);

  const defaultActions = [
    "Không bấm vào đường link hoặc tệp lạ.",
    "Không cung cấp OTP, mật khẩu, số tài khoản hoặc thông tin cá nhân.",
    "Gọi tổng đài chính thức hoặc hỏi người thân trước khi làm theo."
  ];

  while (actions.length < 3) {
    actions.push(defaultActions[actions.length]);
  }

  let psychology = null;

  if (risk !== "An toàn") {
    psychology = {
      manipulation:
        typeof data?.psychology?.manipulation === "string" && data.psychology.manipulation.trim()
          ? data.psychology.manipulation
          : "Kẻ xấu có thể đang tạo áp lực tâm lý để bác hành động vội.",
      advice:
        typeof data?.psychology?.advice === "string" && data.psychology.advice.trim()
          ? data.psychology.advice
          : "Bác cứ bình tĩnh, mình kiểm tra trước khi làm theo là rất đúng."
    };
  }

  return {
    risk,
    indicators,
    actions,
    psychology,
    source: "Gemini AI"
  };
}

function localFallbackAnalysis(msg) {
  const clean = msg.toLowerCase();

  const data = {
    risk: "Nghi ngờ",
    indicators: [
      {
        quote: msg.slice(0, 40),
        reason: "Tin nhắn có nội dung cần kiểm chứng thêm."
      }
    ],
    actions: [
      "Không bấm vào đường link lạ.",
      "Không cung cấp OTP, mật khẩu hoặc thông tin tài khoản.",
      "Gọi tổng đài chính thức hoặc hỏi người thân trước khi làm theo."
    ],
    psychology: {
      manipulation: "Tin nhắn có thể tạo cảm giác gấp gáp khiến người nhận mất bình tĩnh.",
      advice: "Bác cứ bình tĩnh, kiểm tra trước là cách bảo vệ mình rất tốt."
    },
    source: "Dự phòng"
  };

  if (
    clean.includes("http") ||
    clean.includes("otp") ||
    clean.includes("link") ||
    clean.includes(".top") ||
    clean.includes(".cc") ||
    clean.includes(".info") ||
    clean.includes(".club")
  ) {
    data.risk = "Nguy hiểm";
    data.indicators = [
      {
        quote: "link / OTP",
        reason: "Có đường link lạ hoặc yêu cầu mã xác thực, đây là dấu hiệu nguy hiểm."
      }
    ];
  }

  if (
    clean.includes("cong an") ||
    clean.includes("bo cong an") ||
    clean.includes("bat giam") ||
    clean.includes("ma tuy") ||
    clean.includes("csgt") ||
    clean.includes("phat nguoi")
  ) {
    data.risk = "Nguy hiểm";
    data.indicators = [
      {
        quote: "Công an / bắt giam / phạt nguội",
        reason: "Có dấu hiệu mạo danh cơ quan chức năng để đe dọa."
      }
    ];
  }

  if (
    clean.includes("trung thuong") ||
    clean.includes("trúng thưởng") ||
    clean.includes("xe may") ||
    clean.includes("sh") ||
    clean.includes("qua mien phi")
  ) {
    data.risk = "Nguy hiểm";
    data.indicators = [
      {
        quote: "trúng thưởng / quà miễn phí",
        reason: "Có dấu hiệu bẫy nhận thưởng yêu cầu đóng phí trước."
      }
    ];
  }

  return data;
}

// ==========================================
// 7. UI DYNAMIC RENDERING COMPONENT
// ==========================================

function displayResult(originalMsg, data) {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");

  const riskClass =
    data.risk === "An toàn"
      ? "bg-green-100 text-green-800 border-green-400"
      : data.risk === "Nguy hiểm"
      ? "bg-red-100 text-red-800 border-red-400"
      : "bg-yellow-100 text-yellow-800 border-yellow-400";

  const sourceBadge = data.source
    ? `<span class="inline-block mt-2 text-xs font-bold px-2 py-1 rounded-full bg-white/70 border border-current">${escapeHtml(data.source)}</span>`
    : "";

  const highlightedMsg = highlightQuotes(originalMsg, data.indicators || []);
  const linkAnalysis = analyzeLinksInMessage(originalMsg);

const linkCardHtml = linkAnalysis.urls.length
  ? `
    <div class="bg-orange-50 p-5 rounded-xl border border-orange-300 shadow-sm space-y-3">
      <h3 class="text-xl font-black text-orange-800">🔗 Soi đường dẫn</h3>

      <div>
        <h4 class="font-bold text-orange-900">Các đường dẫn tìm thấy:</h4>
        <ul class="list-disc pl-5 text-orange-950">
          ${linkAnalysis.urls.map(url => `<li>${escapeHtml(url)}</li>`).join("")}
        </ul>
      </div>

      ${
        linkAnalysis.shortLinks.length
          ? `
            <div class="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
              <h4 class="font-black text-yellow-900">⚠️ Link rút gọn phát hiện</h4>
              ${linkAnalysis.shortLinks.map(item => `
                <p class="text-yellow-950">
                  <strong>${escapeHtml(item.domain)}</strong>: ${escapeHtml(item.reason)}
                </p>
              `).join("")}
            </div>
          `
          : ""
      }

      ${
        linkAnalysis.fakeDomains.length
          ? `
            <div class="bg-red-100 border border-red-300 rounded-lg p-3">
              <h4 class="font-black text-red-800">🚨 Tên miền giả mạo phát hiện</h4>
              ${linkAnalysis.fakeDomains.map(item => `
                <p class="text-red-950">
                  <strong>${escapeHtml(item.domain)}</strong>: ${escapeHtml(item.reason)}
                </p>
              `).join("")}
            </div>
          `
          : ""
      }
    </div>
  `
  : "";
  latestAnalyzedMessage = originalMsg;
const rescueSection = data.risk === "An toàn" ? "" : buildRescueSection(originalMsg, data);;

  const indicatorsHtml =
    data.indicators && data.indicators.length
      ? data.indicators
          .map(
            item =>
              `<li><strong class="text-slate-800">"${escapeHtml(item.quote || "dấu hiệu")}"</strong>: ${escapeHtml(item.reason)}</li>`
          )
          .join("")
      : `<li>Không phát hiện dấu hiệu kỹ thuật nguy hiểm rõ ràng.</li>`;

  const actionsHtml = (data.actions || [])
    .map(action => `<li>${escapeHtml(action)}</li>`)
    .join("");

  const psychologyHtml = data.psychology
    ? `
      <div class="bg-purple-50 p-5 rounded-xl border border-purple-200 shadow-sm space-y-3">
        <div class="flex items-center space-x-2 border-b border-purple-100 pb-2">
          <span class="text-2xl">🧠</span>
          <h3 class="text-xl font-bold text-purple-900">Cô Tâm Lý</h3>
        </div>

        <div>
          <h4 class="text-base font-bold text-purple-950">🎯 Đòn bẫy thao túng tâm lý:</h4>
          <p class="text-base text-purple-900 mt-1 leading-relaxed">${escapeHtml(data.psychology.manipulation)}</p>
        </div>

        <div class="bg-white p-4 rounded-xl border border-purple-100 text-purple-950 text-base md:text-lg leading-relaxed shadow-sm font-medium">
          💬 <span class="italic">${escapeHtml(data.psychology.advice)}</span>
        </div>
      </div>
    `
    : "";

  const noticeHtml = data.notice
    ? `<div class="bg-amber-50 border border-amber-300 text-amber-900 p-3 rounded-xl text-sm font-medium">${escapeHtml(data.notice)}</div>`
    : "";

  resultDiv.innerHTML = `
    ${noticeHtml}

    <div class="border-2 p-4 rounded-xl text-center shadow-sm transition-all ${riskClass}">
      <span class="text-sm font-bold uppercase tracking-wider block opacity-75">Mức độ rủi ro</span>
      <span class="text-3xl font-black">${escapeHtml(data.risk)}</span>
      ${sourceBadge}
    </div>

    <div class="bg-slate-100 p-4 rounded-xl border border-slate-200">
      <h4 class="text-sm font-bold text-slate-500 mb-2">Nội dung tin nhắn gốc:</h4>
      <p class="text-lg whitespace-pre-wrap leading-relaxed text-slate-800">${highlightedMsg}</p>
    </div>
${linkCardHtml}
    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
      <div class="flex items-center space-x-2 border-b border-slate-100 pb-2">
        <span class="text-2xl">🕵️‍♂️</span>
        <h3 class="text-xl font-bold text-slate-800">Thám tử</h3>
      </div>

      <div>
        <h4 class="text-base font-bold text-red-600 mb-1">🔎 Dấu hiệu kỹ thuật phát hiện:</h4>
        <ul class="list-disc pl-5 space-y-1 text-base text-slate-700">${indicatorsHtml}</ul>
      </div>

      <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
        <h4 class="text-base font-bold text-blue-900 mb-1">🛠️ Hành động ứng phó khuyên dùng:</h4>
        <ul class="list-decimal pl-5 space-y-1 text-base text-blue-950 font-medium">${actionsHtml}</ul>
      </div>
    </div>

   ${psychologyHtml}
   ${rescueSection}
  `;
}

function highlightQuotes(text, indicators) {
  let safeText = escapeHtml(text);

  indicators.forEach(item => {
    const quote = item?.quote;
    if (!quote || quote.length < 3) return;

    const safeQuote = escapeHtml(quote);
    safeText = safeText.split(safeQuote).join(`<mark class="bg-yellow-300 font-semibold px-1 rounded">${safeQuote}</mark>`);
  });

  return safeText;
}

function loadingHtml() {
  return `
    <div class="flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-200 rounded-xl space-y-4 w-full">
      <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      <div class="text-center space-y-1">
        <p class="text-slate-800 font-bold text-lg animate-pulse">🕵️‍♂️ Thám tử đang phân tích và kiểm tra liên kết...</p>
        <p class="text-purple-700 font-medium text-base animate-pulse">🧠 Cô tâm lý sẽ xuất hiện nếu tin nhắn có rủi ro.</p>
      </div>
    </div>
  `;
}

function showError(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `
    <div class="bg-red-50 border-2 border-red-400 text-red-900 p-4 rounded-xl font-medium w-full">
      ${escapeHtml(message)}
    </div>
  `;
}

// ==========================================
// 8. LOCAL STORAGE HISTORY COMPONENT
// ==========================================

function saveToHistory(msg, data) {
  let history = JSON.parse(localStorage.getItem("scamcheck_history")) || [];
  history = history.filter(item => item.msg !== msg);

  history.unshift({
    msg,
    data,
    time: new Date().toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit"
    })
  });

  if (history.length > 10) history.pop();

  localStorage.setItem("scamcheck_history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById("history-list");
  if (!historyList) return;

  const history = JSON.parse(localStorage.getItem("scamcheck_history")) || [];

  if (history.length === 0) {
    historyList.innerHTML = `<p class="text-slate-400 italic text-base">Chưa có lịch sử kiểm tra nào gần đây.</p>`;
    return;
  }

  historyList.innerHTML = "";

  history.forEach(item => {
    if (!item || !item.data) return;

    let riskEmoji = "✅";
    if (item.data.risk === "Nghi ngờ") riskEmoji = "⚠️";
    if (item.data.risk === "Nguy hiểm") riskEmoji = "🚨";

    const itemBtn = document.createElement("button");
    itemBtn.className =
      "w-full text-left p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition text-base text-slate-700 font-medium flex justify-between items-center";

    itemBtn.innerHTML = `
      <span class="truncate mr-2">${riskEmoji} [${escapeHtml(item.data.risk || "Nghi ngờ")}] ${escapeHtml(item.msg)}</span>
      <span class="text-xs text-slate-400 flex-shrink-0">${escapeHtml(item.time || "")}</span>
    `;

    itemBtn.onclick = () => {
      document.getElementById("message").value = item.msg;
      switchTab("analyzer");
      displayResult(item.msg, item.data);
    };

    historyList.appendChild(itemBtn);
  });
}

// ==========================================
// 9. KNOWLEDGE BASE & SEARCH COMPONENT
// ==========================================

function filterCategory(category, element) {
  currentCategory = category;
  document.querySelectorAll(".lib-filter-btn").forEach(btn => {
    btn.className = "lib-filter-btn";
  });
  element.className = "lib-filter-btn active-filter";
  handleFilterAndSearch();
}

function handleFilterAndSearch() {
  const input = document.getElementById("library-search");
  const searchKeyword = input ? input.value.toLowerCase().trim() : "";

  const filteredData = scamLibrary.filter(item => {
    const matchCategory = currentCategory === "all" || item.category === currentCategory;
    const matchKeyword =
      !searchKeyword ||
      item.title.toLowerCase().includes(searchKeyword) ||
      item.desc.toLowerCase().includes(searchKeyword) ||
      item.msg.toLowerCase().includes(searchKeyword);

    return matchCategory && matchKeyword;
  });

  renderLibraryGrid(filteredData);
}

function renderLibraryGrid(dataList = scamLibrary) {
  const gridContainer = document.getElementById("library-grid");
  if (!gridContainer) return;
  const countEl = document.getElementById("library-count");
if (countEl) {
  countEl.textContent = `Hiển thị ${dataList.length}/${scamLibrary.length} kịch bản.`;
}

  if (!dataList.length) {
    gridContainer.innerHTML = `
      <div class="text-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-xl text-slate-400">
        Chưa tìm thấy kịch bản lừa đảo nào khớp với từ khóa.
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = "";

  dataList.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2 hover:border-slate-300 transition duration-150";

    card.innerHTML = `
      <div class="flex justify-between items-start gap-2">
        <h4 class="text-base font-bold text-slate-800">${escapeHtml(item.title)}</h4>
        ${getBadge(item.category)}
      </div>

      <p class="text-sm text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
        ${escapeHtml(item.desc)}
      </p>

      <div class="text-xs text-slate-500 font-mono bg-orange-50/80 p-2 rounded border border-orange-100 line-clamp-2 select-all">
        <strong>Mẫu SMS:</strong> "${escapeHtml(item.msg)}"
      </div>

      <div class="pt-1 flex justify-end">
        <button onclick="triggerVerification('${escapeHtml(item.id)}')"
          class="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition duration-150 border border-blue-200 shadow-sm">
          ⚡ Thử kiểm tra ngay
        </button>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

function triggerVerification(scamId) {
  const targetScam = scamLibrary.find(item => item.id === scamId);
  if (!targetScam) return;

  document.getElementById("message").value = targetScam.msg;
  switchTab("analyzer");
  analyzeMessage();
}

function getBadge(category) {
  if (category === "bank") return `<span class="badge bg-blue-50 text-blue-700 border-blue-200">🏦 NGÂN HÀNG</span>`;
  if (category === "police") return `<span class="badge bg-red-50 text-red-700 border-red-200">👮 CÔNG AN</span>`;
  if (category === "gift") return `<span class="badge bg-amber-50 text-amber-700 border-amber-200">🎁 TRÚNG THƯỞNG</span>`;
  if (category === "delivery") return `<span class="badge bg-purple-50 text-purple-700 border-purple-200">📦 GIAO HÀNG</span>`;
  return "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}
function buildRescueSection(originalMsg, data) {
  return `
    <div class="rescue-card">
      <div class="rescue-title">🚨 Người ứng cứu</div>
      <p class="text-slate-700 text-base leading-relaxed">
        Nếu người dùng đã lỡ tương tác với tin nhắn này, hãy chọn tình huống gần đúng nhất để xem bước xử lý nhanh.
      </p>

      <div class="rescue-option-grid">
        <button class="rescue-btn" onclick="showRescuePlan('none')">
          ✅ Chưa làm gì
        </button>

        <button class="rescue-btn" onclick="showRescuePlan('clicked')">
          🔗 Đã bấm vào đường dẫn
        </button>

        <button class="rescue-btn" onclick="showRescuePlan('transferred')">
          💸 Đã chuyển khoản
        </button>

        <button class="rescue-btn" onclick="showRescuePlan('otp')">
          🔐 Đã cung cấp mã xác thực / OTP
        </button>
      </div>

      <div id="rescue-detail" class="rescue-detail hidden"></div>
    </div>
  `;
}

function showRescuePlan(choice) {
  const detail = document.getElementById("rescue-detail");
  if (!detail) return;

  const steps = getRescueSteps(choice);
  const hotlines = getRecommendedHotlines(choice, latestAnalyzedMessage);

  detail.classList.remove("hidden");

  detail.innerHTML = `
    <h4 class="font-black text-red-800 mb-2">📌 Việc cần làm ngay</h4>

    <ol class="list-decimal pl-5 space-y-2 text-slate-800 font-medium">
      ${steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}
    </ol>

    <h4 class="font-black text-blue-800 mt-4 mb-2">☎️ Số nên liên hệ</h4>

    ${hotlines.map(item => `
      <div class="hotline-item">
        <div class="font-bold text-slate-800">${escapeHtml(item.name)}</div>
        <a class="hotline-number" href="tel:${escapeHtml(item.number)}">${escapeHtml(item.number)}</a>
        <div class="text-sm text-slate-600 mt-1">${escapeHtml(item.note)}</div>
      </div>
    `).join("")}
  `;
}

function getRescueSteps(choice) {
  if (choice === "none") {
    return [
      "Không bấm thêm bất kỳ đường dẫn nào trong tin nhắn.",
      "Chụp màn hình hoặc lưu lại tin nhắn làm bằng chứng.",
      "Chặn số gửi tin và báo cho người thân biết để cùng kiểm tra."
    ];
  }

  if (choice === "clicked") {
    return [
      "Đóng ngay trang web vừa mở, không nhập thêm thông tin.",
      "Nếu đã nhập mật khẩu, hãy đổi mật khẩu ngay trên app/trang chính thức.",
      "Gọi ngân hàng hoặc tổng đài liên quan nếu tin nhắn có nhắc tới tài khoản, thẻ hoặc OTP."
    ];
  }

  if (choice === "transferred") {
    return [
      "Gọi ngay ngân hàng để yêu cầu khóa/tra soát giao dịch.",
      "Lưu lại số tài khoản nhận tiền, biên lai chuyển khoản, tin nhắn và đường dẫn.",
      "Liên hệ công an hoặc tổng đài phản ánh lừa đảo để được hướng dẫn tiếp."
    ];
  }

  if (choice === "otp") {
    return [
      "Gọi ngay ngân hàng để khóa tài khoản, thẻ hoặc dịch vụ ngân hàng số.",
      "Đổi mật khẩu tài khoản liên quan trên ứng dụng/trang chính thức.",
      "Không đọc lại OTP cho bất kỳ ai, kể cả người tự xưng là nhân viên ngân hàng/công an."
    ];
  }

  return [
    "Giữ bình tĩnh và không làm theo yêu cầu trong tin nhắn.",
    "Lưu bằng chứng.",
    "Liên hệ người thân hoặc tổng đài chính thức."
  ];
}

function getRecommendedHotlines(choice, message) {
  const clean = String(message || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const selected = [];

  if (choice === "transferred" || choice === "otp") {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h =>
          h.tags.includes("police") ||
          h.tags.includes("report")
      )
    );
  }

  if (choice === "clicked" || choice === "none") {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("report")
      )
    );
  }

  if (
    clean.includes("vietcombank") ||
    clean.includes("vietcornbank") ||
    clean.includes("vcb")
  ) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("vietcombank")
      )
    );
  }

  if (clean.includes("bidv")) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("bidv")
      )
    );
  }

  if (clean.includes("agribank")) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("agribank")
      )
    );
  }

  if (
    clean.includes("ngan hang") ||
    clean.includes("tai khoan") ||
    clean.includes("the") ||
    clean.includes("otp") ||
    clean.includes("chuyen khoan")
  ) {
    selected.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.tags.includes("bank")
      )
    );
  }

  const unique = [];
  const seen = new Set();

  selected.forEach(item => {
    if (!seen.has(item.number)) {
      seen.add(item.number);
      unique.push(item);
    }
  });

  if (unique.length === 0) {
    unique.push(
      ...VERIFIED_HOTLINES.filter(
        h => h.number === "156" || h.number === "5656"
      )
    );
  }

  return unique.slice(0, 6);
}
function clearLibrarySearch() {
  const input = document.getElementById("library-search");
  if (input) input.value = "";

  currentCategory = "all";

  document.querySelectorAll(".lib-filter-btn").forEach(btn => {
    btn.className = "lib-filter-btn";
  });

  const firstBtn = document.querySelector(".lib-filter-btn");
  if (firstBtn) firstBtn.className = "lib-filter-btn active-filter";

  renderLibraryGrid(scamLibrary);
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("scamcheck_theme", isDark ? "dark" : "light");

  const btn = document.getElementById("theme-toggle");
  if (btn) btn.innerText = isDark ? "☀️ Light" : "🌙 Dark";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("scamcheck_theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.innerText = document.body.classList.contains("dark-mode")
      ? "☀️ Light"
      : "🌙 Dark";
  }
});
function clearHistory() {
  const history =
    JSON.parse(localStorage.getItem("scamcheck_history")) || [];

  if (history.length === 0) {
    alert("📭 Chưa có lịch sử nào để xóa.");
    return;
  }

  const confirmDelete = confirm(
    `🗑️ Bạn có chắc muốn xóa ${history.length} mục lịch sử kiểm tra?`
  );

  if (!confirmDelete) return;

  localStorage.removeItem("scamcheck_history");

  renderHistory();

  alert("✅ Đã xóa toàn bộ lịch sử kiểm tra.");
}
