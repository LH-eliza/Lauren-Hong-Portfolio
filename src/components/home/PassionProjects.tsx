'use client';

import React from 'react';
import { Github, Instagram, ExternalLink } from 'lucide-react';

interface PassionProject {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  instagramUrl?: string;
  behanceUrl?: string;
}

const passionProjects: PassionProject[] = [
  {
    title: 'LED Signboard & Photowall',
    description: 'Designing and building an LED signboard and photowall for uOttaHack7',
    imageUrl: '/images/wall.png',
    instagramUrl: 'https://www.instagram.com/uottahack/',
  },
  {
    title: 'Smart Environment Monitor',
    description:
      'Engineering a smart environment monitor that tracks temperature, humidity and air quality',
    imageUrl: '/images/schematics.png',
    githubUrl: 'https://github.com/LH-eliza/Smart-Environment-Monitor',
  },
  {
    title: 'Sports Medicine Logo',
    description: 'Illustrating a logo for the University of Ottawa Sports Medicine Club',
    imageUrl: '/images/Personal/Sports.png',
    behanceUrl: 'https://www.behance.net/gallery/220510147/Sports-Logo-University-of-Ottawa',
    instagramUrl: 'https://www.instagram.com/uosportsmed/',
  },
  {
    title: 'uOttaHack 5',
    description: 'Designing and marketing uOttaHack5 (450+ Students)',
    imageUrl: '/images/Personal/Thumb05.png',
    instagramUrl: 'https://www.instagram.com/uottahack/',
    behanceUrl: 'https://2023.uottahack.ca/',
  },
  {
    title: 'uOttaHack 6',
    description: 'Designing and leading the branding for uOttaHack6 (650+ Students)',
    imageUrl: '/images/Personal/Thumbo6.png',
    instagramUrl: 'https://www.instagram.com/uottahack/',
    behanceUrl: 'https://2024.uottahack.ca/',
  },
  {
    title: 'uOttaHack 7',
    description: 'Designing and leading the branding for uOttaHack7 (850+ Students)',
    imageUrl: '/images/Personal/Thumb07.png',
    instagramUrl: 'https://www.instagram.com/uottahack/',
    behanceUrl: 'https://2025.uottahack.ca/',
  },
];

const PassionProjects: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-4 sm:py-6 md:py-4">
      <hr className="my-8 border-gray-300" />
      <h2 className="text-gray-800 mb-4 text-lg sm:text-xl md:text-2xl font-chewie">
        Passion Projects - Hardware, Illustration and Engineering Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
        {passionProjects.map((project, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden group bg-gray-100">
            <div className="aspect-video">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-white text-sm sm:text-base font-medium mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex ml-3 gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.instagramUrl && (
                      <a
                        href={project.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.behanceUrl && (
                      <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition-colors"
                        aria-label="Behance"
                      >
                        <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://www.behance.net/laurenhong1"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full sm:inline-block sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 rounded-full text-sm sm:text-base text-gray-900 hover:bg-gray-300 transition-colors text-center"
      >
        View my other projects
      </a>
    </section>
  );
};

export default PassionProjects;
