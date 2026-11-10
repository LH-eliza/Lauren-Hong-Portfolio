'use client';

import React from 'react';

interface Project {
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, description, tag, imageUrl, link }: Project) => {
  return (
    <a
      href={link}
      data-cursor="case-study"
      className="group flex flex-col bg-white hover:shadow-xl transition-shadow duration-200 cursor-none relative border border-[rgb(229,229,229)]"
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
];

const ProjectsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-16 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
