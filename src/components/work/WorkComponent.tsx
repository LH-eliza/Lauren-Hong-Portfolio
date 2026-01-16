'use client';

import React from 'react';
import Lottie from 'lottie-react';

interface Project {
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  link: string;
}

interface SchoolProject {
  title: string;
  docLink: string;
  gradientClass?: string;
  lottieUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, description, tag, imageUrl, link }: Project) => {
  return (
    <a
      href={link}
      className="group flex flex-col bg-white hover:shadow-xl transition-shadow duration-200 cursor-pointer"
    >
      {/* Main Content Area - Sharp Rectangle */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
          loading="lazy"
        />
      </div>

      {/* Caption Underneath */}
      <div className="px-5 py-4 bg-white flex justify-between items-center gap-4 border-t border-gray-200">
        <div className="flex-1">
          <h3 className="text-sm text-gray-900 font-chewie font-medium mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 font-libre">
            {description}
          </p>
        </div>
        <p className="text-xs text-gray-500 font-libre uppercase tracking-wide whitespace-nowrap">
          {tag}
        </p>
      </div>
    </a>
  );
};

const SchoolProjectCard = ({ title, docLink, gradientClass, lottieUrl, imageUrl }: SchoolProject) => {
  const [lottieData, setLottieData] = React.useState<any>(null);

  React.useEffect(() => {
    if (lottieUrl) {
      fetch(lottieUrl)
        .then((res) => res.json())
        .then((data) => setLottieData(data))
        .catch((err) => console.error('Error loading Lottie animation:', err));
    }
  }, [lottieUrl]);

  return (
    <a
      href={docLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white hover:shadow-xl transition-shadow duration-200 cursor-pointer"
    >
      {/* Main Content Area - Image, Lottie Animation, or Animated Gradient */}
      <div className={`relative w-full aspect-[16/9] overflow-hidden bg-gray-100 flex items-center justify-center ${!lottieUrl && !imageUrl && gradientClass ? `${gradientClass} animated-gradient` : ''}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
            loading="lazy"
          />
        ) : lottieUrl && lottieData ? (
          <Lottie
            animationData={lottieData}
            loop={true}
            autoplay={true}
            className="w-full h-full"
          />
        ) : (
          <h3 className="text-2xl md:text-3xl text-white font-chewie font-bold text-center px-6 z-10">
            {title}
          </h3>
        )}
      </div>

      {/* Caption Underneath */}
      <div className="px-5 py-4 bg-white border-t border-gray-200">
        <h3 className="text-sm text-gray-900 font-chewie font-medium">
          {title}
        </h3>
      </div>
    </a>
  );
};

const caseStudies: Project[] = [
  {
    title: 'Enhancing Solace Documentation Navigation',
    description: 'Developer Documentation Navigation',
    tag: 'SOLACE • CONCEPT 2024',
    imageUrl: '/images/Solace/Solace-docs 1.png',
    link: '/solace',
  },
  {
    title: 'Refreshing the Hackathon Application Experience',
    description: 'Hacker Application Portal',
    tag: 'UOTTAHACK • SHIPPED 2025',
    imageUrl: '/images/Application/app.png',
    link: '/uotta-app',
  },
  {
    title: 'Creating the One-Stop-Shop for Sponsorship Needs',
    description: 'Sponsorship Management Portal',
    tag: 'UOTTAHACK • SHIPPED 2024',
    imageUrl: '/images/uottashop/uOttaShop.svg',
    link: '/uottashop',
  },
  {
    title: 'Making Life More Accessible Through Software-Hardware Interaction',
    description: 'Accessibility Indepdence',
    tag: 'UBIONICS • SHIPPED 2025',
    imageUrl: '/images/Bionics/bionics.png',
    link: '/bionics',
  },
];

const schoolProjects: SchoolProject[] = [
  {
    title: 'MOVE STUDIO - Dance Class Booking Site',
    docLink: 'https://move-studio.vercel.app/',
    lottieUrl: '/images/SchoolProjects/move-studio.json',
  },
  {
    title: 'InnovArt - Design Resources for Designers',
    docLink: 'https://innovart.vercel.app/',
    lottieUrl: '/images/SchoolProjects/innovart.json',
  },
];

const WorksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-16 pb-16">
      {/* Case Studies Section */}
      <div className="mb-16">
        <h2 className="text-2xl text-gray-900 font-chewie mb-8">Case Studies (Full)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {caseStudies.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* School Projects Section */}
      <div>
        <h2 className="text-2xl text-gray-900 font-chewie mb-8">School Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {schoolProjects.map((project, index) => (
            <SchoolProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
