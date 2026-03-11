from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)

# CORS: allow ONLY your frontend
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173"]
    }
})

# Load trained objects
model = joblib.load("crop_gnb_model.pkl")
label_encoder = joblib.load("label_encoder.pkl")
scaler = joblib.load("scaler.pkl")

FEATURES = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"]

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "Running",
        "service": "Crop Recommendation API"
    })


@app.route("/api/predict", methods=["POST", "OPTIONS"])
def predict():

    # ✅ Handle CORS preflight FIRST
    if request.method == "OPTIONS":
        return ("", 204)

    # ⬇️ POST starts here
    data = request.get_json(silent=True)

    if not data:
        return jsonify({"error": "No JSON body provided"}), 400

    for feature in FEATURES:
        if feature not in data:
            return jsonify({"error": f"Missing field: {feature}"}), 400

    values = [
        data["N"], data["P"], data["K"],
        data["temperature"], data["humidity"],
        data["ph"], data["rainfall"]
    ]

    input_data = np.array(values).reshape(1, -1)
    input_scaled = scaler.transform(input_data)

    prediction = model.predict(input_scaled)[0]
    probabilities = model.predict_proba(input_scaled)[0]

    crop_name = label_encoder.inverse_transform([prediction])[0]

    return jsonify({
        "recommended_crop": crop_name,
        "confidence_percent": round(probabilities[prediction] * 100, 2)
    })



if __name__ == "__main__":
    app.run(
        host="localhost",
        port=5000,
        debug=True,
        use_reloader=False
    )

