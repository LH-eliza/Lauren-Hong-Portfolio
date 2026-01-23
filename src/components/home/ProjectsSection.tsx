'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Project {
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  link: string;
}

interface ProjectCardProps extends Project {
  onHoverChange: (hovered: boolean) => void;
}

const ProjectCard = ({ title, description, tag, imageUrl, link, onHoverChange }: ProjectCardProps) => {
  return (
    <a
      href={link}
      className="group flex flex-col bg-white hover:shadow-xl transition-shadow duration-200 cursor-none relative"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      {/* Main Content Area - Sharp Rectangle */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
          loading="lazy"
        />
      </div>

      {/* Caption Underneath */}
      <div className="px-5 py-4 bg-white flex justify-between items-center gap-4 border-t border-gray-200">
        <div className="flex-1">
          <h3 className="text-sm text-gray-900 font-chewie font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-600 font-libre">{description}</p>
        </div>
        <p className="text-xs text-gray-500 font-libre uppercase tracking-wide whitespace-nowrap">
          {tag}
        </p>
      </div>
    </a>
  );
};

const projects: Project[] = [
  {
    title: 'Refreshing the Hackathon Application Experience',
    description: 'Hacker Application Portal',
    tag: 'UOTTAHACK • SHIPPED 2025',
    imageUrl: '/images/Application/app.png',
    link: '/uotta-app',
  },
  {
    title: 'Creating the One-Stop-Shop for Sponsorship Needs',
    description: 'Sponsorship Management Portal',
    tag: 'UOTTAHACK • SHIPPED 2024',
    imageUrl: '/images/uottashop/uOttaShop.svg',
    link: '/uottashop',
  },
  {
    title: 'Making Life More Accessible Through Software-Hardware Interaction',
    description: 'Accessibility Indepdence',
    tag: 'UBIONICS • SHIPPED 2025',
    imageUrl: '/images/Bionics/bionics.png',
    link: '/bionics',
  },
  {
    title: 'Enhancing Solace Documentation Navigation',
    description: 'Developer Documentation Navigation',
    tag: 'SOLACE • CONCEPT 2024',
    imageUrl: '/images/Solace/Solace-docs 1.png',
    link: '/solace',
  },
];

const ProjectsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnyCardHovered, setIsAnyCardHovered] = useState(false);
  const hoverCountRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleHoverChange = (hovered: boolean) => {
    if (hovered) {
      hoverCountRef.current += 1;
    } else {
      hoverCountRef.current = Math.max(0, hoverCountRef.current - 1);
    }
    setIsAnyCardHovered(hoverCountRef.current > 0);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project}
              onHoverChange={handleHoverChange}
            />
          ))}
        </div>
      </div>
      {isAnyCardHovered && (
        <div
          className="fixed pointer-events-none z-50 bg-[#EA6C3A] text-white px-4 py-2 rounded-full text-sm font-libre whitespace-nowrap shadow-lg transition-opacity duration-200"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          Read Case Study
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
