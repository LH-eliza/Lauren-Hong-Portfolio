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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
      {/* My Experience Section */}
      <div className="mb-16">
        <h2 className="text-2xl text-[#EA6C3A] mb-8 font-chewie">My experience</h2>

        {/* Experience Subsection */}
        <div className="mb-12">
          <h3 className="text-lg text-gray-500 mb-6 font-libre uppercase tracking-wide">
            Experience
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">
                  Giatec Scientific Inc.
                </h4>
                <p className="text-sm text-gray-500 font-libre">May 2025 - Aug 2025</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">Software Developer in Test Intern</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">Motorola Solutions</h4>
                <p className="text-sm text-gray-500 font-libre">Sept 2024 - Dec 2024</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">Software Developer Intern</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">Solace</h4>
                <p className="text-sm text-gray-500 font-libre">Jan 2024 - April 2024</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">Software Developer Intern</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">
                  Shared Services Canada
                </h4>
                <p className="text-sm text-gray-500 font-libre">May 2023 - Aug 2023</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">Project Manager Intern</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">Mozilla</h4>
                <p className="text-sm text-gray-500 font-libre">Jan 2021 - April 2022</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">IT User Support Volunteer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Activities Subsection */}
        <div>
          <h3 className="text-lg text-gray-500 mb-6 font-libre uppercase tracking-wide">
            Leadership & Activities
          </h3>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">
                  Asian Passion Project
                </h4>
                <p className="text-sm text-gray-500 font-libre">2021-2022</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">TOEFL Tutor</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">Felt Initiative</h4>
                <p className="text-sm text-gray-500 font-libre">2022-2023</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">English Second Language Tutor</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">uOttaHack</h4>
                <p className="text-sm text-gray-500 font-libre">2022-2026</p>
              </div>
              <div className="sm:text-right sm:w-1/2">
                <p className="text-gray-700 font-libre text-sm sm:text-base">
                  Marketing Coordinator (2022-2023), Marketing & Design Lead (2023-2024),
                  Co-Director (2024-2025), Senior Advisor & Event Coordinator (2025-2026)
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-gray-200">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">uOBionics</h4>
                <p className="text-sm text-gray-500 font-libre">2024-Present</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">UI/UX Designer, Software Team Lead</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4">
              <div className="flex-1">
                <h4 className="text-gray-600 font-libre font-semibold mb-1">
                  Women in Science and Engineering (WISE)
                </h4>
                <p className="text-sm text-gray-500 font-libre">2022-Present</p>
              </div>
              <div className="sm:text-right sm:w-1/3">
                <p className="text-gray-700 font-libre">
                  Outreach Coordinator (2022-2023), VP Development & Design (2025-Present)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-chewie">
        <a href="https://www.youtube.com/@grungylh" className="text-blue-600 hover:text-blue-800">
          View my YouTube for Tutorials I've made
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
