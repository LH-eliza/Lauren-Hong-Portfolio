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
    </section>
  );
};

export default PassionProjects;
