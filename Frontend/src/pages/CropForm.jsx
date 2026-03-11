import React, { useEffect, useState } from "react";
import { getRecommendation } from "../services/api";
import axios from "axios";

const CropForm = ({ onResult, onLoading, onError }) => {
  const [formData, setFormData] = useState({
    N: Math.floor(Math.random() * 100),
    P: Math.floor(Math.random() * 100),
    K: Math.floor(Math.random() * 100),
    temperature: Math.floor(Math.random() * 30) + 10,
    humidity: Math.floor(Math.random() * 50) + 50,
    ph: parseFloat((Math.random() * 4 + 5).toFixed(1)),
    rainfall: Math.floor(Math.random() * 200) + 50,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.N || formData.N < 0)
      newErrors.N = "Valid Nitrogen content is required";
    if (!formData.P || formData.P < 0)
      newErrors.P = "Valid Phosphorus content is required";
    if (!formData.K || formData.K < 0)
      newErrors.K = "Valid Potassium content is required";
    if (
      !formData.temperature ||
      formData.temperature < 0 ||
      formData.temperature > 60
    )
      newErrors.temperature = "Valid Temperature (0 to 60) is required";
    if (!formData.humidity || formData.humidity < 0 || formData.humidity > 100)
      newErrors.humidity = "Valid Humidity (0-100) is required";
    if (!formData.ph || formData.ph < 0 || formData.ph > 14)
      newErrors.ph = "Valid pH (0-14) is required";
    if (!formData.rainfall || formData.rainfall < 0)
      newErrors.rainfall = "Valid Rainfall is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onLoading(true);
    onError(null);
    onResult(null);

    try {
      const data = {
        N: parseFloat(formData.N),
        P: parseFloat(formData.P),
        K: parseFloat(formData.K),
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
      };

      const result = await getRecommendation(data);
      onResult(result);
    } catch (err) {
      console.error("API Error:", err);
      let msg = err.message || "Failed to fetch recommendation";
      if (msg === "Network Error") {
        msg = "Cannot connect to Backend (Is it running? Check port 8080).";
      } else if (err.error) {
        msg = `Server Error: ${err.error}`;
      }
      onError(msg);
    } finally {
      onLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      N: Math.floor(Math.random() * 100),
      P: Math.floor(Math.random() * 100),
      K: Math.floor(Math.random() * 100),
      temperature: Math.floor(Math.random() * 30) + 10,
      humidity: Math.floor(Math.random() * 50) + 50,
      ph: parseFloat((Math.random() * 4 + 5).toFixed(1)),
      rainfall: Math.floor(Math.random() * 200) + 50,
    });
    setErrors({});
    onResult(null);
    onError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-4xl shadow-xl border border-white/60 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
        <div className="bg-green-100 p-2 rounded-xl text-2xl">🧪</div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Soil Analysis Data
          </h2>
          <p className="text-sm text-gray-500">
            Enter your soil parameters below
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-10">
        {[
          {
            label: "Nitrogen (N)",
            name: "N",
            min: 0,
            max: 140,
            suffix: "",
            icon: "🌱",
          },
          {
            label: "Phosphorus (P)",
            name: "P",
            min: 0,
            max: 145,
            suffix: "",
            icon: "⚡",
          },
          {
            label: "Potassium (K)",
            name: "K",
            min: 0,
            max: 205,
            suffix: "",
            icon: "⚛️",
          },
          {
            label: "Temperature",
            name: "temperature",
            min: 0,
            max: 60,
            step: 0.1,
            suffix: "°C",
            icon: "🌡️",
          },
          {
            label: "Humidity",
            name: "humidity",
            min: 0,
            max: 100,
            step: 0.1,
            suffix: "%",
            icon: "💧",
          },
          {
            label: "pH Level",
            name: "ph",
            min: 0,
            max: 14,
            step: 0.1,
            suffix: "",
            icon: "🧪",
          },
        ].map((field) => (
          <div key={field.name} className="group">
            <div className="flex justify-between mb-2">
              <label className="text-gray-700 font-bold text-sm flex items-center gap-2">
                <span className="text-lg opacity-80">{field.icon}</span>{" "}
                {field.label}
              </label>
              <span className="text-[#2e7d32] font-mono font-bold bg-green-50 px-2 py-0.5 rounded text-sm group-hover:bg-[#2e7d32] group-hover:text-white transition-colors">
                {formData[field.name]}
                {field.suffix}
              </span>
            </div>
            <div className="relative h-12 flex items-center">
              <input
                type="range"
                name={field.name}
                min={field.min}
                max={field.max}
                step={field.step || 1}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#2e7d32] hover:accent-[#1b5e20] transition-all relative z-10"
              />
              {/* Track background enhancement if needed */}
            </div>
            <div className="flex justify-between text-xs text-gray-400 -mt-2">
              <span>
                {field.min}
                {field.suffix}
              </span>
              <span>
                {field.max}
                {field.suffix}
              </span>
            </div>
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1 font-medium">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        <div className="col-span-full bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
          <div className="flex justify-between mb-2">
            <label className="text-gray-700 font-bold text-sm flex items-center gap-2">
              <span className="text-lg opacity-80">🌧️</span> Rainfall
            </label>
            <span className="text-[#0288d1] font-mono font-bold bg-blue-50 px-2 py-0.5 rounded text-sm">
              {formData.rainfall}mm
            </span>
          </div>
          <input
            type="range"
            name="rainfall"
            min="0"
            max="300"
            step="1"
            value={formData.rainfall}
            onChange={handleChange}
            className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#0288d1] hover:accent-[#01579b] transition-all"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>0mm</span>
            <span>300mm</span>
          </div>
          {errors.rainfall && (
            <p className="text-red-500 text-xs mt-1 font-medium">
              {errors.rainfall}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-4 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 py-4 px-6 bg-white border-2 border-gray-200 text-gray-600 font-bold rounded-xl text-lg hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-all flex items-center justify-center gap-2 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 group-hover:-rotate-180 transition-transform duration-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Reset
        </button>
        <button
          type="submit"
          className="flex-2 py-4 px-6 bg-linear-to-r from-[#2e7d32] to-[#1b5e20] text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none flex items-center justify-center gap-2"
          disabled={
            Object.keys(errors).length > 0 &&
            Object.values(errors).some((x) => x)
          }
        >
          <span>Get Recommendation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default CropForm;
