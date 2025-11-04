import React, { useState, useEffect } from 'react';

interface ScrollProgressBarProps {
  color?: string;
  className?: string;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  color = '#EA6C3A',
  className = '',
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // Calculate on mount
    calculateScrollProgress();

    // Update on scroll
    window.addEventListener('scroll', calculateScrollProgress, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 ${className}`}
      style={{ backgroundColor: 'transparent' }}
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
