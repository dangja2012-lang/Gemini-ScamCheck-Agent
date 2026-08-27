import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns/promises";
import net from "node:net";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_KEYS = [
  process.env.API_KEY_1?.trim(),
  process.env.API_KEY_2?.trim(),
  process.env.API_KEY_3?.trim(),
  process.env.API_KEY_4?.trim(),
  process.env.API_KEY_5?.trim()
].filter(Boolean);

const GEMINI_MODEL = process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";
const MAX_REDIRECTS = 8;
const FETCH_TIMEOUT_MS = 8000;
const KNOWN_SHORTENERS = new Set([
  "bit.ly", "www.bit.ly", "tinyurl.com", "www.tinyurl.com", "t.co",
  "goo.gl", "ow.ly", "buff.ly", "is.gd", "cutt.ly", "shorturl.at",
  "tiny.one", "rebrand.ly", "rb.gy", "s.id", "bom.so"
]);

const SUPPORTED_LANGUAGES = {
  vi: "Vietnamese", en: "English", "zh-CN": "Simplified Chinese",
  "zh-TW": "Traditional Chinese", es: "Spanish", fr: "French", de: "German",
  ja: "Japanese", ko: "Korean", th: "Thai", id: "Indonesian", ms: "Malay",
  fil: "Filipino", hi: "Hindi", ar: "Arabic", ru: "Russian", pt: "Portuguese",
  it: "Italian", nl: "Dutch", pl: "Polish", tr: "Turkish", sv: "Swedish",
  no: "Norwegian", da: "Danish", fi: "Finnish", cs: "Czech", uk: "Ukrainian",
  ro: "Romanian", el: "Greek", he: "Hebrew"
};

const UI_TRANSLATION_SOURCE = {
  languageLabel: "Language", tagline: "🕵️‍♂️ Technical Detective & 🧠 Psychology Guide protecting your family",
  themeDark: "🌙 Dark", themeLight: "☀️ Light",
  analyzeTab: "🔍 Analyze", libraryTab: "📚 Scam Library", samplesLabel: "Try a sample message:",
  sampleBank: "🏦 Fake bank", samplePolice: "👮 Fake police", samplePrize: "🎁 Fake prize",
  messagePlaceholder: "Paste or type a suspicious message here...", analyzeButton: "🔍 Check now",
  libraryTitle: "📚 Scam Library", libraryDescription: "Browse common scam types and search by title, description, message, or category.",
  searchPlaceholder: "Search: bank, police, delivery, OTP...", clear: "Clear", all: "All", bank: "🏦 Bank",
  police: "👮 Police", prize: "🎁 Prize", delivery: "📦 Delivery", historyTitle: "⏳ Check history",
  clearHistory: "🗑️ Clear", noHistory: "No checks yet.",
  legalNotice: "Legal notice: ScamCheck is an educational tool developed by students. Its assessments do not replace official warnings from banks or authorities.",
  inputRequired: "⚠️ Please enter or paste a message to check.", tooLong: "⚠️ The message is too long. Please keep it under 5,000 characters.",
  resolving: "🔍 Opening and decoding shortened links...", analyzing: "Analyzing with Gemini...",
  fallbackNotice: "Gemini did not return a valid result, so the backup analyzer is being used.", riskLevel: "Risk level",
  safe: "Safe", suspicious: "Suspicious", dangerous: "Dangerous", originalMessage: "Original message:",
  detective: "Detective", detectedSigns: "🔎 Technical warning signs:", noSigns: "No clear technical danger signs were found.",
  recommendedActions: "🛠️ Recommended actions:", psychologist: "Psychology Guide", manipulation: "🎯 Psychological manipulation:",
  rescue: "🚨 Emergency Helper", rescueIntro: "If you already interacted with this message, choose the closest situation for immediate steps.",
  none: "✅ I did nothing", clicked: "🔗 I opened the link", transferred: "💸 I transferred money", otp: "🔐 I shared an OTP/code",
  immediateSteps: "📌 Do this now", contactNumbers: "☎️ Who to contact", linkCheck: "🔗 Link inspection",
  resolvedLink: "Destination opened", unresolvedLink: "Destination could not be opened", finalDomain: "Destination domain",
  loadingDetective: "🕵️‍♂️ The detective is analyzing the message and its links...", loadingPsychologist: "🧠 The psychology guide will appear if the message is risky.",
  fallbackReason: "This message needs further verification.", fallbackAction1: "Do not open unfamiliar links.",
  fallbackAction2: "Do not share OTPs, passwords, or account information.", fallbackAction3: "Contact the official organization or ask someone you trust first.",
  fallbackManipulation: "The message may create urgency so the recipient acts without thinking.", fallbackAdvice: "Stay calm and verify the request before acting.",
  fallbackLinkReason: "An unfamiliar link or verification-code request needs immediate checking.", fallbackPoliceReason: "The message may impersonate an authority to frighten the recipient.", fallbackPrizeReason: "The prize claim appears to demand an advance fee.", backupSource: "Backup",
  rescueNone1: "Do not open any links in the message.", rescueNone2: "Save a screenshot or the original message as evidence.", rescueNone3: "Block the sender and warn someone you trust.",
  rescueClicked1: "Close the website immediately and enter no more information.", rescueClicked2: "If you entered a password, change it through the official app or website.", rescueClicked3: "Contact the bank or organization being impersonated.",
  rescueTransferred1: "Call your bank immediately to block or trace the transaction.", rescueTransferred2: "Save the receipt, recipient account, messages, and links.", rescueTransferred3: "Report the incident to the police and provide the evidence.",
  rescueOtp1: "Call the bank to lock your account, card, or online banking.", rescueOtp2: "Change related passwords through official channels.", rescueOtp3: "Review transactions and do not share any more OTPs."
};
const translationCache = new Map();
const GEMINI_MODELS = [...new Set([GEMINI_MODEL, "gemini-2.5-flash-lite"])];

