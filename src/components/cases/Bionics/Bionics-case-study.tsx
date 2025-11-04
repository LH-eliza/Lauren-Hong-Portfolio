import React, { useState, useEffect } from 'react';
import { Github, X } from 'lucide-react';
import TableOfContents from '../../TableOfContents';
import ScrollFadeIn from '../../ScrollFadeIn';
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-6xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
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

import mermaid from 'mermaid';

const ExoArmFlowchart: React.FC = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
    });

    mermaid.init(undefined, document.querySelectorAll('.mermaid'));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h3 className="text-xl sm:text-2xl mb-4 font-libre">User Flow Visualization</h3>
      <div className="bg-white p-4 rounded-xl shadow-lg overflow-auto">
        <div className="mermaid">
          {`
          flowchart TD
            A[User Opens App] --> B{First Time User?}
            B -->|Yes| C[Onboarding Flow]
            B -->|No| D[Login]
            
            C --> C1[Age Selection]
            C1 --> C2[Name & Email]
            C2 --> C3[Health Metrics Input]
            C3 --> C4[Medical Information]
            C4 --> C5[Emergency Contact]
            C5 --> C6[Password Creation]
            C6 --> D
            
            D --> E[Dashboard]
            
            E --> F[View Heart Rate]
            E --> G[View Blood Pressure]
            E --> H[View Temperature]
            E --> I[View Oxygen Levels]
            
            F & G & H & I --> J[Record New Measurement]
            J --> K[Connect to ExoArm]
            K --> L[Measurement Complete]
            L --> M[View Analysis]
            M --> E
            
            classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px
            classDef decision fill:#fef2f2,stroke:#b91c1c,stroke-width:1px
            classDef mainflow fill:#f8fafc,stroke:#475569,stroke-width:1px
            classDef metrics fill:#f0fdf4,stroke:#15803d,stroke-width:1px
            
            class B decision
            class A,C,C1,C2,C3,C4,C5,C6,D,E,J,K,L,M mainflow
            class F,G,H,I metrics
          `}
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mt-4 font-libre">
        The user flow diagram maps the complete journey from first-time setup through regular health
        monitoring and vital sign recording.
      </p>
    </div>
  );
};

const ExoArmUserPersonas: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-medium mb-4 font-libre">Sarah Chen, 45</h3>
        <h4 className="text-lg mb-2 text-gray-700 font-libre">Health-Conscious Professional</h4>
        <p className="text-gray-600 mb-4 font-libre">
          Marketing Executive balancing career demands with health awareness
        </p>
        <div className="mb-4">
          <h5 className="font-medium text-gray-800 font-libre">Goals:</h5>
          <ul className="list-disc pl-5 text-gray-600 font-libre">
            <li>Monitor stress through vital signs</li>
            <li>Track blood pressure</li>
            <li>Maintain work-life balance</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-800 font-libre">Pain Points:</h5>
          <ul className="list-disc pl-5 text-gray-600 font-libre">
            <li>Inconsistent smartwatch readings</li>
            <li>Needs reliable data for doctor</li>
            <li>Requires unobtrusive solution</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-medium mb-4 font-libre">Robert Martinez, 58</h3>
        <h4 className="text-lg mb-2 text-gray-700 font-libre">Managing Chronic Condition</h4>
        <p className="text-gray-600 mb-4 font-libre">
          Semi-retired Teacher needing consistent health monitoring
        </p>
        <div className="mb-4">
          <h5 className="font-medium text-gray-800 font-libre">Goals:</h5>
          <ul className="list-disc pl-5 text-gray-600 font-libre">
            <li>Regular BP and oxygen monitoring</li>
            <li>Easy data sharing with doctors</li>
            <li>Prevention of complications</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-800 font-libre">Pain Points:</h5>
          <ul className="list-disc pl-5 text-gray-600 font-libre">
            <li>Multiple devices needed</li>
            <li>Difficulty maintaining schedule</li>
            <li>Needs simple interface</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-medium mb-4 font-libre">Emily Wright, 32</h3>
        <h4 className="text-lg mb-2 text-gray-700 font-libre">Fitness Enthusiast</h4>
        <p className="text-gray-600 mb-4 font-libre">
          Personal Trainer requiring precise metric tracking
        </p>
        <div className="mb-4">
          <h5 className="font-medium text-gray-800 font-libre">Goals:</h5>
          <ul className="list-disc pl-5 text-gray-600 font-libre">
            <li>Precise workout vital tracking</li>
            <li>Real-time client monitoring</li>
            <li>Professional-grade accuracy</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-800 font-libre">Pain Points:</h5>
          <ul className="list-disc pl-5 text-gray-600 font-libre">
            <li>Consumer devices lack precision</li>
            <li>Needs comprehensive data</li>
            <li>Requires portable solution</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const UIScreenshots: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-16">
      <div>
        <img
          src="/images/Bionics/Login.svg"
          alt="ExoArm onboarding screens"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-500 mt-2">User onboarding flow</p>
      </div>
      <div>
        <img
          src="/images/Bionics/Dashboard.svg"
          alt="ExoArm dashboard screens"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-500 mt-2">Main dashboard and vital monitoring</p>
      </div>
    </div>
  );
};

