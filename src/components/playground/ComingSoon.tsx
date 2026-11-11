'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const FISH_W = 96;
const FISH_H = 66;
const FLEE_RADIUS = 120;

type Point = { x: number; y: number };

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const randomIn = (min: number, max: number) => min + Math.random() * (max - min);

const ComingSoon: React.FC = () => {
  const arenaRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Point>({ x: 80, y: 120 });
  const [facing, setFacing] = useState<1 | -1>(1);
  const [caught, setCaught] = useState(false);
  const [catches, setCatches] = useState(0);
  const [splash, setSplash] = useState<Point | null>(null);
  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const posRef = useRef(pos);
  const caughtRef = useRef(false);
  const targetRef = useRef<Point>({ x: 80, y: 120 });

  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  useEffect(() => {
    caughtRef.current = caught;
  }, [caught]);

  const getBounds = useCallback(() => {
    const el = arenaRef.current;
    if (!el) return { w: 0, h: 0 };
    const rect = el.getBoundingClientRect();
    return { w: rect.width, h: rect.height };
  }, []);

  const pickTarget = useCallback(
    (awayFrom?: Point) => {
      const { w, h } = getBounds();
      if (w < 40 || h < 40) return { x: 40, y: 80 };

      let next = {
        x: randomIn(16, Math.max(17, w - FISH_W - 16)),
        y: randomIn(16, Math.max(17, h - FISH_H - 16)),
      };

      if (awayFrom) {
        for (let i = 0; i < 8; i += 1) {
          const dx = next.x - awayFrom.x;
          const dy = next.y - awayFrom.y;
          if (Math.hypot(dx, dy) > FLEE_RADIUS * 1.4) break;
          next = {
            x: randomIn(16, Math.max(17, w - FISH_W - 16)),
            y: randomIn(16, Math.max(17, h - FISH_H - 16)),
          };
        }
      }

      return next;
    },
    [getBounds]
  );

  useEffect(() => {
    targetRef.current = pickTarget();
    setPos(targetRef.current);

    const onMove = (e: MouseEvent) => {
      const el = arenaRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onResize = () => {
      const { w, h } = getBounds();
      setPos(prev => ({
        x: clamp(prev.x, 16, Math.max(16, w - FISH_W - 16)),
        y: clamp(prev.y, 16, Math.max(16, h - FISH_H - 16)),
      }));
      targetRef.current = pickTarget();
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(32, now - last) / 1000;
      last = now;

      if (!caughtRef.current) {
        const mouse = mouseRef.current;
        const current = posRef.current;
        const fishCenter = { x: current.x + FISH_W / 2, y: current.y + FISH_H / 2 };
        const dist = Math.hypot(mouse.x - fishCenter.x, mouse.y - fishCenter.y);

        // Dart away when the cursor approaches — but pause once it's right on the fish so a catch is possible
        if (dist < FLEE_RADIUS && dist > 34) {
          targetRef.current = pickTarget(mouse);
        }

        const target = targetRef.current;
        const dx = target.x - current.x;
        const dy = target.y - current.y;
        const distToTarget = Math.hypot(dx, dy);

        if (distToTarget < 8) {
          targetRef.current = pickTarget(dist < FLEE_RADIUS && dist > 34 ? mouse : undefined);
        } else {
          const fleeing = dist < FLEE_RADIUS && dist > 34;
          const speed = fleeing ? 560 : dist <= 34 ? 40 : 150;
          const step = Math.min(distToTarget, speed * dt);
          const nx = current.x + (dx / distToTarget) * step;
          const ny = current.y + (dy / distToTarget) * step;
          if (Math.abs(dx) > 1) setFacing(dx >= 0 ? 1 : -1);
          setPos({ x: nx, y: ny });
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
    };
  }, [getBounds, pickTarget]);

  const handleCatch = () => {
    if (caught) return;
    const current = posRef.current;
    setCaught(true);
    setCatches(count => count + 1);
    setSplash({ x: current.x + FISH_W / 2, y: current.y + FISH_H / 2 });

    window.setTimeout(() => {
      setSplash(null);
      const next = pickTarget();
      targetRef.current = next;
      setPos(next);
      setCaught(false);
    }, 900);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-6 pointer-events-none">
        <p className="font-vietnam text-xs uppercase tracking-[0.18em] text-black/45 mb-4">
          Playground
        </p>
        <h1 className="font-castoro text-[36px] sm:text-[48px] text-black leading-tight">
          Coming soon
        </h1>
        <p className="mt-4 font-vietnam text-sm sm:text-base text-black/60 max-w-md mx-auto">
          Experiments are swimming over. Meanwhile, try to catch the fish.
        </p>
        <p className="mt-3 font-vietnam text-xs text-black/40">
          {catches === 0 ? '0 catches' : `${catches} catch${catches === 1 ? '' : 'es'}`}
        </p>
      </div>

      <div ref={arenaRef} className="absolute inset-0 z-20">
        <AnimatePresence>
          {splash && (
            <motion.div
              key={`${splash.x}-${splash.y}-${catches}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.4 }}
              transition={{ duration: 0.45 }}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: splash.x, top: splash.y }}
            >
              <span className="font-castoro italic text-accent text-lg sm:text-xl whitespace-nowrap">
                caught!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          data-cursor="sticker"
          data-dragging={caught ? 'true' : 'false'}
          onClick={handleCatch}
          className="absolute touch-none bg-transparent border-0 p-0"
          style={{
            width: FISH_W,
            height: FISH_H,
            left: pos.x,
            top: pos.y,
            filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.18))',
          }}
          animate={{
            scale: caught ? 1.2 : 1,
            rotate: caught ? [0, -12, 10, -6, 0] : [0, -3, 3, 0],
            opacity: caught ? 0 : 1,
          }}
          transition={{
            rotate: caught
              ? { duration: 0.45 }
              : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
            scale: { type: 'spring', stiffness: 400, damping: 18 },
            opacity: { duration: 0.25 },
          }}
          aria-label="Try to catch the fish"
        >
          <picture>
            <source srcSet="/images/About/fish.webp" type="image/webp" />
            <img
              src="/images/About/fish.png"
              alt=""
              width={280}
              height={191}
              className="w-full h-full object-contain pointer-events-none"
              draggable={false}
              decoding="async"
              style={{ transform: `scaleX(${facing})` }}
            />
          </picture>
        </motion.button>
      </div>
    </section>
  );
};

export default ComingSoon;
