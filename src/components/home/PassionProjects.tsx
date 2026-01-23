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
    title: 'Sports Medicine Illustrations',
    description: 'Illustrating assets for the University of Ottawa Sports Medicine Club',
    imageUrl: '/images/Personal/Sports.png',
    behanceUrl: 'https://www.behance.net/gallery/220510147/Sports-Logo-University-of-Ottawa',
    instagramUrl: 'https://www.instagram.com/uosportsmed/',
  },
  {
    title: 'uOttaHack 5',
    description: 'Illustrating and marketing uOttaHack5 (450+ Students)',
    imageUrl: '/images/Personal/Thumb05.png',
    instagramUrl: 'https://www.instagram.com/uottahack/',
    behanceUrl: 'https://2023.uottahack.ca/',
  },
  {
    title: 'uOttaHack 6',
    description: 'Designing and leading the branding for uOttaHack 6 (650+ Students)',
    imageUrl: '/images/Personal/Thumb06.png',
    instagramUrl: 'https://www.instagram.com/uottahack/',
    behanceUrl: 'https://2024.uottahack.ca/',
  },
  {
    title: 'uOttaHack 7',
    description: 'Designing and leading the branding for uOttaHack 7 (850+ Students)',
    imageUrl: '/images/Personal/Thumbo7.png',
    instagramUrl: 'https://www.instagram.com/uottahack/',
    behanceUrl: 'https://2025.uottahack.ca/',
  },
];

const PassionProjects: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4 sm:py-6 md:py-4">
      <hr className="my-8 border-gray-300" />
      <h2 className="text-gray-800 mb-4 text-lg sm:text-xl md:text-2xl font-chewie">
        Leadership Projects & Community Involvement
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-4 sm:mb-6 md:mb-8">
        {passionProjects.map((project, index) => {
          // Determine the main link - prefer behanceUrl, fallback to instagramUrl
          const mainLink = project.behanceUrl || project.instagramUrl || project.githubUrl;

          return (
            <a
              key={index}
              href={mainLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white hover:shadow-xl transition-shadow duration-200 cursor-pointer"
            >
              {/* Main Content Area - Sharp Rectangle */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  loading="lazy"
                />
              </div>

              {/* Caption Underneath */}
              <div className="px-5 py-4 bg-white flex justify-between items-center gap-4 border-t border-gray-200">
                <div className="flex-1">
                  <h3 className="text-sm text-gray-900 font-chewie font-medium mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-libre">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="GitHub"
                      onClick={e => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.instagramUrl && (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="Instagram"
                      onClick={e => e.stopPropagation()}
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {project.behanceUrl && (
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="Behance"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <a
        href="https://www.behance.net/laurenhong1"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full sm:inline-block sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-sm sm:text-base text-gray-900 hover:bg-gray-300 transition-colors text-center"
      >
        View my other projects
      </a>
    </section>
  );
};

export default PassionProjects;
