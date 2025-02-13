import React from 'react';
import CaseStudy from '../../../assets/Header';
import FeatureCard from './FeatureCards';
import QuoteBlock from '../../../assets/Quote';
import StepTitle from '../../../assets/StepTitle';
import { div } from 'motion/react-client';

const AppSite = () => {
  return (
    <div>
      <CaseStudy
        title="Refreshing the Hackathon Application Experience"
        subtitle="Creating a unique design experience for students to apply to Canada's 2nd largest hackathon"
        metadata={{
          period: 'Sept 2024 - Jan 2025',
          role: 'UI Designer, Illustrator',
          team: '1 Designer, 3 Developers',
          tools: 'Figma, Adobe Illustrator, Angluar, MongoDB, Express, Node.js, Huroku',
        }}
        githubLink="https://github.com/uOttaHack/ApplyPage-uOttaHack-2025"
        heroImage="/images/uottapp_tn.svg"
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          <div className="md:col-span-1">
            <h2 className="text-4xl text-[#1A4FAC] font-chewie">Context</h2>
          </div>
          <div className="md:col-span-3 space-y-8">
            <div>
              <h3 className="text-xl mb-4 font-libre">What is uOttaHack?</h3>
              <p className="text-gray-700 font-libre">
                uOttaHack is a student run hackathon that allows students of all backgrounds and
                experience to turn their ideas into a reality.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-libre">
                In order for the event to run, students have to apply to get in. uOttaHack has been
                trying to make their hacker application more interesting and not just a form. For
                2024, I was tasked to work as the illustrator and designer to bring make the hacker
                experience more interesting.
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
                application portal. This was released and over 2700+ students from across Canada
                would use the portal to apply to Ottawa’s largest hackathon.
              </p>
            </div>
          </div>
        </div>
        <FeatureCard />
        <div className="mb-32">
          <img src="/images/ApplicantsNeeds.svg" alt="" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          <div className="md:col-span-1">
            <h2 className="text-4xl text-[#1A4FAC] font-chewie">Primary User</h2>
          </div>
          <div className="md:col-span-3 space-y-8">
            <div>
              <p className="text-gray-700 font-libre">
                The primary user of this project, the applicant are high school, undergrad, and
                master’s students in tech/interested in that field. To see a broader spectrum of the
                applicant profile we focused on the primary feedback from the previous iterations of
                the hackathon and also from our point-of views as current students.
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
              <h3 className="text-xl mb-4 font-libre">01 — Brainstorm 🎯</h3>
              <p className="text-gray-700 font-libre">
                Given the task to "create a project with AI that improves daily workflow" our team
                focused on transforming how users interact with Solace PubSub+ documentation. The
                challenge: How might we help users find and understand technical information more
                efficiently while maintaining the depth of content?
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-libre">02 — Research 🔎</h3>
              <p className="text-gray-700 font-libre">
                We conducted 7 user interviews with Solace users across different roles (developers,
                students, system architects) to identify pain points and insights for improving
                documentation accessibility. I also researched chatbot implementation in technical
                documentation and its impact on user engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-32">
          <img src="/images/Characteristics.svg" alt="" className="w-full h-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl text-[#1A4FAC] font-chewie">User’s Characteristics</h2>
          </div>
          <div className="md:col-span-3 space-y-8">
            <div>
              <QuoteBlock text="“Within the process, there were three key characteristics that were vital.”" />
              <p className="text-gray-700 font-libre">
                First, students are busy- they are multitaskers and tend to have heavy schedules. A
                lot of students don’t have the time nor the interest to fill and complete a lengthy
                application. Since our main demographic is engineering and computer science there is
                a scarcity of time for students within these programs.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-libre">
                Second, students who apply are typically interested in the creative aspect of
                growing and discovering within the tech space, They want to collaborate, and have
                the end-goal of creating by participating in the event.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-libre">
                Finally, students are interested in engaging. This application was designed with the
                idea of branching out of the typical resume format. Students apply to tens to
                hundreds of various applications. Thus, allowing people to remain engaged and
                bringing a sense of interest to the student’s workday was vital.
              </p>
            </div>
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
              Utilizing the need from the characteristics, it’s valuable due to helping us define
              objectives of how we can design for user success
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-libre">
              <span className="font-bold"> Quick and Easy-to-fill </span> - Applications should be
              quick and easily accessible by all applicants. It should take an appropriate amount of
              time to complete.
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-libre">
              <span className="font-bold">Informed</span> - Applicants should be able to make
              decisions quickly and also recover from errors swiftly
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-libre">
              <span className="font-bold">Engagement</span> - Applicants shouldn’t be leaving any
              negative emotions while filling out their application process. Since many applicants
              leave their applications to the last minute or even wait till the extended
              applications release- providing a feeling of dread. This should create an environment
              that is fun so user’s make it feel like it was a fun activity opposed than an
              application and think of the process as a larger priority.
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
              There were 4 fundamental sections to the application. Each part has its functions for
              various reasons. Below, I’ve elaborated each section and its relations with our
              project objectives.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-32">
        <img src="/images/Flow.svg" alt="" className="w-full h-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
        <div className="md:col-span-1">
          <StepTitle step={1} title="Account Creation" />
        </div>
        <div className="md:col-span-3 space-y-8">
          <div>
            <p className="text-gray-700 font-libre">
              The applicant has to create an account through uOttaHack before they proceed. This
              allows them to save all their information/work, allowing them to move forward to be
              able to store general and personal data. This is a vital part of the application since
              it allows the applicant to save their progress and come back to it later. This is also
              where the user can select their character.
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
              Applicants then proceeds by answering short questions which include their full name,
              level of study, pronouns, program, school, and more. As the fields are filled, the
              left of the page is updated to tailor to fit their unique profiles. In short, the
              users could just fill out their regular application; however, this inclusion of
              graphics and selection allows the experience to be unique, fun, and cute.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-32">
        <img src="/images/Flow.svg" alt="" className="w-full h-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
        <div className="md:col-span-1">
          <StepTitle step={3} title="Long Answer" />
        </div>
        <div className="md:col-span-3 space-y-8">
          <div>
            <p className="text-gray-700 font-libre">
              The most vital part of the application lies in the long answer portion. We created it
              so it benefits the user through easy-to-fill since it’s where most students will focus
              the majority of their time in this portion. The user can see the word count and the
              max word count they can use.
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-libre">
              Within this section, there is not a usage of visual illustration since it may distract
              an applicant from their application. The focus was mainly on the word count
              requirements as well as different input states. This was to ensure that the user
              doesn’t feel overwhelmed by the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSite;
