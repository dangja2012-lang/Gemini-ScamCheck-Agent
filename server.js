import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

function extractUrls(text) {
  return String(text).match(/https?:\/\/[^\s]+/g) || [];
}

async function expandUrl(shortUrl) {
  try {
    const response = await fetch(shortUrl, {
      method: "GET",
      redirect: "follow"
    });

    return response.url || shortUrl;
  } catch {
    return shortUrl;
  }
}

async function expandLinksInMessage(message) {
  const urls = extractUrls(message);
  let expandedMessage = message;
  const links = [];

  for (const url of urls) {
    const finalUrl = await expandUrl(url);

    links.push({
      original: url,
      final: finalUrl
    });

    expandedMessage = expandedMessage.replace(
      url,
      `${url} → LINK_THẬT: ${finalUrl}`
    );
  }

  return {
    expandedMessage,
    links
  };
}
app.post("/analyze", async (req, res) => {
  console.log("Loaded keys:", GEMINI_KEYS.length);

  GEMINI_KEYS.forEach((key, i) => {
    console.log(`Key ${i + 1}:`, key.substring(0, 10) + "...");
  });

  const message = req.body.message;
const { expandedMessage, links } = await expandLinksInMessage(message);

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  console.log("Keys loaded:", GEMINI_KEYS.length);
  console.log("Model:", GEMINI_MODEL);

  for (let i = 0; i < GEMINI_KEYS.length; i++) {
    const apiKey = GEMINI_KEYS[i];

    try {
      console.log(`Trying key ${i + 1}`);

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
Bạn là ScamCheck, chuyên gia phát hiện lừa đảo.

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

- Nếu đường dẫn mở tới website giả mạo, tên miền bất thường hoặc tin nhắn yêu cầu OTP, chuyển tiền, đăng nhập, cài ứng dụng,
  => đánh giá "Nguy hiểm".

Chỉ trả về JSON:

{
  "risk": "",
  "indicators": [],
  "actions": [],
  "psychology": null
}
`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.1,
            responseMimeType: "application/json"
          }
        })
      });

      const raw = await response.text();

      if (!response.ok) {
        console.log(`Gemini key ${i + 1} failed:`, response.status, raw);
        continue;
      }

      console.log(`Gemini key ${i + 1} worked`);

      const data = JSON.parse(raw);
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      return res.json(JSON.parse(text));
    } catch (err) {
      console.log(`Key ${i + 1} crashed:`, err.message);
    }
  }

  return res.status(500).json({
    error: "All API keys failed",
    keysLoaded: GEMINI_KEYS.length,
    model: GEMINI_MODEL
  });
});

app.get("/", (req, res) => {
  res.send("ScamCheck backend is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});