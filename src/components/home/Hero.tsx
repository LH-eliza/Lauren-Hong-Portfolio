'use client';

import React from 'react';
import { motion } from 'framer-motion';

const easeIn = [0.42, 0, 1, 1] as const;

const Hero: React.FC = () => {
  return (
    <section className="w-full pt-[165px] pb-10 md:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: easeIn }}
        className="max-w-3xl"
      >
        <h1 className="font-castoro text-[48px] leading-[1.25] text-black tracking-tight">
          I&apos;m Lauren, a designer
          <br />
          built on <em className="italic font-castoro">engineering</em>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeIn, delay: 0.15 }}
          className="mt-8 md:mt-10 space-y-1 font-vietnam text-sm sm:text-base text-black/80 leading-relaxed"
        >
          <p>AI Technical Advisor @Shared Services Canada.</p>
          <p>Previously developed @Motorola Solutions, designed @Solace</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
