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

app.post("/analyze", async (req, res) => {
  console.log("Loaded keys:", GEMINI_KEYS.length);

  GEMINI_KEYS.forEach((key, i) => {
    console.log(`Key ${i + 1}:`, key.substring(0, 10) + "...");
  });

  const message = req.body.message;

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
Bạn là ScamCheck, công cụ giáo dục chống lừa đảo.

Phân tích tin nhắn:
"""${message}"""

Chỉ trả về JSON hợp lệ:
{
  "risk": "An toàn",
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