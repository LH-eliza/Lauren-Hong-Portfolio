import React from "react";

const Sketches: React.FC = () => {
  return (
    <div className="mb-8 sm:mb-16">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <h2 className="text-2xl sm:text-3xl text-[#EA6C3A] font-chewie">
          Prototyping & Wire framing
        </h2>
      </div>

      {/* Sketches Container - Full Width */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="space-y-4">
          <div className="w-full">
            <img
              src="/images/Sketches.svg"
              alt="Preliminary sketches"
              className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
            />
          </div>
          <p className="text-sm text-gray-500 italic">Preliminary Sketches</p>
        </div>
      </div>
    </div>
  );
};

export default Sketches;
