import React from 'react';

const Wireframe = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 mb-8 sm:mb-16">
      {/* Wireframe Models */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Model 1 */}
          <div className="space-y-2">
            <img
              src="/images/Model 1.svg"
              alt="Model 1"
              className="w-full rounded-lg border border-gray-200"
            />
          </div>
          {/* Model 1 - ON */}
          <div className="space-y-2">
            <img
              src="/images/Model 1 - ON.svg"
              alt="Model 1 - ON"
              className="w-full rounded-lg border border-gray-200"
            />
          </div>

          {/* Model 2 */}
          <div className="space-y-2">
            <img
              src="/images/Model 2.svg"
              alt="Model 2"
              className="w-full rounded-lg border border-gray-200"
            />
          </div>

          {/* Model 2 - ON */}
          <div className="space-y-2">
            <img
              src="/images/Model 2 -ON.svg"
              alt="Model 2 - ON"
              className="w-full rounded-lg border border-gray-200"
            />
          </div>
        </div>
        <p className="text-sm text-gray-500 italic">Low-fidelity Wireframing</p>
      </div>
    </div>
  );
};

export default Wireframe;
