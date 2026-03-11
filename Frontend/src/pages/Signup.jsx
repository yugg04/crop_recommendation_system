import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import statesData from "../data/states.json";

const SearchableDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options
    ? options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const handleSelect = (option) => {
    onChange(option);
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <div
        className={`w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 cursor-pointer flex justify-between items-center ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 max-h-60 overflow-y-auto">
          <div className="p-2 sticky top-0 bg-white border-b border-gray-100">
            <input
              type="text"
              className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-[#2e7d32]"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-400 text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Get list of states
  const states = statesData.states;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStateChange = (selectedState) => {
    setFormData({
      ...formData,
      state: selectedState,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      setError("Enter a valid 10-digit Indian phone number");
      return;
    }

    if (!formData.state) {
      setError("State is required");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        state: formData.state,
        phoneNumber: formData.phoneNumber,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
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
              Join the <br /> Green Revolution
            </h1>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              Create an account to start receiving AI-powered crop
              recommendations tailored to your soil.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 animate-fade-in-up">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-gray-500">Sign up to get started</p>
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 transition-all duration-300 outline-none"
              />
            </div>

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
                placeholder="name@example.com"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 transition-all duration-300 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="+91 9876543210"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 transition-all duration-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  State
                </label>
                <SearchableDropdown
                  options={states}
                  value={formData.state}
                  onChange={handleStateChange}
                  placeholder="Select State"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-[#2e7d32] focus:ring-4 focus:ring-[#2e7d32]/10 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#2e7d32] hover:bg-[#1b5e20] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-10 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#2e7d32] font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
