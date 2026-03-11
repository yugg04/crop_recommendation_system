import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CropForm from "./CropForm";
import ResultCard from "./ResultCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recommend = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (!token) {
      navigate("/login");
    } else {
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-green-50 via-green-100 to-emerald-200 font-sans relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-green-600/20 to-transparent pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
          <header className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                <span className="text-4xl">🌱</span>
                <span className="text-2xl font-extrabold text-[#1b5e20] tracking-tight">
                  AgroSmart
                </span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Crop Recommendation System
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {user && (
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    Welcome Back
                  </span>
                  <span className="text-gray-800 font-bold">{user.name}</span>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="bg-white border border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span>Logout</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </header>

          <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-12 xl:col-span-12">
              <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-1 shadow-sm">
                <CropForm
                  onResult={setResult}
                  onLoading={setLoading}
                  onError={setError}
                />
              </div>

              {loading && (
                <div className="mt-8 flex flex-col items-center justify-center p-12 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/60">
                  <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-4"></div>
                  <div className="text-xl font-bold text-green-800 animate-pulse">
                    Analyzing Soil Data...
                  </div>
                  <p className="text-green-600/80 text-sm mt-2">
                    Our AI models are finding the perfect crop for you
                  </p>
                </div>
              )}

              {error && (
                <div className="mt-8 bg-red-50/90 backdrop-blur-sm text-red-700 p-6 rounded-2xl border border-red-200 shadow-sm flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Error Occurred</h3>
                    <p>{error}</p>
                  </div>
                </div>
              )}

              {!loading && !error && result && (
                <div className="mt-8">
                  <ResultCard result={result} />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Recommend;
