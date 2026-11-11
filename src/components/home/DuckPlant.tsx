'use client';

import React from 'react';

const DuckPlant: React.FC = () => {
  return (
    <div className="w-full max-w-full overflow-hidden" data-cursor="duck">
      <iframe
        src="/animations/duck-plant.html"
        title="Duck watering a potted plant"
        className="block w-full border-0 bg-transparent"
        style={{ aspectRatio: '160 / 92' }}
        loading="lazy"
        scrolling="no"
      />
    </div>
  );
};

export default DuckPlant;
