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
            <p>
              AI Technical Advisor{' '}
              <a
                href="https://www.canada.ca/en/shared-services/services/tools-to-equip-gc-workers/canchat.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-black/30 underline-offset-2 hover:text-accent hover:decoration-accent transition-colors"
              >
                @Shared Services Canada
              </a>
              .
            </p>
            <p>
              Previously developed{' '}
              <a
                href="https://www.motorolasolutions.com/en_us/products/command-center-software/public-safety-software/ng9-1-1-call-management/vesta.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-black/30 underline-offset-2 hover:text-accent hover:decoration-accent transition-colors"
              >
                @Motorola Solutions
              </a>
              , designed{' '}
              <a
                href="https://solace.com/products/platform/cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-black/30 underline-offset-2 hover:text-accent hover:decoration-accent transition-colors"
              >
                @Solace
              </a>
            </p>
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
