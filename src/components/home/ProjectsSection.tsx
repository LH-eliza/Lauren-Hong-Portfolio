'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Project {
  category: string;
  title: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ category, title, tags, imageUrl, link }: Project) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center"
    >
      <motion.div
        className="w-full lg:flex-[2] overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg w-full aspect-[1.5] object-cover hover:scale-105 transition-transform duration-700"
        />
      </motion.div>

      <motion.div className="w-full lg:flex-1 mt-4 lg:mt-0" variants={contentVariants}>
        <motion.p variants={itemVariants} className="text-gray-400 text-xs mb-1">
          {category}
        </motion.p>
        <motion.h3
          variants={itemVariants}
          className="text-xl md:text-2xl font-medium mb-2 leading-snug font-chewie"
        >
          {title}
        </motion.h3>
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-gray-200 rounded-full text-xs"
              whileHover={{
                backgroundColor: '#e5e5e5',
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <motion.a
          href={link}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#e5e5e5',
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-block w-full sm:w-auto px-6 py-3 bg-gray-200 rounded-full text-gray-900 transition-all duration-300 text-center"
        >
          View Work
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const projects: Project[] = [
  {
    category: 'INTERNSHIP | SOLACE',
    title: 'Enhancing Solace Documentation Navigation',
    tags: ['graphic', 'full-stack', 'ux/ui'],
    imageUrl: '/images/Solace/Solace-docs 1.png',
    link: '/solace',
  },
  {
    category: 'LEADERSHIP | HACKATHON',
    title: 'Refreshing the Hackathon Application Experience',
    tags: ['illustration', 'full-stack', 'ux/ui'],
    imageUrl: '/images/Application/app.png',
    link: '/uotta-app',
  },
  {
    category: 'LEADERSHIP | ECOMMERCE',
    title: 'Creating the One-Stop-Shop for Sponsorship Needs',
    tags: ['graphic', 'full-stack', 'ux/ui'],
    imageUrl: '/images/uottashop/uOttaShop.svg',
    link: '/uottashop',
  },
  {
    category: 'LEADERSHIP | BIONICS',
    title: 'Making Life More Accessible Through Software-Hardware Interaction',
    tags: ['embedded', 'full-stack', 'ux/ui', 'simulation'],
    imageUrl: '/images/Bionics/bionics.png',
    link: '/bionics',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const headerControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      headerControls.start('visible');
    }
  }, [headerControls, isInView]);

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={headerControls}
      variants={headerVariants}
      className="max-w-6xl mx-auto px-4 pt-8 md:pt-16"
    >
      <div className="space-y-8 md:space-y-16">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard {...project} />
            {index < projects.length - 1 && (
              <motion.hr
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                className="my-8 border-gray-300"
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
