import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

const CROPS_DATA = [
  { name: "Rice", desc: "Primary Staple Food", benefit: "High Carbs & Energy" },
  {
    name: "Maize",
    desc: "Queen of Cereals",
    benefit: "Rich in Fiber & Vitamins",
  },
  { name: "Jute", desc: "Golden Fiber Crop", benefit: "Eco-friendly Material" },
  {
    name: "Cotton",
    desc: "White Gold of India",
    benefit: "Textile Industry Backbone",
  },
  { name: "Coconut", desc: "Tree of Life", benefit: "Versatile Uses & Oil" },
  {
    name: "Papaya",
    desc: "Tropical Vitamin Fruit",
    benefit: "Digestion & Immunity",
  },
  { name: "Orange", desc: "Citrus Powerhouse", benefit: "Vitamin C Booster" },
  {
    name: "Apple",
    desc: "Temperate Superfruit",
    benefit: "Heart Health & Fiber",
  },
  { name: "Muskmelon", desc: "Summer Delight", benefit: "Hydration & Cooling" },
  { name: "Watermelon", desc: "Hydrating Wonder", benefit: "Vitamins A & C" },
  {
    name: "Grapes",
    desc: "Vineyard Treasure",
    benefit: "Antioxidants & Heart",
  },
  { name: "Mango", desc: "King of Fruits", benefit: "Immunity & Eye Health" },
  { name: "Banana", desc: "Instant Energy Booster", benefit: "Potassium Rich" },
  { name: "Pomegranate", desc: "Nutrient Dense", benefit: "Anti-inflammatory" },
  { name: "Lentil", desc: "Protein Powerhouse", benefit: "Essential Proteins" },
  { name: "Blackgram", desc: "Important Pulse", benefit: "Digestive Health" },
  { name: "Mungbean", desc: "Green Gram Pulse", benefit: "Easy to Digest" },
  { name: "Mothbeans", desc: "Drought Survivor", benefit: "Protein & Calcium" },
  {
    name: "Pigeonpeas",
    desc: "Red Gram Staple",
    benefit: "High Protein Source",
  },
  { name: "Kidneybeans", desc: "Rich in Iron", benefit: "Blood Health" },
  { name: "Chickpea", desc: "Bengal Gram", benefit: "Fiber & Protein" },
  { name: "Coffee", desc: "Global Beverage", benefit: "Antioxidants & Focus" },
];

