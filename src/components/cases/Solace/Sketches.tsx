import React from 'react';
import ZoomImage from '../../ZoomImage';

const Sketches: React.FC = () => {
  return (
    <div className="mb-10 sm:mb-16">
      <h2 className="mb-6 text-2xl text-[#EA6C3A] font-castoro sm:text-3xl">
        Prototyping & Wire framing
      </h2>
      <ZoomImage
        src="/images/Solace/Sketches.svg"
        alt="Preliminary sketches"
        className="rounded-lg border border-gray-200 shadow-sm"
      />
      <p className="mt-3 text-sm italic text-gray-500">Preliminary Sketches</p>
    </div>
  );
};

export default Sketches;
