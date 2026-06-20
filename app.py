import os, json
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from google import genai

load_dotenv()

app = Flask(__name__)
CORS(app)

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

@app.post("/analyze")
def analyze():
    msg = request.json.get("message", "")

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"""
Phân tích tin nhắn lừa đảo sau và chỉ trả JSON:
{msg}

Format:
{{
  "risk":"An toàn | Nghi ngờ | Nguy hiểm",
  "indicators":[{{"quote":"...","reason":"..."}}],
  "actions":["...","...","..."],
  "psychology":{{"manipulation":"...","advice":"..."}}
}}
"""
    )

    text = response.text.replace("```json", "").replace("```", "").strip()
    return jsonify(json.loads(text))

app.run(host="0.0.0.0", port=5000)
