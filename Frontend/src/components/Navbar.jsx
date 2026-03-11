import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const checkLoginStatus = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    // ⚠️ Cache result to avoid repeated calls
    // const cachedAuth = sessionStorage.getItem("isLoggedIn");
    // if (cachedAuth === "true") {
    //   setIsLoggedIn(true);
    //   return;
    // }

    try {
      const response = await fetch("http://localhost:8080/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    } catch {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();

    // Listen for custom auth events and storage changes
    const handleAuthChange = () => checkLoginStatus();

    window.addEventListener("auth-change", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener("auth-change", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Get Recommendation", path: "/recommend" },
    { name: "History", path: "/history" },
    { name: "About", path: "/about" },
  ];

  return (
    // Root Container with explicit resets and isolation
    <nav
      className="sticky top-0 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 transition-all duration-300 box-border text-base font-medium antialiased m-0 p-0 block"
      style={{
        fontFamily: "'Outfit', sans-serif",
        zIndex: 9999,
        lineHeight: 1.5,
        // Fallback for box-sizing if Tailwind's preflight is missing
        boxSizing: "border-box",
      }}
    >
      {/* Width Controller */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 box-border">
        <div className="flex justify-between items-center h-16 box-border">
          {/* Logo Section */}
          <div
            className="shrink-0 flex items-center cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            {/* SVG with explicit sizing and color (Green-700 equivalent) */}
            <svg
              className="h-8 w-8 text-green-700 mr-2 block"
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
            <span className="font-bold text-xl text-green-800 tracking-tight whitespace-nowrap">
              AgroSmart
            </span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-2 box-border">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  // Using explicit standard colors instead of custom 'nature' theme
                  `text-sm font-medium tracking-wide transition-all duration-300 px-4 py-2 rounded-full whitespace-nowrap box-border ${
                    isActive
                      ? "bg-green-600 text-white shadow-md transform scale-105"
                      : "bg-transparent text-gray-600 hover:bg-green-50 hover:text-green-700"
                  }`
                }
                style={{ textDecoration: "none" }} // Ensure no underline even if global 'a' style adds it
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section: Profile or Login/Register & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 box-border">
            {/* Desktop Auth Controls */}
            <div className="hidden md:flex items-center space-x-2 box-border">
              {isLoggedIn ? (
                <div
                  className="flex items-center space-x-2 cursor-pointer group p-1.5 pr-3 rounded-full hover:bg-green-50 transition-all duration-300 border border-transparent hover:border-green-100 box-border"
                  onClick={() => navigate("/profile")}
                >
                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-green-100 to-green-200 flex items-center justify-center text-green-600 group-hover:bg-green-200 transition-colors shadow-sm">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium tracking-wide text-gray-600 group-hover:text-green-800">
                    Profile
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 box-border">
                  <button
                    onClick={() => navigate("/login")}
                    className="text-sm font-medium tracking-wide text-gray-600 hover:text-green-700 px-4 py-2 rounded-full transition-colors bg-transparent border-none cursor-pointer"
                    type="button"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="text-sm font-bold tracking-wide text-white bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 border-none cursor-pointer"
                    type="button"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center box-border">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2 bg-transparent border-none cursor-pointer"
                type="button"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6 block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden box-border bg-white ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ borderTop: isOpen ? "1px solid #e5e7eb" : "none" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg box-border">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium tracking-wide box-border ${
                  isActive
                    ? "bg-green-50 text-green-700 border-l-4 border-green-600"
                    : "text-gray-600 hover:text-green-600 hover:bg-gray-50"
                }`
              }
              style={{ textDecoration: "none" }}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Auth Options */}
          <div className="mt-4 pt-4 border-t border-gray-100 box-border">
            {isLoggedIn ? (
              <div
                className="flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer hover:bg-green-50 box-border"
                onClick={() => {
                  navigate("/profile");
                  setIsOpen(false);
                }}
              >
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-base font-medium text-gray-600">
                  Profile
                </span>
              </div>
            ) : (
              <div className="space-y-3 px-3 box-border">
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="block w-full text-center py-2 text-green-600 border border-green-600 rounded-full font-medium hover:bg-green-50 transition-colors bg-white cursor-pointer"
                  type="button"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setIsOpen(false);
                  }}
                  className="block w-full text-center py-2 bg-green-600 text-white rounded-full font-bold shadow-md hover:bg-green-700 transition-colors border-none cursor-pointer"
                  type="button"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
