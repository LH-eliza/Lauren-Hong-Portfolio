import React from 'react';
import CaseStudy from '../../../assets/Header';

import QuoteBlock from '../../../assets/Quote';
import StepTitle from '../../../assets/StepTitle';
import GifDisplay from '../../../assets/GifDisplay';
import TableOfContents from '../../TableOfContents';
import ScrollProgressBar from '../../ScrollProgressBar';

const AppSite = () => {
  return (
    <div>
      <CaseStudy
        title="Refreshing the Hackathon Application Experience"
        subtitle="Creating a unique design experience for students to apply to Canada's 2nd largest hackathon"
        metadata={{
          period: 'Sept 2024 - Jan 2025',
          role: 'Product Designer, Illustrator',
          team: '1 Designer, 3 Developers',
          tools: 'Figma, Adobe Illustrator, Angluar, MongoDB, Express, Node.js, Huroku',
        }}
        githubLink="https://github.com/uOttaHack/ApplyPage-uOttaHack-2025"
        projectLink="https://apply.uottahack.ca/"
        heroImage="/images/uottapp_tn.svg"
      />
      <div className="relative">
        <ScrollProgressBar color="#1A4FAC" />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex gap-8">
            <TableOfContents />
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Context</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <h3 className="text-xl mb-4 font-libre">What is uOttaHack?</h3>
                    <p className="text-gray-700 font-libre">
                      uOttaHack is a student run hackathon that allows students of all backgrounds
                      and experience to turn their ideas into a reality.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      In order for the event to run, students have to apply to get in. uOttaHack has
                      been trying to make their hacker application more interesting and not just a
                      form. For 2024, I was tasked to work as the illustrator and designer to bring
                      make the hacker experience more interesting.
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
                    <p className="text-gray-700 font-libre">
                      Within a couple months, I researched, designed, and interviewed an interactive
                      application portal. This was released and over 2700+ students from across
                      Canada would use the portal to apply to Ottawa’s largest hackathon.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <img
                  src="/images/Application/ApplicantsNeeds.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Primary User</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      The primary user of this project, the applicant are high school, undergrad,
                      and master’s students in tech/interested in that field. To see a broader
                      spectrum of the applicant profile we focused on the primary feedback from the
                      previous iterations of the hackathon and also from our point-of views as
                      current students.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32 mt-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Research & Development</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <h3 className="text-xl mb-4 font-libre">01 — Brainstorm</h3>
                    <p className="text-gray-700 font-libre">
                      After 6 annual hackathons, there has been various editions of the application
                      portal. While they got the job done, there was various feedback in terms of
                      feeling very repetitive and non-memorable. The challenge: How to make an
                      interactive and memorable way to apply to a hackathon?
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-4 font-libre">02 — Research</h3>
                    <p className="text-gray-700 font-libre">
                      After uOttaHack 6 - the 2024 edition of the hackathon, our team sent out
                      surveys to conduct research of how our hackathon can improve from start to
                      end. From that survey we received 326 responses from various students
                      (undergraduate, graduate, PHD, high school...etc). The most common feedback
                      received was receiving confirmation of their submissions, process of their
                      applications, and a more interactive experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <img
                  src="/images/Application/Characteristics.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">User’s Characteristics</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <QuoteBlock text="“Within the process, there were three key characteristics that were vital.”" />
                    <p className="text-gray-700 font-libre">
                      First, students are busy- they are multitaskers and tend to have heavy
                      schedules. A lot of students don’t have the time nor the interest to fill and
                      complete a lengthy application. Since our main demographic is engineering and
                      computer science there is a scarcity of time for students within these
                      programs.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      Second, students who apply are typically interested in the creative aspect of
                      growing and discovering within the tech space, They want to collaborate, and
                      have the end-goal of creating by participating in the event.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      Finally, students are interested in engaging. This application was designed
                      with the idea of branching out of the typical resume format. Students apply to
                      tens to hundreds of various applications. Thus, allowing people to remain
                      engaged and bringing a sense of interest to the student’s workday was vital.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-24">
                <img src="/images/Application/Objectives.svg" alt="" className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Objectives Translated</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      Utilizing the need from the characteristics, it's valuable due to helping us
                      define objectives of how we can design for user success
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold"> Quick and Easy-to-fill </span> - Applications
                      should be quick and easily accessible by all applicants. It should take an
                      appropriate amount of time to complete.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Informed</span> - Applicants should be able to
                      make decisions quickly and also recover from errors swiftly
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      <span className="font-bold">Engagement</span> - Applicants shouldn't be
                      leaving any negative emotions while filling out their application process.
                      Since many applicants leave their applications to the last minute or even wait
                      till the extended applications release- providing a feeling of dread. This
                      should create an environment that is fun so user's make it feel like it was a
                      fun activity opposed than an application and think of the process as a larger
                      priority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Application</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      There were 4 fundamental sections to the application. Each part has its
                      functions for various reasons. Below, I’ve elaborated each section and its
                      relations with our project objectives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <img src="/images/Application/Flow.svg" alt="" className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <StepTitle step={1} title="Account Creation" />
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      The applicant has to create an account through uOttaHack before they proceed.
                      This allows them to save all their information/work, allowing them to move
                      forward to be able to store general and personal data. This is a vital part of
                      the application since it allows the applicant to save their progress and come
                      back to it later. This is also where the user can select their character.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <img src="/images/Application/CreateAccount.svg" alt="" className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <StepTitle step={2} title="Short Answer" />
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      Applicants then proceeds by answering short questions which include their full
                      name, level of study, pronouns, program, school, and more. As the fields are
                      filled, the left of the page is updated to tailor to fit their unique
                      profiles. In short, the users could just fill out their regular application;
                      however, this inclusion of graphics and selection allows the experience to be
                      unique, fun, and cute.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <GifDisplay src="/images/Application/Step2.gif" alt="Application demo" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <StepTitle step={3} title="Long Answer" />
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      The most vital part of the application lies in the long answer portion. We
                      created it so it benefits the user through easy-to-fill since it’s where most
                      students will focus the majority of their time in this portion. The user can
                      see the word count and the max word count they can use.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      Within this section, there is not a usage of visual illustration since it may
                      distract an applicant from their application. The focus was mainly on the word
                      count requirements as well as different input states. This was to ensure that
                      the user doesn’t feel overwhelmed by the application.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <img
                  src="/images/Application/LongAnswer.svg"
                  alt="Application demo"
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <StepTitle step={4} title="Review" />
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      The final step of the application is the review page. This is where the
                      applicant can review their application and make any changes if needed. The
                      applicant can also see the word count for each section and the total word
                      count for the application.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      This is also where the applicant can see their character and the character’s
                      description. This is a fun way to end the application and makes the user feel
                      accomplished.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <GifDisplay src="/images/Application/Step4.gif" alt="Application demo" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">Confirmation</h2>
                </div>
                <div className="md:col-span-3 space-y-8">
                  <div>
                    <p className="text-gray-700 font-libre">
                      And that's all! The confirmation step of the application is the confirmation
                      page. Once the application is submitted the applicant can see a confirmation
                      message. This is where the student can view their status and recieve a
                      conformation email.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-32">
                <img
                  src="/images/Application/Step5.svg"
                  alt="Application demo"
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
                      The design of the application was just one portion of the project. The
                      development team had to work on the backend and frontend of the application.
                      The application was built using Angular, MongoDB, Express, and Node.js. The
                      application was deployed on Heroku. The application was built to be responsive
                      and accessible to all users.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-libre">
                      After countless nights alone designing, studying student interests, and diving
                      into discord messages, my app was finally ready. Through design reviews, dev
                      reviews, and last minute syncs, I poured myself into every prototype and
                      design iteration. The feedback I got made all those solitary hours of scrutiny
                      worth it. Oftentimes I get so sucked into the details of my work that I forget
                      the impact it can have on the people I'm designing for. This project brought
                      to light how important it is to design for passion, not just perfection. It's
                      moments like these that remind me why I continue to do what I'm doing.
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
                      The application was released in December 2024 and over 2700+ students applied
                      to uOttaHack. The feedback was positive and the application was a success. The
                      next steps would be to continue to improve the application and make it more
                      accessible to all students. The next steps are incorporating more
                      accessibility features and making the application app more interactive and
                      connected to other services our team offers such as profile cards, raffles,
                      queues for food, and more in-person event involvements.
                    </p>
                  </div>
                </div>
                <div className="text-4xl text-[#1A4FAC] font-chewie">Try it out yourself!</div>
                <div className="md:col-span-3 space-y-8">
                  <a
                    href="https://apply.uottahack.ca/"
                    className="text-2xl text-gray-700 font-libre underline"
                  >
                    Apply to uOttaHack 2025 →
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="md:col-span-1">
                  <h2 className="text-4xl text-[#1A4FAC] font-chewie">View Style Guide</h2>
                  <p className="mt-2 font-libre text-[#7A7A7A]">Illustrated by Lauren Hong</p>
                </div>
              </div>
              <div className="mb-32">
                <img
                  src="/images/Application/p.svg"
                  alt="Style Guide"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSite;
