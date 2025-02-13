import React from 'react';

interface GifDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

const GifDisplay: React.FC<GifDisplayProps> = ({
  src,
  alt,
  className = 'w-full h-auto rounded-lg',
}) => {
  return (
    <div className="relative">
      <img src={src} alt={alt} className={className} loading="lazy" />
    </div>
  );
};

export default GifDisplay;
