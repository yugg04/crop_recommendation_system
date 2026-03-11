import React from "react";

const ResultCard = ({ result }) => {
  if (!result) return null;

  const { crop, probability } = result;
  const percentage = probability.toFixed(1);

  const getConfidenceColor = () => {
    if (percentage >= 80) return "from-green-500 to-emerald-500";
    if (percentage >= 60) return "from-yellow-400 to-orange-400";
    return "from-red-400 to-rose-500";
  };

  const getConfidenceText = () => {
    if (percentage >= 80) return "Highly Recommended";
    if (percentage >= 60) return "Good Match";
    return "Low Confidence";
  };

  return (
    <div className="relative mt-10 overflow-hidden rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl p-10 animate-[fadeIn_0.6s_ease-out] hover:shadow-3xl transition-shadow">
      {/* Decorative background */}
      <div className="absolute -top-28 -right-28 w-80 h-80 bg-green-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-3">
        <span className="w-12 h-0.5 bg-linear-to-r from-green-500 to-emerald-500 rounded-full" />
        Recommendation Result
      </h2>

      {/* Main content */}
      <div className="flex flex-col items-center text-center">
        {/* Crop name */}
        <div className="relative mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold capitalize text-transparent bg-clip-text bg-linear-to-r from-green-700 to-emerald-600">
            {crop}
          </h1>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-2 bg-green-200/60 rounded-full -skew-x-12" />
        </div>

        {/* Confidence badge */}
        <div className="flex items-center gap-3 mb-6 px-6 py-2 rounded-full bg-gray-50 border border-gray-200 shadow-sm">
          <span className="text-sm font-bold text-gray-700">
            {getConfidenceText()}
          </span>
          <span className="text-sm font-extrabold text-green-700">
            {percentage}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md">
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full bg-linear-to-r ${getConfidenceColor()} rounded-full transition-all duration-700 ease-out`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Confidence score based on environmental and soil conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
