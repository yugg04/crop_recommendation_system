import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-green-700 font-bold text-xl">
              <div className="h-8 w-8 bg-green-700 rounded-lg flex items-center justify-center text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              AgroSmart
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A decision support system designed to help farmers make informed
              crop selection decisions based on soil conditions, climate data,
              and agricultural best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-green-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/recommend")}
                  className="hover:text-green-600 transition-colors cursor-pointer"
                >
                  Get Recommendation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/history")}
                  className="hover:text-green-600 transition-colors cursor-pointer"
                >
                  History
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-green-600 transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-green-600 transition-colors cursor-pointer"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/recommend")}
                  className="hover:text-green-600 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 AgroSmart. All rights reserved.</p>
          <p>Built for farmers, researchers, and agricultural professionals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
