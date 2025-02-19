'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Original SVG components without complex animations
const Logo = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="118"
    height="112"
    viewBox="0 0 178 172"
    fill="none"
    className="w-full h-full"
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
  >
    <circle cx="113" cy="103" r="65" fill="#FAC03A" />
    <circle cx="133.5" cy="92.5" r="9" stroke="black" strokeWidth="3" />
    <circle cx="113" cy="86" r="2" fill="black" />
    <circle cx="146" cy="78" r="2" fill="black" />
    <path d="M65 20L82 30" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path d="M108 22.7085L113 2" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path d="M86 6L95 24.7231" stroke="black" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M9.2206 158.04L46.0596 102.265C49.5991 96.9061 57.4513 96.8725 61.0364 102.201L98.564 157.976C102.586 163.954 98.3025 172 91.0969 172H16.7304C9.55958 172 5.26856 164.023 9.2206 158.04Z"
      fill="#E33840"
    />
    <circle cx="53.75" cy="140.25" r="1.25" fill="black" />
    <circle cx="71.25" cy="140.25" r="1.25" fill="black" />
    <rect x="50.625" y="143.375" width="25" height="10" rx="5" stroke="black" strokeWidth="1.25" />
    <mask id="path-footer-mask" fill="white">
      <path d="M68.75 154C68.75 152.674 68.2232 151.402 67.2855 150.464C66.3479 149.527 65.0761 149 63.75 149C62.4239 149 61.1521 149.527 60.2145 150.464C59.2768 151.402 58.75 152.674 58.75 154L63.75 154H68.75Z" />
    </mask>
    <path
      d="M68.75 154C68.75 152.674 68.2232 151.402 67.2855 150.464C66.3479 149.527 65.0761 149 63.75 149C62.4239 149 61.1521 149.527 60.2145 150.464C59.2768 151.402 58.75 152.674 58.75 154L63.75 154H68.75Z"
      stroke="black"
      strokeWidth="2.5"
      mask="url(#path-footer-mask)"
    />
  </motion.svg>
);

const BlueSquare = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="106"
    height="63"
    viewBox="0 0 136 63"
    fill="none"
    className="w-full h-full"
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
  >
    <rect width="136" height="63" rx="10" fill="#3A8FC2" />
    <circle
      cx="5.24999"
      cy="5.24999"
      r="4.49999"
      transform="matrix(-0.998801 0.0489504 0.0489504 0.998801 28.6317 23.4824)"
      stroke="black"
      strokeWidth="1.5"
    />
    <motion.circle
      cx="0.999997"
      cy="0.999997"
      r="0.999997"
      transform="matrix(-0.998801 0.0489504 0.0489504 0.998801 34.6735 24.188)"
      fill="black"
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    />
    <motion.circle
      cx="0.999997"
      cy="0.999997"
      r="0.999997"
      transform="matrix(-0.998801 0.0489504 0.0489504 0.998801 17.9976 21)"
      fill="black"
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    />
  </motion.svg>
);

const BehanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    className="w-full h-full"
  >
    <g clipPath="url(#clip0_28_176)">
      <path
        d="M18.513 33.7725H13.5V29.25H18.5872C22.8127 29.25 23.094 33.7725 18.513 33.7725ZM33.7185 27.7493H40.509C40.2458 23.8905 34.3665 23.301 33.7185 27.7493ZM18.4095 20.25H13.5V24.75H18.8752C22.6395 24.75 23.2335 20.25 18.4095 20.25ZM54 11.25V42.75C54 48.9622 48.9645 54 42.75 54H11.25C5.0355 54 0 48.9622 0 42.75V11.25C0 5.03775 5.0355 0 11.25 0H42.75C48.9645 0 54 5.03775 54 11.25ZM31.5 18H42.75V15.75H31.5V18ZM23.508 26.1405C27.7987 23.949 27.6413 15.903 19.4288 15.7815H9V38.232H18.6997C28.8742 38.232 28.701 28.0305 23.508 26.1405ZM44.8537 27.495C44.2372 23.5282 41.4157 20.8575 36.792 20.8575C32.0805 20.8575 29.25 23.8725 29.25 29.7383C29.25 35.658 32.3258 38.25 36.936 38.25C41.5462 38.25 43.9245 35.6963 44.586 33.75H39.8363C38.1802 35.6738 33.327 34.9222 33.6105 30.7058H44.9955C45.018 29.2793 44.9685 28.2555 44.8537 27.495Z"
        fill="black"
      />
    </g>
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="57"
    height="55"
    viewBox="0 0 57 55"
    fill="none"
    className="w-full h-full"
  >
    <g clipPath="url(#clip0_28_174)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.9893 0C12.5119 0 0 12.6042 0 28.1972C0 40.6616 8.01682 51.2124 19.1383 54.9467C20.5287 55.2274 21.0381 54.34 21.0381 53.5935C21.0381 52.9398 20.9922 50.6991 20.9922 48.3645C13.2063 50.0454 11.5849 45.0032 11.5849 45.0032C10.3337 41.7353 8.47974 40.8954 8.47974 40.8954C5.93141 39.168 8.66537 39.168 8.66537 39.168C11.4921 39.3548 12.9754 42.0624 12.9754 42.0624C15.4773 46.357 19.509 45.1435 21.1309 44.3965C21.3623 42.5757 22.1043 41.3153 22.892 40.6152C16.6822 39.9615 10.1486 37.5341 10.1486 26.7031C10.1486 23.6219 11.2601 21.1011 13.0213 19.1406C12.7434 18.4405 11.77 15.5455 13.2997 11.6709C13.2997 11.6709 15.663 10.9238 20.9917 14.5653C23.2731 13.948 25.6258 13.6341 27.9893 13.6314C30.3526 13.6314 32.7617 13.9585 34.9863 14.5653C40.3156 10.9238 42.6789 11.6709 42.6789 11.6709C44.2085 15.5455 43.2346 18.4405 42.9567 19.1406C44.7643 21.1011 45.8299 23.6219 45.8299 26.7031C45.8299 37.5341 39.2964 39.9145 33.0401 40.6152C34.0599 41.5021 34.9399 43.1824 34.9399 45.8436C34.9399 49.6249 34.8941 52.6596 34.8941 53.5929C34.8941 54.34 35.404 55.2274 36.7939 54.9473C47.9153 51.2119 55.9321 40.6616 55.9321 28.1972C55.978 12.6042 43.4202 0 27.9893 0Z"
        fill="#24292F"
      />
    </g>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="55"
    height="55"
    viewBox="0 0 55 55"
    fill="none"
    className="w-full h-full"
  >
    <g clipPath="url(#clip0_28_170)">
      <path
        d="M43.5417 0H11.4583C5.13104 0 0 5.13104 0 11.4583V43.5417C0 49.869 5.13104 55 11.4583 55H43.5417C49.8713 55 55 49.869 55 43.5417V11.4583C55 5.13104 49.8713 0 43.5417 0ZM18.3333 43.5417H11.4583V18.3333H18.3333V43.5417ZM14.8958 15.4275C12.6821 15.4275 10.8854 13.6171 10.8854 11.385C10.8854 9.15292 12.6821 7.3425 14.8958 7.3425C17.1096 7.3425 18.9062 9.15292 18.9062 11.385C18.9062 13.6171 17.1119 15.4275 14.8958 15.4275ZM45.8333 43.5417H38.9583V30.6992C38.9583 22.9808 29.7917 23.5652 29.7917 30.6992V43.5417H22.9167V18.3333H29.7917V22.3781C32.9908 16.4519 45.8333 16.0142 45.8333 28.0523V43.5417Z"
        fill="black"
      />
    </g>
  </svg>
);

// Simplified hover animation for social links
const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 hover:text-gray-600 w-12"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Main animation controls
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative" ref={ref}>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#EA6C3A]"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{ originY: 1 }}
      />

      <motion.div
        className="max-w-4xl mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="flex justify-between items-end">
          <motion.div variants={itemVariants} className="flex items-end">
            <Logo />
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="flex space-x-6 mb-4">
              <SocialIcon href="https://www.behance.net/laurenhong1">
                <BehanceIcon />
              </SocialIcon>
              <SocialIcon href="https://github.com/LH-eliza">
                <GitHubIcon />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/lauren-hong/">
                <LinkedInIcon />
              </SocialIcon>
            </div>

            <p className="text-gray-800 mb-2 font-chewie text-center">Lauren Hong | 2025</p>

            <div className="flex justify-center space-x-4 font-chewie">
              <motion.a
                href="mailto:leliza.hong@outlook.com"
                className="text-gray-600 hover:text-gray-800"
                whileHover={{ scale: 1.1 }}
              >
                Email
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1vJI74PSADYNJr2vsUDZjZ3zmphDMVeiQ/view?usp=sharing"
                className="text-gray-600 hover:text-gray-800"
                whileHover={{ scale: 1.1 }}
              >
                Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center">
            <BlueSquare />
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
