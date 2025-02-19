import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Main Intro */}
      <div className="space-y-8 mb-16">
        <h1 className="text-3xl text-[#3B82F6] font-chewie">
          Hello everyone! Here's a little more about me
        </h1>

        <div className="w-full">
          <img src="/images/Lauren.svg" alt="Lauren Hong" />
        </div>

        <div className="space-y-2">
          <p className="text-center text-gray-700 leading-relaxed font-libre">
            <span className="font-bold">How are you!</span> My name is Lauren and I'm a Software
            Engineering student attending the University of Ottawa! I enjoy creating technologies
            that allows for accessibility for everyone in hopes that people of all ages and types
            can cross all barricades. ⸜(｡˃ ᵕ ˂ )⸝
          </p>
        </div>
      </div>
      {/* Outside of School and Work Section */}
      <div className="mb-16">
        <h2 className="text-2xl text-[#EA6C3A] mb-2 font-chewie">Outside of School and Work</h2>
        <p className="text-gray-700 mb-6 font-libre">
          I love to explore my creative side when I'm not working. I enjoy 3D printing, cooking,
          baking, food blogging, video editing, and creating content for my YouTube channel 🎨. I
          also am a lead for two organizations at my univeristy: uOttaHack and uOBionics, where I
          lead and explore new technologies and projects with my team.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-xl overflow-hidden border-2 border-green-700">
          <img
            src="/images/uOttaHack6.jpg"
            alt="3D printer mechanism"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden border-2 border-green-700">
          <img
            src="/images/uOttahack7.jpg"
            alt="Robot on concrete floor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/*  
      <div className="mb-16">
        <h2 className="text-2xl text-[#34D399] font-chewie mb-2">Cooking</h2>
        <p className="text-gray-700 font-libremb-6">
          Cooking is something I'm good at, but some recipes still scare me 🥬
        </p>
        <div className="bg-gray-100 rounded-2xl p-8 aspect-[2/1]"></div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl text-[#34D399] font-chewie mb-2">Baking</h2>
        <p className="text-gray-700 font-libre mb-6">
          Baking is all about science... proteins, gluten, fat percentages, glucose
          <span className="text-sm text-gray-500 italic ml-1">
            (sounds more like a chemistry experiment to me)
          </span>
        </p>
        <div className="bg-gray-100 rounded-2xl p-8 aspect-[2/1]"></div>
      </div> */}
      {/* YouTube Link */}
      <div className="font-chewie">
        <a href="https://www.youtube.com/@grungylh" className="text-blue-600 hover:text-blue-800">
          View my YouTube for Tutorials I've made
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
