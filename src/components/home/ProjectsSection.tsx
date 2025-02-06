import React from "react";

interface ProjectCardProps {
  category: string;
  title: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ category, title, tags }) => {
  return (
    <div className="mb-8">
      <div className="bg-gray-100 rounded-lg w-full aspect-video mb-4"></div>
      <div>
        <p className="text-gray-500 text-sm mb-2">{category}</p>
        <h3 className="text-gray-900 text-xl font-medium mb-2">{title}</h3>
        <div className="flex gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors">
          View Work
        </button>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="mb-12">
        {/* Decorative illustration */}
        <div className="w-32 h-32 mx-auto mb-4">
          {/* Add your illustration here */}
        </div>
        <p className="text-center text-gray-600">view design works</p>
      </div>

      <div className="space-y-12">
        <ProjectCard
          category="INTERNSHIP | SOLACE"
          title="Enhancing Solace Documentation Navigation"
          tags={["design", "full-stack"]}
        />
        <ProjectCard
          category="LEADERSHIP | HACKATHON"
          title="Refreshing the uOttaHack Application Experience"
          tags={["design", "full-stack"]}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
