'use client';

import React, { useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const PolaroidWithFish: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [rocking, setRocking] = useState(false);
  const rockControls = useAnimation();

  const peeled = hovered || dragging;

  const handleTapeClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (rocking) return;
    setRocking(true);
    // Rock as an offset on top of the fixed CSS rotate-6 base
    await rockControls.start({
      rotate: [0, 8, -8, 7, -5, 4, 0],
      transition: {
        duration: 0.9,
        ease: 'easeInOut',
        times: [0, 0.14, 0.32, 0.5, 0.68, 0.84, 1],
      },
    });
    setRocking(false);
  };

  return (
    // Base tilt is always 6deg via CSS — never driven by fish interactions
    <div className="inline-block rotate-6">
      <motion.div className="inline-block" animate={rockControls} initial={{ rotate: 0 }}>
        <div ref={frameRef} className="relative inline-block select-none">
          <picture>
            <source srcSet="/images/About/polaroid.webp" type="image/webp" />
            <img
              src="/images/About/polaroid.jpg"
              alt="Lauren Hong"
              width={705}
              height={1024}
              className="w-[240px] sm:w-[280px] md:w-[300px] h-auto drop-shadow-[0_18px_35px_rgba(0,0,0,0.18)] pointer-events-none"
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
          </picture>

          {/* Washi tape — click to rock the polaroid */}
          <motion.button
            type="button"
            data-cursor="sticker"
            onClick={handleTapeClick}
            whileHover={{ scale: 1.04, rotate: -2 }}
            whileTap={{ scale: 0.96 }}
            className="absolute -top-3 -left-4 sm:-top-4 sm:-left-5 z-20 w-[92px] sm:w-[108px] md:w-[120px] touch-none bg-transparent border-0 p-0"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.16))' }}
            aria-label="Tap the tape to rock the photo"
            title="Tap to rock"
          >
            <picture>
              <source srcSet="/images/About/tape.webp" type="image/webp" />
              <img
                src="/images/About/tape.png"
                alt=""
                width={320}
                height={211}
                className="w-full h-auto pointer-events-none"
                draggable={false}
                decoding="async"
              />
            </picture>
          </motion.button>

          <motion.div
            data-cursor="sticker"
            data-dragging={dragging ? 'true' : 'false'}
            drag
            dragConstraints={frameRef}
            dragMomentum={false}
            dragElastic={0.15}
            onPointerDown={e => e.stopPropagation()}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            className="absolute -bottom-1 -right-3 sm:bottom-0 sm:-right-4 w-[88px] sm:w-[100px] md:w-[110px] touch-none"
            style={{ zIndex: dragging ? 20 : 10 }}
            aria-label="Peel and place the fish sticker"
            title="Peel me"
          >
            <motion.div
              className="relative origin-bottom-left"
              initial={false}
              animate={
                dragging
                  ? {
                      scale: 1.18,
                      rotate: -14,
                      y: -10,
                      skewX: -4,
                      filter: 'drop-shadow(0 22px 24px rgba(0,0,0,0.35))',
                    }
                  : peeled
                    ? {
                        scale: 1.08,
                        rotate: -9,
                        y: -6,
                        skewX: -3,
                        filter: 'drop-shadow(0 14px 16px rgba(0,0,0,0.26))',
                      }
                    : {
                        scale: 1,
                        rotate: 0,
                        y: 0,
                        skewX: 0,
                        filter: 'drop-shadow(0 6px 8px rgba(0,0,0,0.18))',
                      }
              }
              transition={{
                type: 'spring',
                stiffness: 420,
                damping: 22,
                mass: 0.7,
              }}
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-full"
                animate={{
                  opacity: peeled ? 0.5 : 0,
                  scale: peeled ? 1.05 : 0.9,
                }}
                transition={{ duration: 0.25 }}
                style={{
                  background:
                    'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.55), transparent 60%)',
                  mixBlendMode: 'soft-light',
                }}
              />

              <picture>
                <source srcSet="/images/About/fish.webp" type="image/webp" />
                <img
                  src="/images/About/fish.png"
                  alt=""
                  width={280}
                  height={191}
                  className="relative w-full h-auto pointer-events-none"
                  draggable={false}
                  decoding="async"
                />
              </picture>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PolaroidWithFish;
