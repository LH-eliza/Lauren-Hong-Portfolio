'use client';

import React from "react";
import { Github } from 'lucide-react';

interface PassionProject {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
}

const passionProjects: PassionProject[] = [
  {
    title: "Smart Environment Monitor",
    description: "Engineering a smart environment monitor that tracks temperature, humidity and air quality",
    imageUrl: "/images/schematics.png",
    githubUrl: "https://github.com/LH-eliza/Smart-Environment-Monitor"
  },
  {
    title: "LED Signboard & Photowall",
    description: "Designing and building an LED signboard and photowall for uOttaHack7",
    imageUrl: "/images/wall.png"
  }
];

const PassionProjects: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-4 md:pt-8">
      <h2 className="text-gray-800 mb-4 text-xl md:text-2xl font-medium font-chewie">
        Passion Projects - Hardware, Illustration and Engineering Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {passionProjects.map((project, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden group">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black/70 flex flex-col justify-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-white text-base font-medium mb-1">{project.title}</h3>
                  <p className="text-gray-200 text-xs line-clamp-2">{project.description}</p>
                </div>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-white hover:text-gray-300 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a 
        href="https://www.behance.net/laurenhong1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto px-6 py-3 bg-gray-200 rounded-full text-gray-900 hover:bg-gray-300 transition-colors inline-block text-center mt-8"
      >
        View my other projects
      </a>
    </section>
  );
};

export default PassionProjects;