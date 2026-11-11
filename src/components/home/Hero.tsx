'use client';

import React from 'react';
import { motion } from 'framer-motion';
import DuckPlant from './DuckPlant';

const easeIn = [0.42, 0, 1, 1] as const;

const Hero: React.FC = () => {
  return (
    <section className="w-full pt-[90px] pb-10 md:pb-14 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-12 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: easeIn }}
          className="max-w-3xl min-w-0 flex-1"
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: easeIn, delay: 0.2 }}
          className="w-full lg:w-[min(520px,42%)] xl:w-[min(560px,40%)] shrink-0 lg:max-w-[560px]"
        >
          <DuckPlant />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
