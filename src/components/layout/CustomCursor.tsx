'use client';

import React, { useEffect, useState } from 'react';

type CursorMode = 'default' | 'hover' | 'case-study' | 'sticker' | 'sticker-drag' | 'duck';

const DuckCursor = () => (
  <img
    src="/images/cursors/tomato-cursor.png"
    alt=""
    aria-hidden
    width={40}
    height={40}
    draggable={false}
    style={{ transform: 'translate(-16px, -16px)', imageRendering: 'pixelated' }}
  />
);

const HandCursor = ({ grabbing }: { grabbing?: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    style={{
      transform: grabbing ? 'translate(-6px, -4px)' : 'translate(-6px, -2px)',
    }}
  >
    {grabbing ? (
      <path
        d="M8.5 11.5V8.75a1.25 1.25 0 0 1 2.5 0V11m0-2.5V7.25a1.25 1.25 0 0 1 2.5 0V11m0-3.25V6.5a1.25 1.25 0 1 1 2.5 0V11m0-3.5V7.75A1.25 1.25 0 0 1 18.5 9v5.1c0 2.4-1.5 4.65-3.75 5.55A5.75 5.75 0 0 1 8.2 17.3L6 14.75a1.6 1.6 0 0 1 2.3-2.2l.7.7V11.5"
        fill="#111"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M9 11.5V6.75a1.25 1.25 0 0 1 2.5 0V11m0-3.5V5.25a1.25 1.25 0 0 1 2.5 0V11m0-4.5V5.75A1.25 1.25 0 0 1 16.5 7v5.2c0 2.35-1.45 4.5-3.65 5.4A5.5 5.5 0 0 1 7.3 15.7L5.5 13.4a1.5 1.5 0 0 1 2.2-2.05L8.5 12V8.5A1.25 1.25 0 0 1 11 7.25"
        fill="#111"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const sticker = target?.closest('[data-cursor="sticker"]') as HTMLElement | null;
      if (sticker) {
        setMode(sticker.dataset.dragging === 'true' ? 'sticker-drag' : 'sticker');
        return;
      }

      if (target?.closest('[data-cursor="case-study"]')) {
        setMode('case-study');
        return;
      }

      if (target?.closest('[data-cursor="duck"]')) {
        setMode('duck');
        return;
      }

      const interactive = target?.closest('a, button, [role="button"], input, textarea, select');
      setMode(interactive ? 'hover' : 'default');
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-normal"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {mode === 'case-study' ? (
        <div
          className="bg-accent text-white text-xs font-vietnam font-medium tracking-wide uppercase whitespace-nowrap rounded-full px-4 py-2 shadow-sm"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          Read Case Study
        </div>
      ) : mode === 'sticker' || mode === 'sticker-drag' ? (
        <HandCursor grabbing={mode === 'sticker-drag'} />
      ) : mode === 'duck' ? (
        <DuckCursor />
      ) : (
        <div
          className="rounded-full bg-accent transition-[width,height,margin,opacity] duration-200 ease-in"
          style={{
            width: mode === 'hover' ? 28 : 14,
            height: mode === 'hover' ? 28 : 14,
            marginLeft: mode === 'hover' ? -14 : -7,
            marginTop: mode === 'hover' ? -14 : -7,
            opacity: mode === 'hover' ? 0.85 : 1,
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
