import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch {
        navigate("/login");
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("auth-change"));
    navigate("/login");
  };

  if (!user) return null;

  const styles = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    .animate-scale-in {
      animation: scaleIn 0.5s ease-out forwards;
    }
  `;

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 via-white to-green-50 font-sans">
        <style>{styles}</style>

        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Header */}
          <div className="bg-linear-to-r from-[#1a4d2e] to-[#2e7d32] rounded-t-3xl p-10 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-[#1a4d2e] text-5xl font-bold animate-scale-in shadow-lg ring-4 ring-white/30">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight">
                  {user.name}
                </h1>
                <p className="text-green-100 text-lg mt-1">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white rounded-b-3xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Personal Info Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
                  👤 Personal Info
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">
                      Full Name
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mt-1">
                      {user.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">
                      Email Address
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mt-1 break-all">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                <h3 className="font-bold text-2xl mb-6 flex items-center gap-2">
                  📍 Contact Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">
                      Mobile Number
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mt-1">
                      {user.phoneNumber || "Not provided"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-xl font-semibold text-gray-900 mt-1">
                      {user.location || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logout */}
            <div className="mt-14 flex justify-end">
              <button
                onClick={handleLogout}
                className="px-8 py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 hover:shadow transition"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
