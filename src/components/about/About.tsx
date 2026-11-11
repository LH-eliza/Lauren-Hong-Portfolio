import React from 'react';
import PolaroidWithFish from './PolaroidWithFish';

interface ExperienceItem {
  org: string;
  dates: string;
  role: string;
  description: string;
}

const technicalExperience: ExperienceItem[] = [
  {
    org: 'Solace',
    dates: 'MAY 2026 — AUG 2026',
    role: 'Junior UX Designer Intern',
    description: 'Designing developer-facing experiences and helping shape clearer product workflows.',
  },
  {
    org: 'Giatec Scientific Inc.',
    dates: 'MAY 2025 — AUG 2025',
    role: 'Software Developer in Test Intern',
    description: 'Building quality into concrete sensor products — check out my case study under Work!',
  },
  {
    org: 'Motorola Solutions',
    dates: 'SEPT 2024 — DEC 2024',
    role: 'DevOps Engineer Intern',
    description: 'Supporting infrastructure and delivery pipelines for production systems.',
  },
  {
    org: 'Solace',
    dates: 'JAN 2024 — APRIL 2024',
    role: 'Backend Developer Intern',
    description: 'Building backend services and tooling for event-driven platforms.',
  },
  {
    org: 'Shared Services Canada',
    dates: 'MAY 2023 — AUG 2023',
    role: 'Project Manager Intern',
    description: 'Coordinating project delivery and helping keep cross-team work on track.',
  },
  {
    org: 'Mozilla',
    dates: 'JAN 2021 — APRIL 2022',
    role: 'IT User Support Volunteer',
    description: 'Helping users get unstuck and supporting community-facing tech needs.',
  },
];

const leadership: ExperienceItem[] = [
  {
    org: 'uOttaHack',
    dates: '2022 — 2026',
    role: 'Co-Director & Design Lead',
    description:
      'Led branding, marketing, and event coordination across multiple hackathon years.',
  },
  {
    org: 'uOBionics',
    dates: '2024 — PRESENT',
    role: 'UI/UX Designer, Software Team Lead',
    description: 'Designing and leading software for accessibility-focused hardware-software work.',
  },
  {
    org: 'Women in Science and Engineering (WISE)',
    dates: '2022 — PRESENT',
    role: 'VP Development & Design',
    description: 'Growing outreach and design for community programs that support women in STEM.',
  },
  {
    org: 'Asian Passion Project',
    dates: '2021 — 2022',
    role: 'TOEFL Tutor',
    description: 'Supporting students preparing for English proficiency exams.',
  },
  {
    org: 'Felt Initiative',
    dates: '2022 — 2023',
    role: 'English Second Language Tutor',
    description: 'Tutoring ESL learners with a focus on confidence and clarity.',
  },
];

const ExperienceTimelineItem = ({ item }: { item: ExperienceItem }) => (
  <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-4 md:gap-0 items-start">
    <div className="md:pt-1 md:pr-8">
      <p className="font-vietnam text-[11px] sm:text-xs uppercase tracking-[0.12em] text-black/45">
        {item.dates}
      </p>
    </div>

    <div className="min-w-0 md:pl-10">
      <h3 className="font-vietnam font-semibold text-black text-sm sm:text-base leading-snug">
        {item.role} <span className="text-black/40 font-normal">•</span> {item.org}
      </h3>
      <p className="mt-2 font-vietnam text-sm text-black/55 leading-relaxed max-w-xl">
        {item.description}
      </p>
    </div>
  </div>
);

const ExperienceTimeline = ({ items }: { items: ExperienceItem[] }) => (
  <div className="relative">
    <div className="hidden md:block absolute top-0 bottom-0 left-[150px] w-px bg-[rgb(220,220,220)]" />
    <div className="space-y-12 md:space-y-14">
      {items.map(item => (
        <ExperienceTimelineItem key={`${item.org}-${item.dates}-${item.role}`} item={item} />
      ))}
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
        <div className="w-full max-w-[920px] mx-auto">
          <h2 className="font-castoro text-[36px] leading-[1.2] text-black tracking-tight text-center mb-12 md:mb-16">
            Where I&apos;ve <em className="italic">been</em>
          </h2>

          <ExperienceTimeline items={technicalExperience} />

          <h3 className="font-castoro text-2xl sm:text-3xl text-black mt-20 md:mt-24 mb-10 md:mb-12">
            Leadership &amp; community
          </h3>

          <ExperienceTimeline items={leadership} />
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
