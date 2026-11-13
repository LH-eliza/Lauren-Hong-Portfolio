'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Maximize2, X } from 'lucide-react';

interface ZoomImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomImage: React.FC<ZoomImageProps> = ({ src, alt, className = '' }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full border-0 bg-transparent p-0 text-left"
        aria-label={alt ? `Enlarge ${alt}` : 'Enlarge image'}
      >
        <img src={src} alt={alt} className={`h-auto w-full ${className}`} />
        <span className="pointer-events-none absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-black/70 shadow-sm sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" aria-hidden />
        </span>
      </button>

      {open &&
        createPortal(
          <div
            className="case-lightbox fixed inset-0 z-[80] bg-black/80"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={alt || 'Enlarged image'}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="fixed right-3 top-3 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-full w-full overflow-auto p-3 pb-8 pt-16">
              <img
                src={src}
                alt={alt}
                onClick={event => event.stopPropagation()}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ZoomImage;
