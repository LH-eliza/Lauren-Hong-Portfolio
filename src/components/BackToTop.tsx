'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  accentColor?: string;
}

const BackToTop: React.FC<BackToTopProps> = ({ accentColor = '#EA6C3A' }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      style={{ backgroundColor: accentColor }}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;
