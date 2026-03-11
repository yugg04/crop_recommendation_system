# 🌱 Crop Recommendation System

A web-based decision support system that recommends suitable crops based on soil nutrient composition and environmental conditions using machine learning.

⚠️ This system is intended for **decision support only**, not guaranteed predictions.

---

## 🔹 Tech Stack

- **Frontend:** React  
- **Backend:** Spring Boot (Java, REST API)  
- **ML Service:** Python (scikit-learn, pandas, NumPy)  
- **Dataset:** CSV file used for model logic and training  

---

## 🔹 Features

- Accepts soil and climate parameters:
  - Nitrogen (N), Phosphorus (P), Potassium (K)
  - Temperature, Humidity
  - pH level, Rainfall
- Provides ranked crop recommendations
- Input validation to avoid unrealistic values
- Clean and responsive user interface
- Modular architecture with clear separation of concerns

---

## 🔹 System Flow

1. User enters soil and climate data in the frontend.
2. React frontend sends the data to the Spring Boot backend.
3. Backend validates inputs and forwards them to the ML service.
4. ML service processes the input and returns ranked crop suitability.
5. Backend formats the response and sends it back to the frontend.


---

## 🔹 Setup Instructions

### Frontend
```bash
cd Frontend
npm install
npm run dev
```

### Backend
```bash
cd Backend
mvn spring-boot:run
```

### ML Service
```bash
cd ML_Service
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python crop.py
```
