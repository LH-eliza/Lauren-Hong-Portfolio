import React from 'react';
import ZoomImage from '../components/ZoomImage';

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
  return <ZoomImage src={src} alt={alt} className={className} />;
};

export default GifDisplay;