const ExoArmCaseStudy: React.FC = () => {
  useEffect(() => {
    // Initialize mermaid for flowcharts
    // This assumes mermaid is imported elsewhere
    if (typeof window !== 'undefined' && 'mermaid' in window) {
      // @ts-ignore
      window.mermaid.initialize({
        startOnLoad: true,
        theme: 'neutral',
        flowchart: {
          curve: 'basis',
          padding: 20,
        },
      });
    }
  }, []);

  return (
    <div className="relative">
      <ScrollProgressBar color="#EA6C3A" />
      <TableOfContents />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl text-[#5F5F5F] mb-4 font-chewie">
          Enhancing Health Monitoring Through Accessible Technology
        </h1>
        <p className="text-lg text-gray-600 mb-6 font-libre">
          Case study for an innovative mobile application connecting users with an external exoarm
          device for accurate health monitoring.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Duration:</h3>
            <p className="font-libre">Jan 2025 - April 2025</p>
          </div>
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Role:</h3>
            <p className="font-libre">Lead Product Designer, UX Researcher</p>
          </div>
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Team:</h3>
            <p className="font-libre">2 designers, 3 developers, 1 medical advisor</p>
          </div>
          <div>
            <h3 className="text-m text-gray-500 mb-2 font-chewie">Tools:</h3>
            <p className="font-libre">Figma, React Native, ExoArm API</p>
          </div>
        </div>

        <a
          href="https://github.com/exoarm-health/mobile-app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#EA6C3A] text-white px-6 py-3 rounded-lg hover:bg-[#d55c2d] transition-colors mb-16 font-chewie inline-flex items-center gap-2"
        >
          View Repo
          <Github className="w-5 h-5" />
        </a>

        <div className="mb-16">
          <MagnifiableImage
            src="/images/Bionics/bionics.svg"
            alt="ExoArm Health Monitoring App"
            className="w-full rounded-3xl"
          />
        </div>

        <div className="bg-gray-100 rounded-3xl p-8 mb-16">
          <h2 className="text-2xl text-gray-800 font-libre">
            "How do we make medical-grade health monitoring accessible to everyone?"
          </h2>
        </div>

        {/* Problem Statement */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">Problem Statement</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-lg text-gray-700 font-libre leading-relaxed">
                Current health monitoring solutions force users to choose between convenience
                (inaccurate consumer wearables) or accuracy (complex medical devices), creating a
                significant gap in the market for accessible, medical-grade health tracking. This
                divide particularly affects users across different age groups and technical
                abilities who need reliable health data for informed decision-making but struggle
                with existing solutions' usability limitations.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Project Overview Section */}
        <ScrollFadeIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">Project Overview</h2>
            </div>
            <div className="md:col-span-3 space-y-8">
              <div>
                <h3 className="text-xl mb-4 font-libre">Background:</h3>
                <p className="text-gray-700 font-libre">
                  The ExoArm Health Monitoring Application connects to an external exoarm device to
                  track vital health metrics including oxygen levels, heart rate, blood pressure,
                  and body temperature with medical-grade accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-4 font-libre">Solution:</h3>
                <p className="text-gray-700 font-libre">
                  A user-centered mobile application connected to an external exoarm sensor that
                  provides medical-grade accuracy through an intuitive interface tailored to
                  different user needs and technical abilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl mb-4 font-libre">My Role:</h3>
                <p className="text-gray-700 font-libre">
                  I led the UX research and interface design, developed user personas based on
                  interviews, created wireframes and prototypes, and established the design system
                  for a consistent experience across the application.
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Comparison Section */}
        <ScrollFadeIn delay={200}>
          <div className="bg-gray-50 rounded-3xl p-8 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl text-[#EA6C3A] mb-6 font-chewie">ExoArm Solution</h2>
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <div className="aspect-video">
                    <MagnifiableImage
                      src="/images/Bionics/New-Approach.svg"
                      alt="ExoArm intuitive interface"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl text-[#EA6C3A] mb-6 font-chewie">
                  Traditional Medical Interface
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-4">
                  <div className="aspect-video">
                    <MagnifiableImage
                      src="/images/Bionics/Traditional.svg"
                      alt="Traditional complex medical interface"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* User Personas Section */}
        <ScrollFadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">User Personas</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-gray-700 mb-8 font-libre">
                Based on our interviews with potential users, we identified three key personas that
                represent our target audience. These personas guided our design decisions throughout
                the project.
              </p>

              <ExoArmUserPersonas />
            </div>
          </div>
        </ScrollFadeIn>

        {/* Research & Development Section */}
        <ScrollFadeIn delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">Research & Development</h2>
            </div>
            <div className="md:col-span-3 space-y-8">
              <ScrollFadeIn delay={500}>
                <div>
                  <h3 className="text-xl mb-4 font-libre">01 — Problem Discovery</h3>
                  <p className="text-gray-700 font-libre">
                    We interviewed 24 users across different age groups, technical abilities, and
                    health needs to understand the challenges they face with current health
                    monitoring solutions. We found that users universally struggled with balancing
                    ease of use and accuracy in their health tracking devices.
                  </p>
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn delay={600}>
                <div>
                  <h3 className="text-xl mb-4 font-libre">02 — User Research</h3>
                  <p className="text-gray-700 font-libre">
                    Our research revealed three distinct user profiles with specific needs:
                    health-conscious professionals seeking unobtrusive monitoring, individuals
                    managing chronic conditions requiring reliable data sharing, and fitness
                    enthusiasts needing precise performance metrics.
                  </p>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={700}>
                <div className="mt-12">
                  <h3 className="text-2xl mb-8 font-libre">Research Focus Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-libre">
                        User Interface Accessibility
                      </h4>
                      <p className="text-gray-600 font-libre">
                        Investigating how users of different ages and technical abilities interact
                        with health monitoring interfaces, identifying barriers to adoption, and
                        developing design principles for universal accessibility.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-libre">
                        Data Visualization Preferences
                      </h4>
                      <p className="text-gray-600 font-libre">
                        Exploring how different user groups prefer to view and interpret health
                        data, including preferences for numerical displays, graphs, color coding,
                        and historical trend visualization.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-libre">
                        Hardware-Software Integration
                      </h4>
                      <p className="text-gray-600 font-libre">
                        Evaluating user expectations for the connection between wearable devices and
                        mobile applications, focusing on seamless pairing, consistent data sync, and
                        intuitive recording mechanisms.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Findings Section */}
        <ScrollFadeIn delay={800}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">Key Findings</h2>
            </div>
            <div className="md:col-span-3 space-y-8">
              <div>
                <h3 className="text-2xl mb-6 font-libre">Interview Insights:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 font-libre">
                  <li>
                    78% of users reported abandoning health tracking devices due to inaccurate
                    readings
                  </li>
                  <li>92% valued data accuracy over design aesthetics for health monitoring</li>
                  <li>
                    Users across all age groups struggled with complex medical device interfaces
                  </li>
                  <li>Older users (55+) strongly preferred numerical displays over graphs</li>
                  <li>Younger users (25-40) wanted both graphical trends and precise numbers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl mb-6 font-libre">Usability Testing Results:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 font-libre">
                  <li>Simple, focused screens increased completion rates by 64%</li>
                  <li>Step-by-step onboarding improved user confidence by 87%</li>
                  <li>Consistent navigation patterns reduced error rates by 73%</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* User Flow Section */}
        <ScrollFadeIn delay={900}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">User Flow Design</h2>
            </div>
            <div className="md:col-span-3 space-y-8">
              <div>
                <p className="text-gray-700 mb-4 font-libre">
                  We designed a streamlined user flow that guides users through onboarding and daily
                  health monitoring with minimal friction. The flow accommodates different user
                  needs while maintaining a consistent experience.
                </p>
                <p className="text-gray-700 mb-8 font-libre">
                  Before development, I created a flowchart to map out key user interactions based
                  on our research findings.
                </p>

                <ExoArmFlowchart />

                <p className="text-gray-700 font-libre">
                  The user flow diagram illustrates how users interact with our ExoArm application -
                  from their initial setup through daily health monitoring. It maps out key
                  interactions including onboarding, vital sign recording, and data analysis,
                  showing how the interface adapts to different user needs.
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* UI Design Section */}
        <ScrollFadeIn delay={1000}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">UI Design</h2>
            </div>
            <div className="md:col-span-3 space-y-8">
              <ScrollFadeIn delay={1100}>
                <div>
                  <h3 className="text-xl mb-4 font-libre">03 — Interface Design</h3>
                  <p className="text-gray-700 mb-6 font-libre">
                    Our design solution addresses diverse user needs through:
                  </p>

                  <h3 className="text-xl mb-4 font-libre">Key Interface Elements:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-libre">
                    <li>Step-by-step onboarding with clear progress indicators</li>
                    <li>Dashboard with at-a-glance health metrics</li>
                    <li>Dedicated screens for each vital sign with consistent layout</li>
                    <li>Simple record buttons for quick measurement capture</li>
                    <li>Adaptable visualizations for different user preferences</li>
                    <li>Emergency contact information readily accessible</li>
                  </ul>
                </div>
              </ScrollFadeIn>

              <ScrollFadeIn delay={1200}>
                <UIScreenshots />
              </ScrollFadeIn>

              <div>
                <h3 className="text-xl mb-4 font-libre">Persona-Specific UI Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-lg font-medium mb-4 font-libre">
                      For Sarah (Professional)
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 font-libre">
                      <li>Quick-glance dashboard metrics</li>
                      <li>One-tap vital recording</li>
                      <li>Meeting-friendly display modes</li>
                      <li>Time-efficient interaction patterns</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-lg font-medium mb-4 font-libre">
                      For Robert (Managing Condition)
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 font-libre">
                      <li>Larger text and touch targets</li>
                      <li>Simplified navigation patterns</li>
                      <li>Clear numerical displays</li>
                      <li>Easy data sharing with healthcare providers</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h4 className="text-lg font-medium mb-4 font-libre">For Emily (Fitness)</h4>
                    <ul className="list-disc pl-5 text-gray-600 font-libre">
                      <li>Detailed performance analytics</li>
                      <li>Workout integration features</li>
                      <li>Advanced graphing options</li>
                      <li>Client tracking capabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Results Section */}
        <ScrollFadeIn delay={1300}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">Results</h2>
            </div>

            <div className="md:col-span-3 space-y-8">
              <div>
                <h3 className="text-4xl font-medium text-gray-800 mb-2 font-libre">84%</h3>
                <p className="text-lg text-gray-600 font-libre">
                  of users successfully recorded health metrics on their first attempt without
                  assistance
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-medium text-gray-800 mb-2 font-libre">92%</h3>
                <p className="text-lg text-gray-600 font-libre">
                  of users reported greater confidence in their health data compared to previous
                  solutions
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-medium text-gray-800 mb-2 font-libre">78%</h3>
                <p className="text-lg text-gray-600 font-libre">
                  increase in regular health monitoring frequency among test participants
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Problem Resolution Section */}
        <ScrollFadeIn delay={1400}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 mt-32">
            <div className="md:col-span-1">
              <h2 className="text-3xl text-[#EA6C3A] font-chewie">Problem Resolution</h2>
            </div>
            <div className="md:col-span-3 space-y-8">
              <div>
                <p className="text-gray-700 font-libre">
                  The ExoArm Health Monitoring Application successfully bridges the gap between
                  consumer wearables and medical devices by providing:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700 font-libre">
                  <li>
                    <strong>Medical-grade accuracy</strong> through integration with the ExoArm
                    sensor
                  </li>
                  <li>
                    <strong>Intuitive interfaces</strong> tailored to different user needs and
                    abilities
                  </li>
                  <li>
                    <strong>Streamlined workflows</strong> that make health monitoring effortless
                  </li>
                  <li>
                    <strong>Consistent design patterns</strong> that build user confidence
                  </li>
                </ul>
                <p className="text-gray-700 mt-6 font-libre">
                  By deeply integrating user personas with interface design, we've created a
                  solution that empowers users regardless of age or technical ability to take
                  control of their health with confidence and ease.
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Next Steps Section */}
        <ScrollFadeIn delay={1500}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-32">
            <div className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl text-[#EA6C3A] font-chewie">Next Steps</h2>
            </div>

            <div className="lg:col-span-3">
              <p className="text-lg text-gray-500 font-libre leading-relaxed">
                Our roadmap focuses on expanding the ExoArm Health Monitoring Application with
                enhanced features and broader accessibility. We're planning integration with
                healthcare providers' systems, developing AI-powered health insights, and creating
                specialized interfaces for additional user groups. We'll continue gathering user
                feedback to refine the experience and ensure we're meeting the evolving needs of our
                diverse user base.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={1600}>
          <div>
            <img
              src="/images/Bionics/uobionics.svg"
              alt="ExoArm Design System"
              className="w-full rounded-3xl"
            />
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
};

export default ExoArmCaseStudy;