function parseJsonText(text) {
  const cleaned = String(text || "")
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start < 0 || end <= start) throw new Error("Gemini returned invalid JSON");
    return JSON.parse(cleaned.slice(start, end + 1));
  }
}

function readGeminiError(status, raw) {
  let message = String(raw || "").slice(0, 300);
  try {
    const parsed = JSON.parse(raw);
    message = parsed?.error?.message || parsed?.error?.status || message;
  } catch {}
  return { status, message: message.replace(/key=[^&\s]+/gi, "key=[hidden]") };
}

function classifyFailures(failures) {
  const combined = failures.map(item => `${item.status} ${item.message}`).join(" ");
  if (/API_KEY_INVALID|API key not valid|invalid api key/i.test(combined)) {
    return { reason: "INVALID_API_KEY", hint: "Gemini rejected the API keys. Replace API_KEY_1 in Render with a new Google AI Studio key, then redeploy." };
  }
  if (/429|RESOURCE_EXHAUSTED|quota/i.test(combined)) {
    return { reason: "QUOTA_EXCEEDED", hint: "The Gemini quota is exhausted. Use a key from a project with available quota or enable billing, then redeploy." };
  }
  if (/403|PERMISSION_DENIED/i.test(combined)) {
    return { reason: "PERMISSION_DENIED", hint: "The Gemini API is not enabled or the key restrictions reject Render. Check the key restrictions in Google AI Studio/Cloud." };
  }
  if (/400|INVALID_ARGUMENT|schema/i.test(combined)) {
    return { reason: "BAD_REQUEST", hint: "Gemini rejected the request format. Check the Render logs for the sanitized upstream message." };
  }
  return { reason: "GEMINI_UNAVAILABLE", hint: "Gemini is temporarily unavailable. Check the Render logs and try again." };
}

function extractUrls(text) {
  return (String(text).match(/https?:\/\/[^\s<>"']+/gi) || [])
    .map(url => url.replace(/[),.;!?\]}]+$/g, ""));
}

function isPrivateIp(address) {
  if (net.isIPv4(address)) {
    const [a, b] = address.split(".").map(Number);
    return a === 10 || a === 127 || a === 0 ||
      (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168);
  }
  if (net.isIPv6(address)) {
    const value = address.toLowerCase();
    return value === "::1" || value === "::" || value.startsWith("fc") ||
      value.startsWith("fd") || value.startsWith("fe80:");
  }
  return true;
}

async function assertPublicUrl(rawUrl) {
  const parsed = new URL(rawUrl);
  if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("Unsupported protocol");
  if (parsed.username || parsed.password) throw new Error("Credentials in URL are not allowed");
  let addresses = net.isIP(parsed.hostname) ? [{ address: parsed.hostname }] : [];
  if (!addresses.length) {
    let lastError;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        addresses = await dns.lookup(parsed.hostname, { all: true });
        break;
      } catch (error) {
        lastError = error;
        if (error.code !== "EAI_AGAIN" || attempt === 2) throw error;
        await new Promise(resolve => setTimeout(resolve, 150 * (attempt + 1)));
      }
    }
    if (!addresses.length && lastError) throw lastError;
  }
  if (!addresses.length || addresses.some(item => isPrivateIp(item.address))) {
    throw new Error("Private or local destination blocked");
  }
  return parsed;
}

