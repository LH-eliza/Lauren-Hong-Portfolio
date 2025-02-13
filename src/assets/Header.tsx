import React from 'react';
import { Github } from 'lucide-react';

// Types for our component props
interface CaseStudyProps {
  title?: string;
  subtitle?: string;
  metadata?: {
    period: string;
    role: string;
    team: string;
    tools: string;
  };
  githubLink?: string;
  heroImage?: string;
}

// Default props
const defaultProps: CaseStudyProps = {
  title: 'Case Study',
  subtitle: '',
  metadata: {
    period: '',
    role: '',
    team: '',
    tools: '',
  },
};

// Reusable section header component
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="md:col-span-1">
    <h2 className="text-3xl text-[#EA6C3A] font-chewie">{title}</h2>
  </div>
);

const Header: React.FC<CaseStudyProps> = props => {
  // Merge provided props with default props
  const { title, subtitle, metadata, githubLink, heroImage } = {
    ...defaultProps,
    ...props,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <h1 className="text-4xl font-medium mb-4 font-chewie">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600 mb-6 font-libre">{subtitle}</p>}

      {/* Metadata Grid */}
      {metadata && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Period:</h3>
            <p className="font-libre">{metadata.period}</p>
          </div>
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Role:</h3>
            <p className="font-libre">{metadata.role}</p>
          </div>
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Team:</h3>
            <p className="font-libre">{metadata.team}</p>
          </div>
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Tools:</h3>
            <p className="font-libre">{metadata.tools}</p>
          </div>
        </div>
      )}

      {/* Github Link */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EA6C3A] text-white px-6 py-3 rounded-lg hover:bg-[#d55c2d] transition-colors mb-16 font-chewie inline-flex items-center gap-2"
        >
          View Repo
          <Github className="w-5 h-5" />
        </a>
      )}

      {/* Hero Image */}
      {heroImage && (
        <div>
          <img src={heroImage} alt={title} className="w-full rounded-3xl" />
        </div>
      )}
    </div>
  );
};

export default Header;
