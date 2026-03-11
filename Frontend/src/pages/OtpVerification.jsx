import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      await axios.post("http://localhost:8080/api/otp/verify-otp", {
        email,
        otp,
      });
      // If the OTP is valid, the backend returns a success status
      setSuccessMessage("OTP verified successfully! Redirecting...");
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 800);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid or expired OTP. Please try again.",
      );
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setSuccessMessage("");
    try {
      await axios.post("http://localhost:8080/api/otp/forgot-password", {
        email,
      });
      setSuccessMessage("A new OTP has been sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to resend OTP.");
    }
  };

  const styles = `
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-left {
            animation: slideInLeft 1s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
    `;

  return (
    <div className="flex min-h-screen w-full font-sans bg-gray-50">
      <style>{styles}</style>
      {/* Left Side - Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#1a4d2e] animate-slide-in-left">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60"></div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white h-full w-full">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🌱</div>
            <span className="text-2xl font-bold tracking-wide">AgroSmart</span>
          </div>

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Verify Your <br /> Identity
            </h1>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              Enter the OTP sent to your email to continue.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 animate-fade-in-up">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter OTP</h2>
            <p className="text-gray-500">We've sent a code to {email}</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm flex items-center gap-3 border border-red-100">
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          )}

          {successMessage && (
            <div className="bg-green-50 text-green-600 p-4 rounded-xl mb-6 text-sm flex items-center gap-3 border border-green-100">
              <svg
                className="w-5 h-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                One-Time Password
              </label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{6}"
                name="otp"
                value={otp}
                onChange={handleChange}
                required
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 transition-all duration-300 outline-none text-center text-2xl tracking-widest"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Next
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={handleResendOtp}
              type="button"
              className="text-sm font-medium text-[#2e7d32] hover:text-[#1b5e20] transition-colors hover:underline"
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
