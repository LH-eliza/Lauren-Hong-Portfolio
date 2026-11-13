import React from 'react';
import { motion } from 'framer-motion';
import CaseStudy from '../../../assets/Header';
import CaseStudyShell from '../../CaseStudyShell';
import ScrollProgressBar from '../../ScrollProgressBar';
import ZoomImage from '../../ZoomImage';

const easeIn = [0.42, 0, 1, 1] as const;

const SmartKneeSleeveCaseStudy: React.FC = () => {
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: easeIn }}
    >
      <ScrollProgressBar color="#EA6C3A" />
      <CaseStudyShell accentColor="#EA6C3A">
        <CaseStudy
          title="Making Life More Accessible Through Software-Hardware Interaction"
          subtitle="Case study for an innovative mobile application connecting users with an external exoarm device for accurate health monitoring"
          metadata={{
            period: 'Jan 2025 - April 2025',
            role: 'Lead Developer, UX Researcher',
            team: '2 designers, 3 developers, 1 medical advisor',
            tools: 'Figma, React Native, ExoArm API',
          }}
          githubLink="https://github.com/exoarm-health/mobile-app"
          heroImage="/images/Bionics/bionics.svg"
        />
              <div data-toc-exclude className="bg-gray-100 rounded-3xl p-8 mb-16">
                <h2 className="text-2xl text-gray-800 font-castoro">
                  "How do we make medical-grade health monitoring accessible to everyone?"
                </h2>
              </div>

            {/* Problem Statement */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Problem Statement</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg text-gray-700 font-vietnam leading-relaxed">
                  Current health monitoring solutions force users to choose between convenience
                  (inaccurate consumer wearables) or accuracy (complex medical devices), creating a
                  significant gap in the market for accessible, medical-grade health tracking. This
                  divide particularly affects users across different age groups and technical
                  abilities who need reliable health data for informed decision-making but struggle
                  with existing solutions' usability limitations.
                </p>
              </div>
            </div>

            {/* Project Overview Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Project Overview</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">Background:</h3>
                  <p className="text-gray-700 font-vietnam">
                    The ExoArm Health Monitoring Application connects to an external exoarm device
                    to track vital health metrics including oxygen levels, heart rate, blood
                    pressure, and body temperature with medical-grade accuracy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">Solution:</h3>
                  <p className="text-gray-700 font-vietnam">
                    A user-centered mobile application connected to an external exoarm sensor that
                    provides medical-grade accuracy through an intuitive interface tailored to
                    different user needs and technical abilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">My Role:</h3>
                  <p className="text-gray-700 font-vietnam">
                    I led the UX research and interface design, developed user personas based on
                    interviews, created wireframes and prototypes, and established the design system
                    for a consistent experience across the application.
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Section */}

            <div className="bg-gray-50 rounded-3xl p-8 mb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl text-[#EA6C3A] mb-6 font-castoro">ExoArm Solution</h2>
                  <div className="bg-white rounded-xl shadow-lg p-4">
                    <div className="aspect-video">
                      <ZoomImage
                        src="/images/Bionics/New-Approach.svg"
                        alt="ExoArm intuitive interface"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl text-[#EA6C3A] mb-6 font-castoro">
                    Traditional Medical Interface
                  </h2>
                  <div className="bg-white rounded-xl shadow-lg p-4">
                    <div className="aspect-video">
                      <ZoomImage
                        src="/images/Bionics/Traditional.svg"
                        alt="Traditional complex medical interface"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Personas Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">User Personas</h2>
              </div>
              <div className="md:col-span-3">
                <p className="text-gray-700 mb-8 font-vietnam">
                  Based on our interviews with potential users, we identified three key personas
                  that represent our target audience. These personas guided our design decisions
                  throughout the project.
                </p>
              </div>
            </div>

            {/* Research & Development Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Research & Development</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">01 — Problem Discovery</h3>
                  <p className="text-gray-700 font-vietnam">
                    We interviewed 24 users across different age groups, technical abilities, and
                    health needs to understand the challenges they face with current health
                    monitoring solutions. We found that users universally struggled with balancing
                    ease of use and accuracy in their health tracking devices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-4 font-vietnam">02 — User Research</h3>
                  <p className="text-gray-700 font-vietnam">
                    Our research revealed three distinct user profiles with specific needs:
                    health-conscious professionals seeking unobtrusive monitoring, individuals
                    managing chronic conditions requiring reliable data sharing, and fitness
                    enthusiasts needing precise performance metrics.
                  </p>
                </div>

                <div className="mt-8 mb-8">
                  <h3 className="text-xl mb-4 font-vietnam">Competitive Analysis</h3>
                  <p className="text-gray-700 mb-6 font-vietnam">
                    We analyzed existing health monitoring solutions to understand the competitive
                    landscape and identify opportunities for differentiation.
                  </p>
                  <div className="bg-white rounded-xl shadow-md p-4">
                    <ZoomImage
                      src="/images/Bionics/Competitve-Analysis.svg"
                      alt="Competitive Analysis of Health Monitoring Solutions"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl mb-8 font-vietnam">Research Focus Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        User Interface Accessibility
                      </h4>
                      <p className="text-gray-600 font-vietnam">
                        Investigating how users of different ages and technical abilities interact
                        with health monitoring interfaces, identifying barriers to adoption, and
                        developing design principles for universal accessibility.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        Data Visualization Preferences
                      </h4>
                      <p className="text-gray-600 font-vietnam">
                        Exploring how different user groups prefer to view and interpret health
                        data, including preferences for numerical displays, graphs, color coding,
                        and historical trend visualization.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        Hardware-Software Integration
                      </h4>
                      <p className="text-gray-600 font-vietnam">
                        Evaluating user expectations for the connection between wearable devices and
                        mobile applications, focusing on seamless pairing, consistent data sync, and
                        intuitive recording mechanisms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Findings Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Key Findings</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-2xl mb-6 font-vietnam">Interview Insights:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-vietnam">
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
                  <h3 className="text-2xl mb-6 font-vietnam">Usability Testing Results:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-vietnam">
                    <li>Simple, focused screens increased completion rates by 64%</li>
                    <li>Step-by-step onboarding improved user confidence by 87%</li>
                    <li>Consistent navigation patterns reduced error rates by 73%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Flow Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">User Flow Design</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <p className="text-gray-700 mb-4 font-vietnam">
                    We designed a streamlined user flow that guides users through onboarding and
                    daily health monitoring with minimal friction. The flow accommodates different
                    user needs while maintaining a consistent experience.
                  </p>
                  <p className="text-gray-700 mb-8 font-vietnam">
                    Before development, I created a flowchart to map out key user interactions based
                    on our research findings.
                  </p>

                  <div className="mb-8">
                    <div className="bg-white rounded-xl shadow-md p-4">
                      <ZoomImage
                        src="/images/Bionics/User-Journey.svg"
                        alt="User Journey Map for ExoArm Health Monitoring Application"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>

                  <p className="text-gray-700 font-vietnam">
                    The user journey diagram illustrates how users interact with our ExoArm application
                    - from their initial setup through daily health monitoring. It maps out key
                    interactions including onboarding, vital sign recording, and data analysis,
                    showing how the interface adapts to different user needs.
                  </p>
                </div>
              </div>
            </div>

            {/* UI Design Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">UI Design</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-xl mb-4 font-vietnam">03 — Interface Design</h3>
                  <p className="text-gray-700 mb-6 font-vietnam">
                    Our design solution addresses diverse user needs through:
                  </p>

                  <h3 className="text-xl mb-4 font-vietnam">Key Interface Elements:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 font-vietnam">
                    <li>Step-by-step onboarding with clear progress indicators</li>
                    <li>Dashboard with at-a-glance health metrics</li>
                    <li>Dedicated screens for each vital sign with consistent layout</li>
                    <li>Simple record buttons for quick measurement capture</li>
                    <li>Adaptable visualizations for different user preferences</li>
                    <li>Emergency contact information readily accessible</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-4 font-vietnam">Persona-Specific UI Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        For Sarah (Professional)
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 font-vietnam">
                        <li>Quick-glance dashboard metrics</li>
                        <li>One-tap vital recording</li>
                        <li>Meeting-friendly display modes</li>
                        <li>Time-efficient interaction patterns</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">
                        For Robert (Managing Condition)
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 font-vietnam">
                        <li>Larger text and touch targets</li>
                        <li>Simplified navigation patterns</li>
                        <li>Clear numerical displays</li>
                        <li>Easy data sharing with healthcare providers</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-lg font-medium mb-4 font-vietnam">For Emily (Fitness)</h4>
                      <ul className="list-disc pl-5 text-gray-600 font-vietnam">
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

            {/* Results Section */}

            <div id="solution" className="grid grid-cols-1 md:grid-cols-4 gap-8 scroll-mt-28">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Results</h2>
              </div>

              <div className="md:col-span-3 space-y-8">
                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-vietnam">84%</h3>
                  <p className="text-lg text-gray-600 font-vietnam">
                    of users successfully recorded health metrics on their first attempt without
                    assistance
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-vietnam">92%</h3>
                  <p className="text-lg text-gray-600 font-vietnam">
                    of users reported greater confidence in their health data compared to previous
                    solutions
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-medium text-gray-800 mb-2 font-vietnam">78%</h3>
                  <p className="text-lg text-gray-600 font-vietnam">
                    increase in regular health monitoring frequency among test participants
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Resolution Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 mt-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Problem Resolution</h2>
              </div>
              <div className="md:col-span-3 space-y-8">
                <div>
                  <p className="text-gray-700 font-vietnam">
                    The ExoArm Health Monitoring Application successfully bridges the gap between
                    consumer wearables and medical devices by providing:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700 font-vietnam">
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
                  <p className="text-gray-700 mt-6 font-vietnam">
                    By deeply integrating user personas with interface design, we've created a
                    solution that empowers users regardless of age or technical ability to take
                    control of their health with confidence and ease.
                  </p>
                </div>
              </div>
            </div>

            {/* Low-Fidelity Wireframe Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Low-Fidelity Wireframe</h2>
              </div>
              <div className="md:col-span-3 space-y-6">
                <p className="text-gray-700 font-vietnam">
                  Created a digital basic layout wireframe based on the final informational architecture as a baseline.
                </p>
                <div className="bg-white rounded-xl shadow-md p-4">
                  <ZoomImage
                    src="/images/Bionics/Low-Fidelity Wireframe.svg"
                    alt="Low-Fidelity Wireframe for ExoArm Health Monitoring Application"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Final Design Results Section */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
              <div className="md:col-span-1">
                <h2 className="text-4xl text-[#EA6C3A] font-castoro">Final Design Results</h2>
              </div>
              <div className="md:col-span-3 space-y-6">
                <p className="text-gray-700 font-vietnam">
                  The final ExoArm application design offers a sophisticated, medical-grade experience that bridges the gap between complex health data and user-friendly interaction. By moving to a persona-driven interface, we made the transition from hardware setup to daily monitoring easier to navigate and far less intimidating for users of all technical abilities.
                </p>
                <p className="text-gray-700 font-vietnam">
                  The visuals feel clinical but welcoming, utilizing high-contrast typography and thoughtful color-coding to help users instantly interpret their vitals. The platform is fully responsive and optimized for React Native, ensuring that whether a user is syncing their exoarm device on a smartphone or reviewing trends on a tablet, the experience remains smooth, reliable, and intuitive.
                </p>
                <div className="bg-white rounded-xl shadow-md p-4">
                  <ZoomImage
                    src="/images/Bionics/Final Version.svg"
                    alt="Final Design Version of ExoArm Health Monitoring Application"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Next Steps Section */}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-32">
              <div className="lg:col-span-1">
                <h2 className="text-2xl sm:text-4xl text-[#EA6C3A] font-castoro">Next Steps</h2>
              </div>

              <div className="lg:col-span-3">
                <p className="text-lg text-gray-500 font-vietnam leading-relaxed">
                  Our roadmap focuses on expanding the ExoArm Health Monitoring Application with
                  enhanced features and broader accessibility. We're planning integration with
                  healthcare providers' systems, developing AI-powered health insights, and creating
                  specialized interfaces for additional user groups. We'll continue gathering user
                  feedback to refine the experience and ensure we're meeting the evolving needs of
                  our diverse user base.
                </p>
              </div>
            </div>
      </CaseStudyShell>
    </motion.div>
  );
};

export default SmartKneeSleeveCaseStudy;
