import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/otp/reset-password", {
        email,
        newPassword,
        confirmPassword,
      });

      setSuccess("Password reset successful. Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to reset password. Please try again.",
      );
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

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#1a4d2e] animate-slide-in-left">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />

        <div className="relative z-10 flex flex-col justify-between p-12 text-white h-full w-full">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🌱</div>
            <span className="text-2xl font-bold tracking-wide">AgroSmart</span>
          </div>

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Reset Your <br /> Password
            </h1>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              Choose a strong password to secure your account.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 animate-fade-in-up">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create New Password
            </h2>
            <p className="text-gray-500">
              Enter and confirm your new password.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm border border-red-100">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 text-green-600 p-4 rounded-xl mb-6 text-sm border border-green-100">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder="Enter new password"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm new password"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Reset Password
            </button>
          </form>

          <p className="text-center mt-10 text-gray-500">
            Back to{" "}
            <Link
              to="/login"
              className="text-[#2e7d32] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