const Home = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen bg-nature-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Full Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Agriculture Background"
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>

          {/* Centered Content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-300 font-medium text-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                AI-Powered Agriculture
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Make Smarter Crop <br />
                Decisions with <span className="text-green-400">
                  Data-
                </span>{" "}
                <br />
                <span className="text-green-400">Driven Insights</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans mt-6 drop-shadow-md">
                AgroSmart combines agricultural expertise with advanced
                analytics to provide personalized crop recommendations based on
                your soil conditions, climate data, and farming goals.
              </p>
            </RevealOnScroll>

            {/* Buttons */}
            <RevealOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <button
                  onClick={() => navigate("/recommend")}
                  className="group flex items-center justify-center gap-3 px-10 py-5 bg-green-600 text-white rounded-full font-bold text-xl hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                >
                  Get Crop Recommendation
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium text-xl hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
                >
                  Learn More
                  <svg
                    className="w-6 h-6 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
              </div>
            </RevealOnScroll>

            {/* Stats Row - Glassmorphism */}
            <RevealOnScroll delay={800}>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 p-8 bg-black/30 backdrop-blur-md rounded-3xl border border-white/10">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-white">
                    2K+
                  </div>
                  <div className="text-sm text-gray-300 font-medium mt-1 uppercase tracking-wider">
                    Recommendations
                  </div>
                </div>
                <div className="hidden lg:block w-px bg-white/20 mx-auto h-12 self-center"></div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-white">
                    95%
                  </div>
                  <div className="text-sm text-gray-300 font-medium mt-1 uppercase tracking-wider">
                    Accuracy Rate
                  </div>
                </div>
                <div className="hidden lg:block w-px bg-white/20 mx-auto h-12 self-center"></div>
                <div className="col-span-2 lg:col-span-1 text-center">
                  <div className="text-4xl font-serif font-bold text-white">
                    20+
                  </div>
                  <div className="text-sm text-gray-300 font-medium mt-1 uppercase tracking-wider">
                    Crop Varieties
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm mb-2">
                Core Features
              </h2>
              <p className="text-4xl leading-tight font-serif font-bold text-gray-900 sm:text-5xl">
                Why Choose{" "}
                <span className="relative inline-block">
                  AgroSmart
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-green-200/50 -z-10 rounded-full"></span>
                </span>
                ?
              </p>
              <p className="mt-4 text-xl text-gray-500">
                Advanced technology meets agricultural expertise to help you
                make the best decisions for your farm.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <RevealOnScroll delay={200}>
                <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-100 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 mb-6 shadow-sm group-hover:shadow-green-200">
                    <svg
                      className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    Soil-Based Analysis
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Input your specific soil nutrients (N, P, K) and pH levels
                    to get recommendations tailored to your land's profile.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Feature 2 */}
              <RevealOnScroll delay={400}>
                <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-100 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 mb-6 shadow-sm group-hover:shadow-green-200">
                    <svg
                      className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    Climate-Aware
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    We consider temperature, humidity, and rainfall data to
                    ensure crops are suitable for your local environmental
                    conditions.
                  </p>
                </div>
              </RevealOnScroll>

              {/* Feature 3 */}
              <RevealOnScroll delay={600}>
                <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-100 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 mb-6 shadow-sm group-hover:shadow-green-200">
                    <svg
                      className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    Explainable Results
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Transparent recommendations that help you understand the
                    'why' behind the suggestion, acting as a support tool, not a
                    black box.
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Infinite Slider Section - Relocated & Enriched */}
        <section className="py-16 bg-linear-to-r from-gray-50 to-white overflow-hidden border-y border-gray-100 relative">
          <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .slider-container {
                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            }
            .slider-track {
                display: flex;
                width: max-content;
                animation: scroll 60s linear infinite;
            }
            .slider-track:hover {
                animation-play-state: paused;
            }
        `}</style>

          <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              Extensive Database
            </div>
            <h3 className="text-3xl font-serif font-bold text-gray-900">
              Supported Crops
            </h3>
          </div>

          <div className="slider-container w-full overflow-hidden pb-4">
            <div className="slider-track gap-6">
              {[...CROPS_DATA, ...CROPS_DATA].map((crop, index) => (
                <div
                  key={`crop-${index}`}
                  className="flex flex-col gap-3 min-w-65 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div>
                      <span className="text-lg font-bold text-gray-800 block">
                        {crop.name}
                      </span>
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                        {crop.desc}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-50">
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="text-green-500">★</span>
                      Benefit:{" "}
                      <span className="font-medium text-gray-700">
                        {crop.benefit}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-24 bg-white relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-3">
                Simple Process
              </h2>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto leading-relaxed">
                Three simple steps to transform your farming with data-driven
                decisions.
              </p>
            </div>

            <div className="relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-15 left-[16%] right-[16%] h-1 bg-linear-to-r from-green-200 via-green-400 to-green-200 rounded-full z-0 opacity-40"></div>

              <div className="relative z-10 grid gap-12 md:grid-cols-3">
                {/* Step 1 */}
                <RevealOnScroll delay={200}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8">
                      <div className="flex items-center justify-center h-32 w-32 rounded-full bg-white border-4 border-green-100 shadow-xl group-hover:border-green-500 group-hover:scale-110 transition-all duration-300 z-10 relative">
                        <span className="absolute top-0 right-0 h-10 w-10 bg-green-600 rounded-full text-white flex items-center justify-center font-bold border-4 border-white">
                          1
                        </span>
                        <svg
                          className="w-12 h-12 text-green-600 group-hover:text-green-800 transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                      Enter Details
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                      Input your soil test results (N, P, K, pH) and local
                      weather conditions into our simple form.
                    </p>
                  </div>
                </RevealOnScroll>

                {/* Step 2 */}
                <RevealOnScroll delay={400}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8">
                      <div className="flex items-center justify-center h-32 w-32 rounded-full bg-white border-4 border-green-100 shadow-xl group-hover:border-green-500 group-hover:scale-110 transition-all duration-300 z-10 relative">
                        <span className="absolute top-0 right-0 h-10 w-10 bg-green-600 rounded-full text-white flex items-center justify-center font-bold border-4 border-white">
                          2
                        </span>
                        <svg
                          className="w-12 h-12 text-green-600 group-hover:text-green-800 transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                      AI Analysis
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                      Our machine learning algorithms process your data against
                      thousands of crop profiles instantly.
                    </p>
                  </div>
                </RevealOnScroll>

                {/* Step 3 */}
                <RevealOnScroll delay={600}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-8">
                      <div className="flex items-center justify-center h-32 w-32 rounded-full bg-white border-4 border-green-100 shadow-xl group-hover:border-green-500 group-hover:scale-110 transition-all duration-300 z-10 relative">
                        <span className="absolute top-0 right-0 h-10 w-10 bg-green-600 rounded-full text-white flex items-center justify-center font-bold border-4 border-white">
                          3
                        </span>
                        <svg
                          className="w-12 h-12 text-green-600 group-hover:text-green-800 transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                      Get Recommendation
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                      Receive a ranked list of the best crops for your land to
                      maximize yield and sustainability.
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-nature-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-green-100 shadow-sm text-green-700 font-medium text-sm mb-8">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Trusted by Agricultural Professionals
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Ready to Transform Your <br /> Farming Decisions?
              </h2>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Join thousands of farmers who have improved their crop yields
                and profitability with AgroSmart's intelligent recommendations.
              </p>

              <button
                onClick={() => navigate("/recommend")}
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-800 text-white rounded-full font-bold text-xl hover:bg-green-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Your Analysis
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </RevealOnScroll>
          </div>

          {/* Decorative background elements for CTA */}
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl"></div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
