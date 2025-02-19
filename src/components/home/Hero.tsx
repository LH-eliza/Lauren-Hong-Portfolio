'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const titleControls = useAnimation();

  // Transform values based on scroll position
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    // Animate title on component mount
    titleControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    });
  }, [titleControls]);

  // SVG animation variants
  const svgVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

  return (
    <section className="min-h-[75vh] w-full pt-40 font-chewie relative overflow-hidden">
      <motion.div
        className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pl-2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <p className="text-gray-600 [writing-mode:vertical-lr] rotate-180">Scroll</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L12 20M12 20L18 14M12 20L6 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-50/30 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Hero Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="flex flex-col md:flex-row justify-between items-start gap-12 w-full px-4 md:px-8"
      >
        <div className="flex-1 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            className="text-[#E67E5E] text-2xl md:text-6xl font-medium"
          >
            Hello there!
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[#436A21] text-2xl md:text-5xl"
          >
            My name is Lauren Hong...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-gray-600 text-lg md:text-2xl max-w-3xl"
          >
            A software developer and product designer passionate about building digital experiences
            for everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            style={{ originX: 0 }}
            className="h-1 w-32 bg-gradient-to-r from-[#E67E5E] to-[#FAC03A]"
          />
        </div>

        {/* SVG Illustration */}
        <motion.div
          className="w-64 h-64 md:w-96 md:h-96 flex-shrink-0"
          initial="hidden"
          animate="visible"
          variants={svgVariants}
          whileHover={{
            scale: 1.03,
            rotate: 2,
            transition: { duration: 0.5 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 292 294"
            fill="none"
            className="w-full h-full drop-shadow-lg"
          >
            <motion.rect
              x="37"
              width="184"
              height="260"
              rx="30"
              fill="#FAC03A"
              initial={{ fill: '#FAC03A' }}
              whileHover={{ fill: '#ffca45' }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M95 58C99.092 60.3335 101.61 60.2971 106.5 58"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
            <motion.path
              d="M150 157C150 117.788 181.788 86 221 86C260.212 86 292 117.788 292 157V257.148C292 258.723 290.723 260 289.148 260H152.852C151.277 260 150 258.723 150 257.148V157Z"
              fill="#EA6C3A"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <motion.path
              d="M196 138H208V144C208 147.314 205.314 150 202 150C198.686 150 196 147.314 196 144V138Z"
              stroke="black"
              strokeWidth="2"
              initial={{ strokeWidth: 0 }}
              animate={{ strokeWidth: 2 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            <motion.path
              d="M58.9589 180.027C62.8553 173.628 72.1447 173.628 76.0411 180.027L116.701 246.799C120.758 253.463 115.962 262 108.159 262H26.8406C19.0384 262 14.2417 253.463 18.2995 246.799L58.9589 180.027Z"
              fill="#E33840"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            <motion.rect
              x="135"
              y="203"
              width="100"
              height="57"
              rx="10"
              fill="#37429B"
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
            <motion.rect
              x="135"
              y="203"
              width="92"
              height="57"
              rx="10"
              fill="#3A8FC2"
              initial={{ width: 0 }}
              animate={{ width: 92 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            />
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, duration: 0.4, type: 'spring' }}
            >
              <circle cx="82" cy="56" r="2" fill="black" />
              <circle cx="117" cy="56" r="2" fill="black" />
            </motion.g>
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
            >
              <circle cx="55" cy="229" r="2" fill="black" />
              <circle cx="75" cy="229" r="2" fill="black" />
            </motion.g>
            <motion.g
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.4, type: 'spring' }}
            >
              <circle cx="184" cy="137" r="2" fill="black" />
              <circle cx="219" cy="137" r="2" fill="black" />
            </motion.g>
            <motion.circle
              cx="64.5"
              cy="235.5"
              r="4.5"
              stroke="black"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.6, duration: 0.4, type: 'spring' }}
            />
            <motion.path
              d="M166.5 202V202C166.5 198.41 169.41 195.5 173 195.5H189C192.59 195.5 195.5 198.41 195.5 202V202"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
