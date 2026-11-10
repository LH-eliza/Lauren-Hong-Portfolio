import React from 'react';
import PolaroidWithFish from './PolaroidWithFish';

interface ExperienceItem {
  org: string;
  dates: string;
  role: string;
  wide?: boolean;
}

const technicalExperience: ExperienceItem[] = [
  { org: 'Solace', dates: 'May 2026 - Aug 2026', role: 'Junior UX Designer Intern' },
  {
    org: 'Giatec Scientific Inc.',
    dates: 'May 2025 - Aug 2025',
    role: 'Software Developer in Test Intern',
  },
  { org: 'Motorola Solutions', dates: 'Sept 2024 - Dec 2024', role: 'DevOps Engineer Intern' },
  { org: 'Solace', dates: 'Jan 2024 - April 2024', role: 'Backend Developer Intern' },
  {
    org: 'Shared Services Canada',
    dates: 'May 2023 - Aug 2023',
    role: 'Project Manager Intern',
  },
  { org: 'Mozilla', dates: 'Jan 2021 - April 2022', role: 'IT User Support Volunteer' },
];

const leadership: ExperienceItem[] = [
  { org: 'Asian Passion Project', dates: '2021-2022', role: 'TOEFL Tutor' },
  { org: 'Felt Initiative', dates: '2022-2023', role: 'English Second Language Tutor' },
  {
    org: 'uOttaHack',
    dates: '2022-2026',
    role: 'Marketing Coordinator (2022-2023), Marketing & Design Lead (2023-2024), Co-Director (2024-2025), Senior Advisor & Event Coordinator (2025-2026)',
    wide: true,
  },
  { org: 'uOBionics', dates: '2024-Present', role: 'UI/UX Designer, Software Team Lead' },
  {
    org: 'Women in Science and Engineering (WISE)',
    dates: '2022-Present',
    role: 'Outreach Coordinator (2022-2023), VP Development & Design (2025-Present)',
  },
];

const ExperienceRow = ({ item, isLast }: { item: ExperienceItem; isLast: boolean }) => (
  <div
    className={`flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-5 ${
      isLast ? '' : 'border-b border-[rgb(229,229,229)]'
    }`}
  >
    <div className="flex-1">
      <h4 className="font-vietnam font-medium text-black mb-1">{item.org}</h4>
      <p className="text-sm text-black/50 font-vietnam">{item.dates}</p>
    </div>
    <div className={`sm:text-right ${item.wide ? 'sm:w-1/2' : 'sm:w-1/3'}`}>
      <p className="text-black/70 font-vietnam text-sm sm:text-base">{item.role}</p>
    </div>
  </div>
);

const AboutMe: React.FC = () => {
  return (
    <div className="w-full">
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,300px)_minmax(0,480px)] gap-14 md:gap-24 lg:gap-32 items-center justify-center pt-10 md:pt-14 pb-16 md:pb-24 mx-auto">
        <div className="flex justify-center">
          <PolaroidWithFish />
        </div>

        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <h1 className="font-castoro text-[36px] leading-[1.2] text-black tracking-tight">
            Hi there, I&apos;m <em className="italic">Lauren!</em>
          </h1>

          <p className="mt-6 md:mt-8 font-vietnam font-semibold text-base sm:text-lg text-black leading-relaxed">
            Software engineering student, design technologist, and passionate advocate for building
            a web with zero barriers.
          </p>

          <p className="mt-5 md:mt-6 font-vietnam text-sm sm:text-base text-black/70 leading-relaxed">
            I care deeply about crafting digital spaces where everyone regardless of age, ability,
            or background—gets a first-class seat at the table. When I&apos;m not writing accessible
            frontend components or tinkering with sensors, you can usually find me hunting down
            specialty flour for pastries or organizing hackathons!
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 border-t border-[rgb(229,229,229)] pt-14 md:pt-16">
        <h2 className="font-castoro text-2xl sm:text-3xl text-black mb-10">Experience</h2>

        <div className="mb-14">
          <h3 className="font-vietnam text-xs uppercase tracking-[0.14em] text-black/45 mb-6">
            Technical
          </h3>
          <div className="space-y-5">
            {technicalExperience.map((item, index) => (
              <ExperienceRow
                key={`${item.org}-${item.dates}`}
                item={item}
                isLast={index === technicalExperience.length - 1}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-vietnam text-xs uppercase tracking-[0.14em] text-black/45 mb-6">
            Leadership & Activities
          </h3>
          <div className="space-y-5">
            {leadership.map((item, index) => (
              <ExperienceRow
                key={`${item.org}-${item.dates}`}
                item={item}
                isLast={index === leadership.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