async function expandUrl(shortUrl) {
  const chain = [shortUrl];
  let currentUrl = shortUrl;

  try {
    for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
      await assertPublicUrl(currentUrl);
      const response = await fetch(currentUrl, {
      method: "GET",
        redirect: "manual",
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; ScamCheck/1.0; +https://github.com/)",
          "Accept": "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.5"
        }
      });

      if (response.status >= 300 && response.status < 400) {
        const location = response.headers.get("location");
        await response.body?.cancel();
        if (!location) throw new Error(`Redirect ${response.status} has no destination`);
        const nextUrl = new URL(location, currentUrl).href;
        if (chain.includes(nextUrl)) throw new Error("Redirect loop detected");
        chain.push(nextUrl);
        currentUrl = nextUrl;
        continue;
      }

      const originalHost = new URL(shortUrl).hostname.toLowerCase();
      await response.body?.cancel();
      return {
        original: shortUrl,
        final: currentUrl,
        chain,
        status: response.status,
        shortened: KNOWN_SHORTENERS.has(originalHost),
        resolved: currentUrl !== shortUrl || !KNOWN_SHORTENERS.has(originalHost)
      };
    }
    throw new Error(`Too many redirects (maximum ${MAX_REDIRECTS})`);
  } catch (error) {
    let shortened = false;
    try {
      shortened = KNOWN_SHORTENERS.has(new URL(shortUrl).hostname.toLowerCase());
    } catch {}
    return {
      original: shortUrl,
      final: shortUrl,
      chain,
      status: null,
      shortened,
      resolved: false,
      error: error.message
    };
  }
}

async function expandLinksInMessage(message) {
  const urls = extractUrls(message);
  let expandedMessage = message;
  const links = [];

  const results = await Promise.all(urls.map(expandUrl));
  for (const result of results) {
    links.push(result);
    const resolution = result.resolved
      ? `DESTINATION_URL: ${result.final}`
      : `UNRESOLVED_URL: ${result.original}${result.error ? ` (${result.error})` : ""}`;
    expandedMessage = expandedMessage.replace(result.original, `${result.original} → ${resolution}`);
  }

  return {
    expandedMessage,
    links
  };
}
app.post("/analyze", async (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: "Message is too long" });
  }

  const { expandedMessage, links } = await expandLinksInMessage(message);
  const languageCode = SUPPORTED_LANGUAGES[req.body?.language] ? req.body.language : "vi";
  const outputLanguage = SUPPORTED_LANGUAGES[languageCode];

  if (!GEMINI_KEYS.length) {
    return res.status(503).json({
      error: "Gemini is not configured",
      reason: "MISSING_API_KEY",
      hint: "Add API_KEY_1 to the Render environment and redeploy."
    });
  }

  const prompt = `
Bạn là ScamCheck, một nhóm gồm Thám tử kỹ thuật, Cô tâm lý và Người ứng cứu.

Phân tích tin nhắn sau:

"""${expandedMessage}"""

Các đường dẫn đã được giải mã:

${JSON.stringify(links, null, 2)}

QUY TẮC QUAN TRỌNG:

- Nếu đường dẫn rút gọn mở tới Google Drive, Google Docs, Microsoft OneDrive hoặc website học tập/chính thức đáng tin cậy,
  VÀ tin nhắn không yêu cầu OTP, mật khẩu, chuyển tiền hoặc thông tin cá nhân,
  => đánh giá "An toàn".

- Nếu đường dẫn rút gọn không giải mã được,
  => đánh giá "Nghi ngờ".

- Nếu đường dẫn đã giải mã được, phải đánh giá tên miền ĐÍCH và yêu cầu trong tin nhắn;
  không được kết luận nguy hiểm chỉ vì URL ban đầu là bit.ly hoặc dịch vụ rút gọn.

- Nếu đường dẫn mở tới website giả mạo, tên miền bất thường hoặc tin nhắn yêu cầu OTP, chuyển tiền, đăng nhập, cài ứng dụng,
  => đánh giá "Nguy hiểm".

Hãy tự viết nội dung riêng, cụ thể cho chính tin nhắn này. Không dùng lời khuyên chung chung nếu
có thể nhắc trực tiếp chi tiết trong tin nhắn. Trích dẫn phải thực sự xuất hiện trong tin nhắn.

- Thám tử: indicators gồm 1-4 dấu hiệu và actions gồm đúng 3 hành động cụ thể.
- Cô tâm lý: nếu có rủi ro, giải thích thủ thuật thao túng và viết lời trấn an tự nhiên.
- Người ứng cứu: nếu có rủi ro, viết đúng 3 bước riêng cho từng trường hợp none, clicked,
  transferred và otp. Không tự bịa số điện thoại; giao diện sẽ ghép các số đã kiểm chứng.
- Nếu an toàn: indicators có thể rỗng, psychology và rescue phải là null.
- Giữ giá trị risk đúng một trong ba từ tiếng Việt trong schema để ứng dụng xử lý.
- Viết TẤT CẢ nội dung còn lại bằng ${outputLanguage}.
- Chỉ trả về một JSON object, không thêm Markdown, theo đúng cấu trúc:
{
  "risk": "An toàn | Nghi ngờ | Nguy hiểm",
  "indicators": [{ "quote": "trích dẫn thật", "reason": "giải thích" }],
  "actions": ["bước 1", "bước 2", "bước 3"],
  "psychology": null hoặc { "manipulation": "...", "advice": "..." },
  "rescue": null hoặc {
    "none": ["...", "...", "..."],
    "clicked": ["...", "...", "..."],
    "transferred": ["...", "...", "..."],
    "otp": ["...", "...", "..."]
  }
}`;

  const failures = [];
  for (let i = 0; i < GEMINI_KEYS.length; i++) {
    for (const model of GEMINI_MODELS) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEYS[i]}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0.2,
                maxOutputTokens: 4096,
                responseMimeType: "application/json"
              }
            })
          }
        );

        const raw = await response.text();
        if (!response.ok) {
          const failure = { key: i + 1, model, ...readGeminiError(response.status, raw) };
          failures.push(failure);
          console.warn("Gemini request failed:", failure);
          continue;
        }

        const envelope = JSON.parse(raw);
        const text = envelope.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error(`Empty Gemini response (${envelope.candidates?.[0]?.finishReason || "unknown"})`);
        const result = parseJsonText(text);
        return res.json({ ...result, linkAnalysis: links, language: languageCode, model });
      } catch (error) {
        const failure = { key: i + 1, model, status: 0, message: error.message };
        failures.push(failure);
        console.warn("Gemini request crashed:", failure);
      }
    }
  }

  const diagnosis = classifyFailures(failures);
  return res.status(diagnosis.reason === "QUOTA_EXCEEDED" ? 429 : 502).json({
    error: "Gemini request failed",
    ...diagnosis,
    keysLoaded: GEMINI_KEYS.length,
    modelsTried: GEMINI_MODELS,
    failures: failures.slice(0, 4)
  });
});

