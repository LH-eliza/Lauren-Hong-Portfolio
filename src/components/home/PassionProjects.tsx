import React from "react";

const PassionProjects: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-gray-800 mb-4">
        Passion Projects - Hardware, Illustration and Engineering Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 rounded-lg aspect-video"></div>
        <div className="bg-gray-100 rounded-lg aspect-video"></div>
      </div>

      <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors">
        View my other projects
      </button>

      <footer className="mt-20 text-center">
        <div className="mb-6">{/* Add your footer illustration here */}</div>

        <div className="flex justify-center gap-4 mb-4">
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            Be
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-gray-600">Lauren Hong | 2025</p>
      </footer>
    </section>
  );
};

export default PassionProjects;
