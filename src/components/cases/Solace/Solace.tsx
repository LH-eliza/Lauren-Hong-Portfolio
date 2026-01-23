import React, { useState, useEffect } from 'react';
import { Github, X } from 'lucide-react';
import mermaid from 'mermaid';
import CaseStudy from '../../../assets/Header';
import Flowchart from '../../../assets/Flowchart';
import Sketches from './Sketches';
import Wireframe from './Wireframe';
import TableOfContents from '../../TableOfContents';
import ScrollProgressBar from '../../ScrollProgressBar';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-2 transition-all z-10"
          aria-label="Close image"
        >
          <X className="w-6 h-6" />
        </button>
        <img src={imageSrc} alt={altText} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

interface MagnifiableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MagnifiableImage: React.FC<MagnifiableImageProps> = ({ src, alt, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className}`}
        onClick={() => setIsModalOpen(true)}
      />
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={src}
        altText={alt}
      />
    </>
  );
};

const SolaceStudy = () => {
  React.useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        curve: 'basis',
        padding: 20,
      },
    });
  }, []);
  return (
    <div>
      <CaseStudy
        title="Enhancing Solace Documentation Navigation"
        subtitle="Project for the company's internal hackathon where our intern team won people's choice"
        metadata={{
          period: 'April 2024',
          role: 'Software Developer, UI designer',
          team: '4 developers, 2 UI designers/developers',
          tools: 'Figma, React, Python, HTML, CSS',
        }}
        githubLink="https://github.com/Patrick-Bonini/SuperChargedChatBot"
        heroImage="/images/Solace/SolaceDocs.svg"
      />
      <div className="relative">
        <ScrollProgressBar color="#EA6C3A" />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex gap-8">
            <TableOfContents />
            <div className="flex-1">
              <div className="bg-gray-100 rounded-3xl p-8 mb-16">
                <h2 className="text-2xl text-gray-800 font-libre">
                  "How do we make understanding documentation and onboarding easier?"
                </h2>
              </div>

            {/* Project Overview Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-chewie">Project Overview</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-libre">Background:</h3>
                  <p className="text-gray-700 font-libre">
                    Solace PubSub+ offers comprehensive technical documentation, serving a diverse
                    user base from students to enterprise developers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-libre">Problem:</h3>
                  <p className="text-gray-700 font-libre">
                    Users struggle to quickly find and understand specific technical information
                    within the extensive documentation, creating friction in the learning and
                    implementation process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-libre">Solution:</h3>
                  <p className="text-gray-700 font-libre">
                    An AI-powered documentation chatbot that provides instant, conversational access
                    to Solace's technical knowledge base, making information discovery intuitive and
                    efficient.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-libre">My Role:</h3>
                  <p className="text-gray-700 font-libre">
                    I designed the AI chat bot's conversational interface, user onboarding
                    work-flows
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Section */}

            <div className="bg-gray-50 rounded-3xl p-8 mb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <MagnifiableImage
                      src="/images/Solace/New.png"
                      alt="Solace redesigned interface"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-libre">Solace Documentation with Chatbot</p>
                </div>

                <div>
                  <div className="mb-4">
                    <MagnifiableImage
                      src="/images/Solace/Legacy.png"
                      alt="Solace legacy interface"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-libre">Current Solace Documentation</p>
                </div>
              </div>
            </div>

            {/* Results Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-chewie">Results</h2>
              </div>

              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-libre">84%</h3>
                  <p className="text-lg text-gray-600 font-libre">
                    of users found answers faster using the chatbot compared to traditional
                    documentation navigation
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-libre">92%</h3>
                  <p className="text-lg text-gray-600 font-libre">
                    of users said they would use the chatbot as their primary method for accessing
                    Solace documentation
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-libre">98%</h3>
                  <p className="text-lg text-gray-600 font-libre">
                    of users reported feeling more confident in implementing Solace solutions with
                    the chatbot's assistance
                  </p>
                </div>
              </div>
            </div>

            {/* Research & Development Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32 mt-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-chewie">Research & Development</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-libre">01 — Brainstorm</h3>
                  <p className="text-gray-700 font-libre">
                    Given the task to "create a project with AI that improves daily workflow" our
                    team focused on transforming how users interact with Solace PubSub+
                    documentation. The challenge: How might we help users find and understand
                    technical information more efficiently while maintaining the depth of content?
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-4 font-libre">02 — Research</h3>
                  <p className="text-gray-700 font-libre">
                    We conducted 7 user interviews with Solace users across different roles
                    (developers, students, system architects) to identify pain points and insights
                    for improving documentation accessibility. I also researched chatbot
                    implementation in technical documentation and its impact on user engagement.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl mb-8 font-libre">Areas of Research</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-libre">
                        Understanding Technical Documentation Needs
                      </h4>
                      <p className="text-gray-600 font-libre">
                        To understand how different users (developers, students, architects)
                        navigate technical documentation and what challenges they face in finding
                        specific information.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-libre">
                        Analyzing User Learning Patterns
                      </h4>
                      <p className="text-gray-600 font-libre">
                        To understand how users prefer to learn technical concepts, their preferred
                        methods of consuming documentation, and what makes information more
                        digestible for them.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-libre">
                        Exploring Current Documentation Tools
                      </h4>
                      <p className="text-gray-600 font-libre">
                        To understand how existing documentation platforms and chatbots perform,
                        where they excel, and most importantly, where they fall short in meeting
                        user needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Findings Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-chewie">Findings</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-2xl mb-6 font-libre">Interview Findings:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-libre">
                    <li>Users found the technical depth valuable but struggled with navigation</li>
                    <li>Most users preferred interactive learning over static documentation</li>
                    <li>
                      Real-time assistance was highly valued, especially during implementation
                    </li>
                    <li>Users expressed strong interest in personalized learning paths</li>
                    <li>Documentation search was a major pain point across all user types</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-6 font-libre">Research Findings:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-libre">
                    <li>Technical documentation chatbots can reduce search time by up to 60%</li>
                    <li>Interactive documentation increases user engagement by 40-50%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bringing Ideas to Life Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-chewie">Bringing our Ideas to Life</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <p className="text-gray-700 mb-4 font-libre">
                    We built the Solace Documentation Chatbot with a focus on intuitive interaction
                    and quick access to information.
                  </p>
                  <p className="text-gray-700 mb-8 font-libre">
                    Before we started, I focused on creating a flow chart to express user's
                    interactions with insights and conclusions gathered from our findings.
                  </p>

                  <Flowchart />

                  <p className="text-gray-700 font-libre">
                    The user flow diagram illustrates how users interact with our AI documentation
                    assistant - from their first visit through to finding answers. It maps out key
                    interactions like natural language queries, code help, and troubleshooting
                    paths, showing how the chatbot adapts to different user needs. The feedback loop
                    ensures continuous improvement based on user satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Design & Features Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-chewie">Design & Features</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-libre">03 — Design Process</h3>
                  <p className="text-gray-700 mb-6 font-libre">
                    Our solution: An AI-powered documentation chatbot that provides conversational
                    access to technical information.
                  </p>

                  <h3 className="text-xl mb-4 font-libre">Key Features:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-libre">
                    <li>Natural language search capabilities</li>
                    <li>Context-aware responses</li>
                    <li>Interactive code examples</li>
                    <li>Personalized learning paths</li>
                    <li>Real-time documentation update</li>
                  </ul>
                </div>
              </div>
            </div>

            <Sketches />

            <Wireframe />

            <div className="mb-24">
              <div className="relative w-full bg-gray-100 rounded-xl p-4 sm:p-8">
                {/* 16:9 aspect ratio container */}
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://embed.figma.com/proto/7x3EmI7SUsjNjCavqwrURh/Solace-Hackathon?page-id=0%3A1&node-id=88-696&starting-point-node-id=12%3A8&embed-host=share"
                    allowFullScreen
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">Prototype</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-32">
              <div className="lg:col-span-1">
                <h2 className="text-2xl sm:text-3xl text-[#EA6C3A] font-chewie">Next Steps</h2>
              </div>

              <div className="lg:col-span-3">
                <p className="text-lg text-gray-500 font-libre leading-relaxed">
                  Our roadmap focuses on continuous improvement and expansion of the Solace
                  Documentation Chatbot. Starting with a beta launch to gather initial feedback,
                  we'll progressively roll out enhanced features like multi-language support and
                  personalized learning paths. Our immediate priority is user testing and analytics
                  setup to ensure we're delivering the most effective documentation experience
                  possible.
                </p>
              </div>
            </div>

            <div>
              <img
                src="/images/Solace/SolaceStyling.svg"
                alt="Solace Documentation"
                className="w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SolaceStudy;
