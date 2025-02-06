// src/components/ProjectsSection.tsx
import type { FC } from 'react';

interface Project {
  category: string;
  title: string;
  tags: string[];
  imageUrl: string;
}

interface ProjectCardProps extends Project {}

const ProjectCard: FC<ProjectCardProps> = ({ category, title, tags, imageUrl }) => (
  <div className="flex gap-8 items-center">
    <div className="flex-1">
      <img 
        src={imageUrl} 
        alt={title}
        className="rounded-3xl w-full aspect-[1.5] object-cover"
      />
    </div>
    <div className="flex-1">
      <p className="text-gray-400 text-sm mb-2">{category}</p>
      <h3 className="text-2xl font-medium mb-4 leading-snug">{title}</h3>
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 bg-gray-200 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="px-6 py-3 bg-gray-200 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors">
        View Work
      </button>
    </div>
  </div>
);

const projects: Project[] = [
  {
    category: "INTERNSHIP | SOLACE",
    title: "Enhancing Solace Documentation Navigation",
    tags: ["design", "full-stack"],
    imageUrl: "/path/to/solace-project-image.jpg" // Replace with actual image path
  },
  {
    category: "LEADERSHIP | HACKATHON",
    title: "Refreshing the uOttaHack Application Experience",
    tags: ["design", "full-stack"],
    imageUrl: "/path/to/uottahack-project-image.jpg" // Replace with actual image path
  },
];

const ProjectsSection: FC = () => (
  <div className="max-w-6xl mx-auto px-4">
    <div className="space-y-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default ProjectsSection;