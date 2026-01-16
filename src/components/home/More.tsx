'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useAnimationControls } from 'framer-motion';

const More: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const textControls = useAnimationControls();
  const arrowControls = useAnimationControls();

  // SVG shape animations
  const shapeControls = {
    orange: useAnimationControls(),
    blue: useAnimationControls(),
    red: useAnimationControls(),
    yellow: useAnimationControls(),
    green: useAnimationControls(),
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      textControls.start('visible');

      // Animate all shapes faster with less delay between them
      const animateShapes = async () => {
        const promises = [
          shapeControls.orange.start('visible'),
          new Promise(resolve =>
            setTimeout(() => {
              shapeControls.blue.start('visible');
              resolve(null);
            }, 100)
          ),
          new Promise(resolve =>
            setTimeout(() => {
              shapeControls.red.start('visible');
              resolve(null);
            }, 200)
          ),
          new Promise(resolve =>
            setTimeout(() => {
              shapeControls.yellow.start('visible');
              resolve(null);
            }, 300)
          ),
          new Promise(resolve =>
            setTimeout(() => {
              shapeControls.green.start('visible');
              resolve(null);
            }, 400)
          ),
        ];

        await Promise.all(promises);
        arrowControls.start('bounce');
      };

      animateShapes();
    }
  }, [isInView, controls, textControls, arrowControls, shapeControls]);

  return (
    <motion.section ref={sectionRef} initial="hidden" className="py-16 overflow-hidden">
      <motion.div
        className="space-y-8 px-4 md:px-8 font-chewie"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.6,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={textControls}
      >
        <motion.h3
          className="text-[#436A21] text-3xl md:text-4xl text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          A little bit more about me
        </motion.h3>

        <motion.p
          className="text-gray-600 text-lg md:text-2xl text-center max-w-3xl mx-auto"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          I'm based in Ottawa, Ontario attending the University of Ottawa for{' '}
          <span className="font-medium">Software Engineering.</span> I love to create, explore,
          learn, and help others out. Here are some interesting projects that I've been working on.
        </motion.p>

        <motion.div
          className="flex justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          <motion.a
            href="/about"
            className="text-lg md:text-xl text-[#E67E5E] hover:text-[#d66c4d] transition-colors relative group"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Learn more about me →
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E67E5E] group-hover:w-full transition-all duration-300"
              initial={{ width: '0%' }}
              whileHover={{ width: '100%' }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="mb-5 mt-12 relative">
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mb-4"
          whileHover={{
            rotate: 5,
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 431 288"
            fill="none"
            className="w-full h-full"
          >
            {/* Orange shape */}
            <motion.path
              d="M230 79C230 35.3695 265.37 0 309 0C352.63 0 388 35.3695 388 79V186C388 197.046 379.046 206 368 206H250C238.954 206 230 197.046 230 186V79Z"
              fill="#EA6C3A"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={shapeControls.orange}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { duration: 0.4, ease: 'backOut' },
                    opacity: { duration: 0.2 },
                  },
                },
              }}
              whileHover={{
                fill: '#f27c4a',
                transition: { duration: 0.3 },
              }}
            />

            {/* Blue shape */}
            <motion.path
              d="M421 205.5C426.523 205.5 431.062 201.007 430.395 195.524C429.492 188.117 427.587 180.851 424.72 173.929C420.574 163.919 414.497 154.825 406.836 147.164C399.175 139.503 390.081 133.426 380.071 129.28C373.149 126.413 365.883 124.508 358.476 123.605C352.993 122.938 348.5 127.477 348.5 133V195.5C348.5 201.023 352.977 205.5 358.5 205.5H421Z"
              fill="#3A8FC2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={shapeControls.blue}
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: { duration: 0.4, ease: 'backOut', delay: 0.1 },
                    opacity: { duration: 0.2, delay: 0.1 },
                  },
                },
              }}
              whileHover={{
                fill: '#4a9fd2',
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />

            {/* Red circle */}
            <motion.circle
              cx="175"
              cy="56"
              r="50"
              fill="#E33840"
              initial={{ scale: 0, opacity: 0 }}
              animate={shapeControls.red}
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 10,
                    delay: 0.2,
                  },
                },
              }}
              whileHover={{
                scale: 1.1,
                fill: '#f34850',
                transition: { duration: 0.3 },
              }}
            />

            {/* Yellow rectangle */}
            <motion.rect
              x="100"
              y="106"
              width="182"
              height="100"
              rx="20"
              fill="#FAC03A"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={shapeControls.yellow}
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: {
                  scaleX: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: 'backOut',
                    delay: 0.3,
                  },
                },
              }}
              style={{ originX: 0 }}
              whileHover={{
                fill: '#ffd04a',
                y: -5,
                transition: { duration: 0.3 },
              }}
            />

            {/* Green shape */}
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81 97V153H20C8.95431 153 0 161.954 0 173V186C0 197.046 8.95431 206 20 206H101H109H114C125.046 206 134 197.046 134 186V97C134 85.9543 125.046 77 114 77H101C89.9543 77 81 85.9543 81 97Z"
              fill="#436A21"
              initial={{ y: 50, opacity: 0 }}
              animate={shapeControls.green}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 500,
                    damping: 15,
                    delay: 0.4,
                  },
                },
              }}
              whileHover={{
                fill: '#537a31',
                rotate: -5,
                transition: { duration: 0.3 },
              }}
            />
          </svg>
        </motion.div>

        <motion.p
          className="text-center text-gray-600 font-chewie"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.5 },
          }}
        >
          view case studies
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate={arrowControls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            bounce: {
              opacity: 1,
              y: [0, 10, 0],
              transition: {
                y: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                },
              },
            },
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
          >
            <motion.path
              d="M12 4L12 20M12 20L18 14M12 20L6 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { delay: 0.6, duration: 0.4 },
              }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default More;
