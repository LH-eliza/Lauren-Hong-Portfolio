'use client';

import React from 'react';

interface Project {
  category: string;
  title: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ category, title, tags, imageUrl, link }: Project) => {
  return (
    
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center">
      <div className="w-full lg:flex-[2]">
        <img src={imageUrl} alt={title} className="rounded-lg w-full aspect-[1.5] object-cover" />
      </div>
      <div className="w-full lg:flex-1 mt-4 lg:mt-0">
        <p className="text-gray-400 text-xs mb-1">{category}</p>
        <h3 className="text-xl md:text-2xl font-medium mb-2 leading-snug font-chewie">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="inline-block w-full sm:w-auto px-6 py-3 bg-gray-200 rounded-full text-gray-900 hover:bg-gray-300 transition-colors text-center"
        >
          View Work
        </a>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    category: 'INTERNSHIP | SOLACE',
    title: 'Enhancing Solace Documentation Navigation',
    tags: ['graphic', 'full-stack', 'ux/ui'],
    imageUrl: '/images/Solace-docs 1.png',
    link: '/solace',
  },
  {
    category: 'LEADERSHIP | HACKATHON',
    title: 'Refreshing the Hackathon Application Experience',
    tags: ['illustration', 'full-stack', 'ux/ui'],
    imageUrl: '/images/app.png',
    link: '/uotta-app',
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
  return (
    <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-16">
      <div className="space-y-8 md:space-y-16">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard {...project} />
            {index < projects.length - 1 && <hr className="my-8 border-gray-300" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
