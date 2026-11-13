import React from 'react';
import ZoomImage from '../../ZoomImage';

const models = [
  { src: '/images/Solace/Model 1.svg', alt: 'Model 1' },
  { src: '/images/Solace/Model 1 - ON.svg', alt: 'Model 1 - ON' },
  { src: '/images/Solace/Model 2.svg', alt: 'Model 2' },
  { src: '/images/Solace/Model 2 -ON.svg', alt: 'Model 2 - ON' },
];

const Wireframe = () => {
  return (
    <div className="mb-10 sm:mb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {models.map(model => (
          <ZoomImage
            key={model.src}
            src={model.src}
            alt={model.alt}
            className="rounded-lg border border-gray-200"
          />
        ))}
      </div>
      <p className="mt-4 text-sm italic text-gray-500">Low-fidelity Wireframing</p>
    </div>
  );
};

export default Wireframe;
