import React, { useEffect } from 'react';
import mermaid from 'mermaid';
import CaseStudy from '../../../assets/Header';
import Flowchart from '../../../assets/Flowchart';
import Sketches from './Sketches';
import Wireframe from './Wireframe';
import CaseStudyShell from '../../CaseStudyShell';
import ScrollProgressBar from '../../ScrollProgressBar';
import ZoomImage from '../../ZoomImage';

const SolaceStudy = () => {
  useEffect(() => {
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
    <div className="relative w-full">
      <ScrollProgressBar color="#EA6C3A" />
      <CaseStudyShell accentColor="#EA6C3A">
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
              <div data-toc-exclude className="bg-gray-100 rounded-3xl p-8 mb-16">
                <h2 className="text-2xl text-gray-800 font-vietnam">
                  "How do we make understanding documentation and onboarding easier?"
                </h2>
              </div>

            {/* Project Overview Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-castoro">Project Overview</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">Background:</h3>
                  <p className="text-gray-700 font-vietnam">
                    Solace PubSub+ offers comprehensive technical documentation, serving a diverse
                    user base from students to enterprise developers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">Problem:</h3>
                  <p className="text-gray-700 font-vietnam">
                    Users struggle to quickly find and understand specific technical information
                    within the extensive documentation, creating friction in the learning and
                    implementation process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">Solution:</h3>
                  <p className="text-gray-700 font-vietnam">
                    An AI-powered documentation chatbot that provides instant, conversational access
                    to Solace's technical knowledge base, making information discovery intuitive and
                    efficient.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">My Role:</h3>
                  <p className="text-gray-700 font-vietnam">
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
                    <ZoomImage
                      src="/images/Solace/New.png"
                      alt="Solace redesigned interface"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-vietnam">Solace Documentation with Chatbot</p>
                </div>

                <div>
                  <div className="mb-4">
                    <ZoomImage
                      src="/images/Solace/Legacy.png"
                      alt="Solace legacy interface"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center text-gray-700 font-vietnam">Current Solace Documentation</p>
                </div>
              </div>
            </div>

            {/* Results Section */}

            <div id="solution" className="grid grid-cols-1 md:grid-cols-4 gap-8 scroll-mt-28">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-castoro">Results</h2>
              </div>

              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-vietnam">84%</h3>
                  <p className="text-lg text-gray-600 font-vietnam">
                    of users found answers faster using the chatbot compared to traditional
                    documentation navigation
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-vietnam">92%</h3>
                  <p className="text-lg text-gray-600 font-vietnam">
                    of users said they would use the chatbot as their primary method for accessing
                    Solace documentation
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-vietnam">98%</h3>
                  <p className="text-lg text-gray-600 font-vietnam">
                    of users reported feeling more confident in implementing Solace solutions with
                    the chatbot's assistance
                  </p>
                </div>
              </div>
            </div>

            {/* Research & Development Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32 mt-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-castoro">Research & Development</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">01 — Brainstorm</h3>
                  <p className="text-gray-700 font-vietnam">
                    Given the task to "create a project with AI that improves daily workflow" our
                    team focused on transforming how users interact with Solace PubSub+
                    documentation. The challenge: How might we help users find and understand
                    technical information more efficiently while maintaining the depth of content?
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-4 font-vietnam">02 — Research</h3>
                  <p className="text-gray-700 font-vietnam">
                    We conducted 7 user interviews with Solace users across different roles
                    (developers, students, system architects) to identify pain points and insights
                    for improving documentation accessibility. I also researched chatbot
                    implementation in technical documentation and its impact on user engagement.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl mb-8 font-vietnam">Areas of Research</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        Understanding Technical Documentation Needs
                      </h4>
                      <p className="text-gray-600 font-vietnam">
                        To understand how different users (developers, students, architects)
                        navigate technical documentation and what challenges they face in finding
                        specific information.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        Analyzing User Learning Patterns
                      </h4>
                      <p className="text-gray-600 font-vietnam">
                        To understand how users prefer to learn technical concepts, their preferred
                        methods of consuming documentation, and what makes information more
                        digestible for them.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        Exploring Current Documentation Tools
                      </h4>
                      <p className="text-gray-600 font-vietnam">
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
                <h2 className="text-3xl text-[#EA6C3A] font-castoro">Findings</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-2xl mb-6 font-vietnam">Interview Findings:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-vietnam">
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
                  <h3 className="text-2xl mb-6 font-vietnam">Research Findings:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-vietnam">
                    <li>Technical documentation chatbots can reduce search time by up to 60%</li>
                    <li>Interactive documentation increases user engagement by 40-50%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bringing Ideas to Life Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-3xl text-[#EA6C3A] font-castoro">Bringing our Ideas to Life</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <p className="text-gray-700 mb-4 font-vietnam">
                    We built the Solace Documentation Chatbot with a focus on intuitive interaction
                    and quick access to information.
                  </p>
                  <p className="text-gray-700 mb-8 font-vietnam">
                    Before we started, I focused on creating a flow chart to express user's
                    interactions with insights and conclusions gathered from our findings.
                  </p>

                  <Flowchart />

                  <p className="text-gray-700 font-vietnam">
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
                <h2 className="text-3xl text-[#EA6C3A] font-castoro">Design & Features</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">03 — Design Process</h3>
                  <p className="text-gray-700 mb-6 font-vietnam">
                    Our solution: An AI-powered documentation chatbot that provides conversational
                    access to technical information.
                  </p>

                  <h3 className="text-xl mb-4 font-vietnam">Key Features:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-vietnam">
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
              <div className="relative w-full rounded-xl bg-gray-100 p-3 sm:p-8">
                <div className="relative h-[70vh] min-h-[440px] w-full lg:h-0 lg:min-h-0 lg:pb-[56.25%]">
                  <iframe
                    className="absolute inset-0 h-full w-full rounded-lg"
                    src="https://embed.figma.com/proto/7x3EmI7SUsjNjCavqwrURh/Solace-Hackathon?page-id=0%3A1&node-id=88-696&starting-point-node-id=12%3A8&embed-host=share"
                    allowFullScreen
                    title="Solace documentation chatbot prototype"
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  />
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">Prototype</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-32">
              <div className="lg:col-span-1">
                <h2 className="text-2xl sm:text-3xl text-[#EA6C3A] font-castoro">Next Steps</h2>
              </div>

              <div className="lg:col-span-3">
                <p className="text-lg text-gray-500 font-vietnam leading-relaxed">
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
              <ZoomImage
                src="/images/Solace/SolaceStyling.svg"
                alt="Solace Documentation"
                className="rounded-3xl"
              />
            </div>
      </CaseStudyShell>
    </div>
  );
};

export default SolaceStudy;
