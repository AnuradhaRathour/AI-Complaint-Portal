from flask import Flask, request, jsonify
from flask_cors import CORS
from ai_engine import predict_priority

app = Flask(__name__)
CORS(app)

complaints = []

@app.route("/submit", methods=["POST"])
def submit_complaint():
    data = request.json
    text = data.get("complaint")

    priority = predict_priority(text)

    complaint_data = {
        "complaint": text,
        "priority": priority
    }

    complaints.append(complaint_data)

    return jsonify(complaint_data)

@app.route("/complaints", methods=["GET"])
def get_complaints():
    return jsonify(complaints)

if __name__ == "__main__":
    app.run(debug=True)
