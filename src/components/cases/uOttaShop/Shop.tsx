import React from 'react';
import CaseStudy from '../../../assets/Header';
import QuoteBlock from '../../../assets/Quote';
import StepTitle from '../../../assets/StepTitle';
import GifDisplay from '../../../assets/GifDisplay';
import TableOfContents from '../../TableOfContents';
import ScrollProgressBar from '../../ScrollProgressBar';

const UOttaShopSite = () => {
  return (
    <div>
      <CaseStudy
        title="Enhancing the Sponsorship Experience"
        subtitle="Creating an interactive portal for sponsors of Canada's 2nd largest hackathon"
        metadata={{
          period: 'March - April 2024',
          role: 'Co-Director, UX Designer',
          team: '3 Directors, 2 Developers',
          tools: 'Figma, React, MongoDB, Express, Node.js, Heroku',
        }}
        githubLink="https://github.com/uOttaHack/uOttaShop"
        projectLink="https://shop.uottahack.ca/"
        heroImage="/images/uottashop/uOttaShop.svg"
      />
      <div className="relative">
        <ScrollProgressBar color="#1A4FAC" />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex gap-8">
            <TableOfContents />
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Problem Statement</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      Sponsors who support uOttaHack rely on emails for updates, leading to
                      potential delays and a less engaging experience. Our goal is to enhance
                      communication by introducing more immediate and interactive methods, improving
                      sponsor engagement and satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Context</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      uOttaHack is a student organization that supports students all around Canada
                      in sparking their creative spirit, connecting them with company resources, and
                      exploring their limits. Sponsors are the main source of financial support to
                      host the event. In previous years, the way to track sponsors requests and
                      provide upcoming information was solely via email, which caused issues in
                      tracking information.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      As the new co-director of the hackathon, I led redesigning of the sponsor
                      experience. Over 3 months, I worked alongside the other co-directors and the
                      development team to develop a new experience, with guidance from previous
                      sponsors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Result</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre mb-6">
                      Our solution addressed key pain points identified in the research phase. Here's how the uOttaShop portal transformed the sponsorship experience:
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 mb-6">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-chewie text-[#1A4FAC]">The Problem (Legacy Email)</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-chewie text-[#1A4FAC]">The UX Solution (uOttaShop)</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-chewie text-[#1A4FAC]">Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre">Hasty/Manual Scheduling</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre">Automated Dashboard Scheduling</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre font-semibold">45% prefer the new speed.</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre">Information Silos</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre">Centralized Information Board</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre font-semibold">70% feel more comfortable.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre">Tracking Issues</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre">Portal + Legacy Integration</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 font-libre font-semibold">100% utility across platforms.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      Within one month, we designed an interactive design showcasing the uOttaShop
                      to the development team and other directors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-32">
                <img
                  src="/images/uottashop/Context.svg"
                  alt="Current state diagram"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Current State</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      This is the current state of what sponsors receive, a simple email and a very
                      long conversation thread between our sponsorship team and the sponsors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-32">
                <img
                  src="/images/uottashop/Current.svg"
                  alt="Research findings"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Research</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      I surveyed 42 people who are part of various companies and organizations
                      across Ontario, Canada. I conducted a survey with uOttaHack Sponsor
                      representatives and the Sponsorship team to hear their thoughts and this is
                      what they said:
                    </p>
                  </div>
                  <div>
                    <QuoteBlock text="Hasty scheduling process. Required frequent updates from the team." />
                  </div>
                  <div>
                    <QuoteBlock text="Unknown information until a few weeks before the event." />
                  </div>
                  <div>
                    <QuoteBlock text="Information should have been prepared after the confirmation of our sponsorship." />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">User Journey</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      Based on our research findings, I mapped out the user journey to visualize how
                      sponsors interact with the sponsorship process, from initial contact through
                      event participation. This journey map helped identify pain points and
                      opportunities for improvement throughout the sponsorship experience.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-4">
                    <img
                      src="/images/uottashop/UserJourney_UOS.svg"
                      alt="User Journey Map for uOttaShop Sponsorship Experience"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Goals</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <h3 className="text-xl mb-4 font-libre">
                      How might we enhance the UX of the sponsorship experience?
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Goal 1: </span>
                      Improve the communication and time efficiency of the sponsorship experience.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Goal 2: </span>
                      Make it easier for sponsor representatives to connect and be able to regulate
                      their options.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Goal 3: </span>
                      Update/Optimize the experience, feel, and look in order to create a
                      professional atmosphere.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-32">
                <img
                  src="/images/uottashop/Goals.svg"
                  alt="Sponsorship communication options"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-2xl md:text-4xl text-[#1A4FAC] font-chewie break-words">
                    Ideation for Sponsorship Communication
                  </h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      My first goal of improving communication and time efficiency, is that we came
                      up with these three options for how we can display the users needs:
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Option 1: Dashboard. </span>
                      Option 1 laid out all the information on one screen, which was different than
                      our previous methods. It allowed for the user to have control of what they
                      were involved in.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Option 2: Stripe. </span>
                      Option 2 was a Stripe only portal, allowing for communication for purchase
                      which allowed a single way transaction ensuring safety of their purchase.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Option 3: Quick Response Time. </span>
                      Option 3 offered no independence; however, it offers a traditional alternative
                      for people who are not looking for a long term communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-32">
                <img
                  src="/images/uottashop/Goal1.svg"
                  alt="Sponsorship regulation options"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-2xl md:text-4xl text-[#1A4FAC] font-chewie break-words">
                    Ideation for Sponsorship Regulation
                  </h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      The second goal was to make it easier for sponsorship representatives to
                      connect and be able to regulate their options. For this, we ideated the types
                      of ways we could present the information rather than navigation.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      From user and research, people mentioned that they would like to know about
                      their deadlines, where all the information is located, for their coworkers to
                      be informed, and simply just more information in general about the
                      organization.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Idea 1: Widgets</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Idea 2: Information Board</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Idea 3: Project Management Flow</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-32">
                <img
                  src="/images/uottashop/Goal2.svg"
                  alt="Final options comparison"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Options</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      After deliberation, eliminating Option 3 seemed to be the best option, as we
                      found that it was harder to be able to track various email threads amongst
                      sponsors as well as organizers. Since there was human error revolved in this
                      process, it would talk more time to regulate various companies emails. This
                      option was the least scalable option amongst all the other options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-32">
                <img
                  src="/images/uottashop/Goal3.svg"
                  alt="User feedback review"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Review</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      When presented with the options, 100% of participants said they would rather
                      Option 1 which housed more personalization and information.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">When asked why, they said this:</p>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 text-gray-700 font-libre space-y-2">
                      <li>
                        Option 2 offers an isolating option with no variety, whereas Option 1 is
                        very autonomous.
                      </li>
                      <li>
                        Option 3 doesn't offer a broadened view, just scheduling which isn't always
                        the issue.
                      </li>
                      <li>
                        Option 1 allows for no requirements to discuss to organizers about simple
                        information. It allows for a very independent view.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4: Stakeholder Feedback & Iteration */}

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Stakeholder Feedback & Iteration</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">Bridging the Gap Between Director Vision and Developer Feasibility</h3>
                    <p className="text-gray-700 font-libre">
                      As a co-director, I held weekly "sync-and-critique" sessions with the development team and other directors to ensure our three ideation options were realistic.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">The Pivot on Option 3:</h3>
                    <p className="text-gray-700 font-libre">
                      While "Quick Response Time" felt traditional, we collectively decided to eliminate it. Our developers noted that it was the least scalable and most prone to "human error," requiring too many manual hours to regulate.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">The Dashboard Refinement:</h3>
                    <p className="text-gray-700 font-libre">
                      Based on director feedback, we realized the dashboard needed to be more than just a data view; it needed to be autonomous. We added "Widgets" (Idea 1) specifically because our research showed sponsors wanted their coworkers to stay informed without needing to share login credentials.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5: Usability Testing Process */}

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Usability Testing Process</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">Validating the uOttaShop Experience</h3>
                    <p className="text-gray-700 font-libre">
                      We didn't just look at the results; we looked at the behavior. I conducted moderated usability tests with 42 representatives across Ontario to validate the "Professional Atmosphere" goal.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">The Task:</h3>
                    <p className="text-gray-700 font-libre italic mb-4">
                      "Find your booth assignment and upload your company logo for the event program."
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">The Finding:</h3>
                    <p className="text-gray-700 font-libre">
                      100% of users successfully used the uOttaShop portal alongside legacy methods, proving that the portal didn't replace the relationship—it enhanced the logistics.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">The "Comfort" Metric:</h3>
                    <p className="text-gray-700 font-libre">
                      The 70% preference for the website over email was driven by the Information Board (Idea 2), which reduced the "unknown info" fear that sponsors reported in our early surveys.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6: Handoff & Monitoring */}

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Handoff & Monitoring</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">Ensuring a Seamless Build for the Hackathon Season</h3>
                    <p className="text-gray-700 font-libre">
                      A design is only as good as its implementation. Within one month, I finalized the interactive prototype for the uOttaShop Portal and led the handoff to the engineering team.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">Documentation:</h3>
                    <p className="text-gray-700 font-libre">
                      Provided a full design system in Figma, including "Empty States" (what the dashboard looks like before a sponsor signs up) and "Success States."
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">KPI Tracking:</h3>
                    <p className="text-gray-700 font-libre">
                      We are monitoring Time-to-Completion for sponsor requests. Our goal is to reduce the "Sponsorship Team" manual intervention by 50% during the peak hackathon month.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre font-semibold">Iterative Loops:</h3>
                    <p className="text-gray-700 font-libre">
                      As we move into the next hackathon season, we will gather live feedback to refine the "Project Management Flow" (Idea 3) for more complex sponsor tiers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Final Design</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      In terms of making it easier for sponsors to connect with organizers we
                      created a prototype for what we might be able to see when the user logs into
                      the dashboard. Comparing to the other ideas from Goal 2, Option 1 included
                      more personalization content from the ideation stage, including all user
                      preferences and customizable options for the users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-32">
                <img
                  src="/images/uottashop/wdut.svg"
                  alt="Final dashboard design"
                  className="w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Reflection</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      By improving the sponsorship experience, it makes it easier for organizers and
                      sponsorship representatives to connect with each other, and updating the
                      process, we will have an enhanced user experience. This project allowed us to
                      address feedback from sponsors directly and create a solution that benefits
                      both the organization team and our sponsors.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      We started off with an open ended problem. We can't work with broad concepts.
                      By synthesizing feedback and research, it told us what we needed to improve
                      and enhance the sponsorship process. The result is a more streamlined,
                      professional platform that saves time and improves communication for all
                      parties involved.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Next Steps...</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      The next steps will be to implement the dashboard with the development team
                      and test it with real sponsors for the upcoming hackathon season. We plan to
                      gather feedback throughout the implementation process and make iterative
                      improvements to ensure the platform meets all sponsor needs. Future
                      enhancements may include deeper analytics, more customizable widgets, and
                      integration with other uOttaHack systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Try it out!</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <a
                    href="https://shop.uottahack.ca/"
                    className="text-2xl text-gray-700 font-libre underline"
                  >
                    Visit uOttaShop Portal →
                  </a>
                </div>
              </div>

              <div className="mb-12">
                <img
                  src="/images/uottashop/Primary.svg"
                  alt="uOttaShop Primary Prototype"
                  className="w-full h-auto"
                />
              </div>
              <div className="mb-12">
                <img
                  src="/images/uottashop/Secondary.svg"
                  alt="uOttaShop Secondary Prototype"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UOttaShopSite;
