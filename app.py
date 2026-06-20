import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from google import genai

load_dotenv()

app = Flask(__name__)

CORS(
    app,
    resources={
        r"/*": {
            "origins": [
                "https://dangja2012-lang.github.io",
                "http://localhost:5500",
                "http://127.0.0.1:5500"
            ]
        }
    }
)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

@app.route("/")
def health():
    return {
        "status": "ok",
        "service": "ScamCheck Backend"
    }


@app.route("/analyze", methods=["POST"])
def analyze():

    try:
        body = request.get_json()

        message = body.get("message", "").strip()

        if not message:
            return jsonify({
                "error": "Message is required"
            }), 400

        prompt = f"""
Bạn là ScamCheck.

Phân tích tin nhắn sau:

{message}

Trả về JSON duy nhất:

{{
  "risk":"An toàn | Nghi ngờ | Nguy hiểm",
  "indicators":[
    {{
      "quote":"...",
      "reason":"..."
    }}
  ],
  "actions":[
    "...",
    "...",
    "..."
  ],
  "psychology": {{
    "manipulation":"...",
    "advice":"..."
  }}
}}

Không dùng markdown.
Không dùng ```json.
"""

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        text = (
            text.replace("```json", "")
                .replace("```", "")
                .strip()
        )

        result = json.loads(text)

        return jsonify(result)

    except Exception as e:
        print(e)

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
