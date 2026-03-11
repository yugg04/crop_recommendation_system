import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/crop/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setHistory(data);
        } else {
          setError("Failed to fetch history");
          // If 401, redirect to login?
          if (response.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
          }
        }
      } catch (err) {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-green-50 via-green-100 to-emerald-200 font-sans p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-[#1b5e20] tracking-tight mb-2">
              Recommendation History
            </h1>
            <p className="text-green-700 text-lg">
              Your past crop recommendations
            </p>
          </header>

          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
              {error}
            </div>
          )}

          {!loading && !error && history.length === 0 && (
            <div className="text-center text-gray-500 text-xl mt-12">
              No history found. Get some recommendations!
            </div>
          )}

          {!loading && !error && history.length > 0 && (
            <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-green-100/50 uppercase font-semibold text-green-800">
                    <tr>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Crop</th>
                      <th className="px-6 py-4">Probability</th>
                      <th className="px-6 py-4">N</th>
                      <th className="px-6 py-4">P</th>
                      <th className="px-6 py-4">K</th>
                      <th className="px-6 py-4">Temp</th>
                      <th className="px-6 py-4">Humidity</th>
                      <th className="px-6 py-4">pH</th>
                      <th className="px-6 py-4">Rainfall</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/50">
                    {history.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-green-50/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium">
                          {item.date
                            ?.split("T")[0]
                            ?.split("-")
                            .reverse()
                            .join("-")}
                        </td>
                        <td className="px-6 py-4 font-bold text-green-700">
                          {item.crop}
                        </td>
                        <td className="px-6 py-4 font-bold text-green-700">
                          {item.probability}
                        </td>
                        <td className="px-6 py-4">{item.n}</td>
                        <td className="px-6 py-4">{item.p}</td>
                        <td className="px-6 py-4">{item.k}</td>
                        <td className="px-6 py-4">
                          {item.temperature.toFixed(1)}°C
                        </td>
                        <td className="px-6 py-4">
                          {item.humidity.toFixed(1)}%
                        </td>
                        <td className="px-6 py-4">{item.ph.toFixed(1)}</td>
                        <td className="px-6 py-4">
                          {item.rainfall.toFixed(1)}mm
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default History;
