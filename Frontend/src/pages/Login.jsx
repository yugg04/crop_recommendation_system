import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData,
      );
      localStorage.setItem("token", response.data.token);
      // localStorage.setItem('user', JSON.stringify(response.data.user)); // No longer storing user

      // Dispatch event to update Navbar immediately

      window.dispatchEvent(new Event("auth-change"));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
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
              Cultivating a <br /> Better Future
            </h1>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              Join our community of modern farmers using AI to optimize crop
              yield and sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 animate-fade-in-up">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-500">
              Please enter your details to sign in
            </p>
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 transition-all duration-300 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 transition-all duration-300 outline-none"
              />
              <div className="flex justify-end mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#2e7d32] hover:text-[#1b5e20] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-10 text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#2e7d32] font-semibold hover:underline"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