app.post("/resolve-link", async (req, res) => {
  const rawUrl = typeof req.body?.url === "string" ? req.body.url.trim() : "";
  if (!rawUrl) return res.status(400).json({ error: "Missing URL" });
  try {
    new URL(rawUrl);
  } catch {
    return res.status(400).json({ error: "Invalid URL" });
  }
  return res.json(await expandUrl(rawUrl));
});

app.post("/translations", async (req, res) => {
  const languageCode = req.body?.language;
  const language = SUPPORTED_LANGUAGES[languageCode];
  if (!language) return res.status(400).json({ error: "Unsupported language" });
  if (translationCache.has(languageCode)) return res.json(translationCache.get(languageCode));

  const keys = Object.keys(UI_TRANSLATION_SOURCE);
  for (let i = 0; i < GEMINI_KEYS.length; i++) {
    for (const model of GEMINI_MODELS) {
      try {
        const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEYS[i]}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Translate every JSON value into ${language}. Preserve all keys, emojis, ScamCheck, Gemini, OTP, and numbers. Return one JSON object only.\n\n${JSON.stringify(UI_TRANSLATION_SOURCE)}` }] }],
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 4096,
              responseMimeType: "application/json"
            }
          })
        }
      );
      if (!response.ok) continue;
      const raw = await response.json();
      const text = raw.candidates?.[0]?.content?.parts?.[0]?.text;
      const translated = parseJsonText(text);
      if (!keys.every(key => typeof translated[key] === "string")) {
        throw new Error("Translation response is missing required fields");
      }
      translationCache.set(languageCode, translated);
      return res.json(translated);
      } catch (error) {
        console.warn(`Translation key ${i + 1} with ${model} failed:`, error.message);
      }
    }
  }

  return res.status(502).json({ error: "Translation service unavailable" });
});

app.get("/", (req, res) => {
  res.send("ScamCheck backend is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
