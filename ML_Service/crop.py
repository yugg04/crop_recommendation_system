from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import os

app = Flask(__name__)
CORS(app)

# Safe model loading
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

try:
    model = joblib.load(os.path.join(BASE_DIR, "crop_gnb_model.pkl"))
    scaler = joblib.load(os.path.join(BASE_DIR, "scaler.pkl"))
    label_encoder = joblib.load(os.path.join(BASE_DIR, "label_encoder.pkl"))
except Exception as e:
    print("Model loading error:", e)
    model = None

FEATURES = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"]

@app.route("/")
def home():
    return jsonify({"status": "API Running"})

@app.route("/predict", methods=["POST"])
def predict():

    if model is None:
        return jsonify({"error": "Model not loaded"}), 500

    data = request.get_json(silent=True)

    if not data:
        return jsonify({"error": "No JSON provided"}), 400

    # Validate input
    for f in FEATURES:
        if f not in data:
            return jsonify({"error": f"Missing field: {f}"}), 400

    try:
        values = [float(data[f]) for f in FEATURES]

        input_data = np.array(values).reshape(1, -1)
        input_scaled = scaler.transform(input_data)

        probs = model.predict_proba(input_scaled)[0]
        top3_idx = np.argsort(probs)[-3:][::-1]

        crops = label_encoder.inverse_transform(top3_idx)

        return jsonify({
            "crop1": crops[0],
            "crop2": crops[1],
            "crop3": crops[2]
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
