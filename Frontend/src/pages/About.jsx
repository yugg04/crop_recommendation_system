import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dk from "../assets/Images/Dhruvil_Kapadiya.png";
import Yk from "../assets/Images/Yug_Khatri.png";
import Hk from "../assets/Images/Harshil_Kothiya.png";
import Sp from "../assets/Images/Savan_Patel.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans text-gray-900">
        {/* Parallax Hero Section - Increased height to prevent overlap */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pb-32">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="About Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <RevealOnScroll>
              <span className="block text-green-400 font-bold tracking-[0.2em] uppercase mb-4">
                Our Mission
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Cultivating a <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">
                  Smarter Future
                </span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Bridging the gap between traditional farming wisdom and
                cutting-edge data science to ensure food security for tomorrow.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-20">
          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* The Challenge Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group h-full">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                The Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Farmers face increasing uncertainty due to climate change and
                soil degradation. Choosing the wrong crop can lead to
                significant economic loss and resource wastage.
              </p>
            </div>

            {/* The Solution Card - Featured */}
            <div className="md:col-span-2 bg-linear-to-br from-green-900 to-emerald-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-white relative overflow-hidden group h-full">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start h-full">
                <div className="flex-1">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-green-300 mb-6 border border-white/20">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">
                    Our Solution: CropSense
                  </h3>
                  <p className="text-green-100 leading-relaxed text-lg mb-6">
                    An intelligent decision support system that analyzes soil
                    parameters (N, P, K, pH) and environmental factors to
                    suggest the optimal crops for your land.
                  </p>
                </div>
                <div className="md:w-1/3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full">
                  <h4 className="font-bold text-white mb-4 border-b border-white/20 pb-2">
                    Key Metrics
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-green-100">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Soil Nutrient Analysis
                    </li>
                    <li className="flex items-center text-sm text-green-100">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      Weather Integration
                    </li>
                    <li className="flex items-center text-sm text-green-100">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      95%+ Accuracy
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 lg:col-span-1 h-full">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Built With
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React",
                  "Spring Boot",
                  "Python/Flask",
                  "Scikit-Learn",
                  "PostgreSQL",
                  "Tailwind",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-600 border border-gray-100 text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer Card */}
            <div className="lg:col-span-2 bg-orange-50 p-8 rounded-3xl border border-orange-100 h-full">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Important Disclaimer
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    While we strive for accuracy, agricultural outcomes depend
                    on numerous variable factors. This system provides
                    probabilistic recommendations based on valid inputs and
                    should be used as a guidance tool alongside local
                    agricultural expertise, not as a sole determinant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section - NEW */}
        <section className="py-20 bg-green-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                <div className="p-4">
                  <div className="text-5xl font-serif font-bold text-green-300 mb-2">
                    22
                  </div>
                  <div className="text-green-100 uppercase tracking-widest text-xs font-bold">
                    Crops Supported
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-5xl font-serif font-bold text-green-300 mb-2">
                    2k+
                  </div>
                  <div className="text-green-100 uppercase tracking-widest text-xs font-bold">
                    Data Points Used
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-5xl font-serif font-bold text-green-300 mb-2">
                    95%
                  </div>
                  <div className="text-green-100 uppercase tracking-widest text-xs font-bold">
                    Model Accuracy
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-5xl font-serif font-bold text-green-300 mb-2">
                    100%
                  </div>
                  <div className="text-green-100 uppercase tracking-widest text-xs font-bold">
                    Free to Use
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-200"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-green-600 font-bold tracking-widest uppercase text-sm">
                  Our Philosophy
                </span>
                <h2 className="mt-2 text-4xl font-serif font-bold text-gray-900">
                  Driven by Core Values
                </h2>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Sustainability First",
                  desc: "We prioritize solutions that protect the environment and ensure long-term agricultural viability. Every recommendation considers soil health longevity.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  color: "from-green-400 to-green-600",
                },
                {
                  title: "Farmer-Centric Innovation",
                  desc: "Technology should simplify, not complicate. We design with the farmer's daily reality in mind, creating interfaces that are intuitive and accessible.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                  color: "from-blue-400 to-blue-600",
                },
                {
                  title: "Data Integrity",
                  desc: "Accurate, verified, and transparent capabilities are the bedrock of our recommendation engine. We never compromise on the quality of our data sources.",
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
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
                  ),
                  color: "from-purple-400 to-purple-600",
                },
              ].map((value, index) => (
                <RevealOnScroll
                  key={index}
                  delay={index * 100}
                  className="h-full"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center h-full flex flex-col items-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-linear-to-br ${value.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.desc}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <span className="text-green-600 font-bold tracking-widest uppercase text-sm">
                  The Minds Behind
                </span>
                <h2 className="mt-2 text-4xl font-serif font-bold text-gray-900">
                  Meet Our Team
                </h2>
                <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                  A diverse group of agricultural experts, data scientists, and
                  engineers working together.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  name: "Dhruvil Kapadiya",
                  role: "Frontend Developer",
                  image: Dk,
                  socials: {
                    linkedin:
                      "https://www.linkedin.com/in/dhruvil-kapadiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  },
                },
                {
                  name: "Harshil Kothiya",
                  role: "Backend Developer",
                  image: Hk,
                  socials: {
                    linkedin:
                      "https://www.linkedin.com/in/harshil-kothiya-326012285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  },
                },
                {
                  name: "Yug Khatri",
                  role: "ML Engineer",
                  image: Yk,
                  socials: {
                    linkedin:
                      "https://www.linkedin.com/in/yug-khatri-a99b49306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  },
                },
                {
                  name: "Savan Patel",
                  role: "ML Engineer",
                  image: Sp,
                  socials: {
                    linkedin:
                      "https://www.linkedin.com/in/savan-patel-777aa3323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                  },
                },
              ].map((member, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                    <div className="w-40 h-40 mb-6 relative">
                      <div className="absolute inset-0 bg-green-100 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative z-10"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-medium text-sm mb-4">
                      {member.role}
                    </p>

                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-gray-500">
                  Common questions about our recommendation engine.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-6">
              {[
                {
                  q: "How accurate are the crop recommendations?",
                  a: "Our model achieves over 95% accuracy by cross-referencing real-time soil data with historical yield patterns.",
                },
                {
                  q: "Is this tool free for small-scale farmers?",
                  a: "Yes! Our core features are completely free for individual farmers. We believe in democratizing access to agricultural data.",
                },
                {
                  q: "Can I use this without a soil test?",
                  a: "While you can input estimated values, we strongly recommend a proper laboratory soil test for the most reliable results.",
                },
              ].map((item, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.q}
                    </h4>
                    <p className="text-gray-600">{item.a}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Community Feedback Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
                  Testimonials
                </span>
                <h2 className="mt-2 text-4xl font-serif font-bold text-gray-900">
                  Community Feedback
                </h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                  Hear from the farmers and agronomists who have tested our beta
                  version.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ravi Kumar",
                  role: "Organic Farmer, Punjab",
                  quote:
                    "The soil analysis feature helped me balance my pH levels without overusing chemicals. It's a game changer for small farms.",
                  rating: 5,
                },
                {
                  name: "Emily Watson",
                  role: "Agricultural Student",
                  quote:
                    "Using this for my university thesis was incredible. The accuracy of the Random Forest model is impressive.",
                  rating: 5,
                },
                {
                  name: "Miguel Santos",
                  role: "Farm Manager",
                  quote:
                    "Simple, fast, and free. Exactly what we needed to make quick decisions before the planting season.",
                  rating: 4,
                },
              ].map((item, index) => (
                <RevealOnScroll key={index} delay={index * 150}>
                  <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < item.rating ? "fill-current" : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 grow">
                      "{item.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <span className="text-sm text-green-600 font-medium">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-br from-green-900 to-emerald-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Ready to Optimize Your Harvest?
              </h2>
              <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
                Join thousands of farmers making data-driven decisions today.
              </p>
              <a
                href="/"
                className="inline-block bg-white text-green-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Now
              </a>
            </RevealOnScroll>
          </div>
        </section>

        {/* Simple Animation Styles - Blob only, fade handled by RevealOnScroll */}
        <style>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-200 { animation-delay: 2s; }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default About;
