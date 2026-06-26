import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_KEYS = [
  process.env.API_KEY_1,
  process.env.API_KEY_2,
  process.env.API_KEY_3,
  process.env.API_KEY_4,
  process.env.API_KEY_5
].filter(Boolean);

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

app.post("/analyze", async (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({ error: "Missing message" });
  }

  for (const apiKey of GEMINI_KEYS) {
    try {
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

Trả về JSON:
{
  "risk": "An toàn" hoặc "Nghi ngờ" hoặc "Nguy hiểm",
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

      if (!response.ok) continue;

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      return res.json(JSON.parse(text));
    } catch (err) {
      console.log("Key failed, trying next...");
    }
  }

  res.status(500).json({ error: "All API keys failed" });
});

app.get("/", (req, res) => {
  res.send("ScamCheck backend is running");
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});