'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import CaseStudy from '../../../assets/Header';
import CaseStudyShell from '../../CaseStudyShell';
import ScrollProgressBar from '../../ScrollProgressBar';
import Prototype from './Prototype';

const GREEN = '#32863F';

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
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 z-10"
          aria-label="Close image"
        >
          <X className="w-6 h-6" />
        </button>
        <img src={imageSrc} alt={altText} className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

const ProtoShot: React.FC<{ src: string; alt: string; caption?: string }> = ({
  src,
  alt,
  caption,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <figure className="mb-10">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-2xl border border-[rgb(229,229,229)] cursor-zoom-in shadow-sm"
        onClick={() => setOpen(true)}
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-500 font-vietnam">{caption}</figcaption>
      )}
      <ImageModal isOpen={open} onClose={() => setOpen(false)} imageSrc={src} altText={alt} />
    </figure>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2
    className="font-castoro normal-case scroll-mt-28 leading-tight text-[1.75rem] sm:text-3xl"
    style={{ color: GREEN }}
  >
    {children}
  </h2>
);

const P: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <p className={`text-gray-700 font-vietnam leading-relaxed ${className}`}>{children}</p>;

const Quote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote
    className="border-l-4 pl-5 py-1 my-5 text-lg font-castoro text-gray-900 leading-snug"
    style={{ borderColor: GREEN }}
  >
    {children}
  </blockquote>
);

const ImageSlot: React.FC<{ label: string }> = ({ label }) => (
  <figure className="mb-10">
    <div className="flex min-h-[200px] w-full items-center justify-center rounded-2xl border border-dashed border-[rgb(200,200,200)] bg-[#F7F8F7] px-6 py-12 text-center">
      <p className="max-w-md text-sm font-vietnam text-gray-500">{label}</p>
    </div>
  </figure>
);

const GiatecCaseStudy: React.FC = () => {
  return (
    <div className="relative w-full">
      <ScrollProgressBar color={GREEN} />
      <CaseStudyShell accentColor={GREEN}>
        <CaseStudy
          title="Giatec Ecosystem Portal"
          subtitle="Designing a connected view of all main products across Giatec products"
          metaRows={[
            { label: 'Context', value: 'Internal hackathon for Giatec' },
            { label: 'Team', value: 'UX designer, QA tester, and web developer' },
            { label: 'Role', value: 'UX designer and software developer' },
            { label: 'Timeline', value: 'July 2026' },
          ]}
          hideHero
        />

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1">
            <SectionTitle>Overview</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              Giatec&apos;s SmartMix, MixPilot, and SmartRock each cover one stage of a concrete pour:
              SmartMix holds the mix design and batch record at the plant, MixPilot reads slump and
              temperature inside the truck, and SmartRock tracks temperature and strength in the slab.
              I designed a concept design system and a working prototype that puts all three on one
              screen. A user types a ticket or pour ID and sees the mix design, delivery readings, and
              in-place strength on a single timeline, which answers one question:
            </P>
            <Quote>Did this pour perform the way we designed it?</Quote>
          </div>
        </div>

        <ProtoShot
          src="/images/Giatec/products/portal-hero.png?v=2"
          alt="Ecosystem portal overview with pours on target, insight flags, and connection health"
          caption="Portal overview. One screen for mix design, delivery, and in-place strength."
        />
        <ImageSlot label="Before and after: three product tabs versus the single portal view" />

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1">
            <SectionTitle>The problem</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              Picture a site engineer whose slab hits only 80% of its target strength at seven days.
              To find out why, they open SmartMix to pull the mix design and batch record for that
              ticket. They switch to MixPilot to see whether the truck&apos;s slump drifted on the way
              to the site, then open SmartRock for the maturity curve from the sensor in the slab.
              Then they line up the three sets of timestamps by hand, usually in a spreadsheet, to see
              whether the drift happened before the strength fell behind. Each tool answers its own
              piece well, but nothing connects the pieces, so the engineer does that work every time.
            </P>
          </div>
        </div>

        <ImageSlot label="Current-state journey map showing the tool at each step and where time and context are lost" />

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1" />
          <div className="wide:col-span-3">
            <P>Three things make this slow.</P>
            <ol className="mt-4 list-decimal space-y-3 pl-5 font-vietnam text-gray-700">
              <li>
                Each product has its own navigation and vocabulary, so every switch resets the
                engineer&apos;s mental model.
              </li>
              <li>
                The ticket number, mix ID, timestamp, and location appear in more than one product, so
                the engineer has to decide which copy to trust.
              </li>
              <li>
                Because the pour&apos;s story is split across tools, deciding whether the cause was the
                mix, the delivery, or the site comes down to a guess.
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <ProtoShot
            src="/images/Giatec/products/smartmix.png?v=2"
            alt="SmartMix mixes dashboard"
            caption="SmartMix. Mix design and batch record at the plant."
          />
          <ProtoShot
            src="/images/Giatec/products/mixpilot.png"
            alt="MixPilot delivery route from plant to jobsite"
            caption="MixPilot. Slump and temperature inside the truck."
          />
          <ProtoShot
            src="/images/Giatec/products/smartrock.png"
            alt="SmartRock temperature, strength, and sensor locations"
            caption="SmartRock. Temperature and strength in the slab."
          />
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1">
            <SectionTitle>User needs</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              Three roles touch every pour, and each holds a different third of the answer. The
              quality or mix-design manager lives in SmartMix and needs to know whether a mix performs
              as designed and whether it can be optimized, but has to chase delivery and strength data
              from other tools to find out. The dispatcher or plant operator lives in MixPilot and
              needs to know whether each load arrived within spec, but sees only the truck&apos;s
              story and never learns what happened to the concrete afterward. The site or project
              engineer lives in SmartRock and needs to know when the slab will reach strength so forms
              can be stripped, but sees a strength shortfall without the mix or delivery history
              behind it.
            </P>
            <P className="text-sm text-gray-500">
              These are proto-personas built from the product descriptions and hackathon discussions.
              Replace with interview findings, stating how many people you spoke to and in which roles.
            </P>
          </div>
        </div>

        <ImageSlot label="Three persona cards with role, goal, daily tool, and top frustration" />

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-24">
          <div className="wide:col-span-1">
            <SectionTitle>Research questions</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>I scoped the work around four questions.</P>
            <ol className="list-decimal space-y-3 pl-5 font-vietnam text-gray-700">
              <li>Where do users lose time or context when they trace a pour across the three tools?</li>
              <li>What do they need to see first to judge whether a pour is on track?</li>
              <li>When strength falls short, which evidence do they check, and in what order?</li>
              <li>When two products show the same data point, how do they decide which one to trust?</li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-16">
          <div className="wide:col-span-1">
            <SectionTitle>Requirements</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>Those questions produced five requirements.</P>
            <ol className="list-decimal space-y-3 pl-5 font-vietnam text-gray-700">
              <li>The user starts from one ticket or pour ID and gets the whole story back.</li>
              <li>Design, delivery, and performance sit on one shared time axis.</li>
              <li>Every number shows which product it came from.</li>
              <li>The page gives a verdict first and the evidence second.</li>
              <li>
                Any card links into the full product, so deep work happens where it already lives.
              </li>
            </ol>
            <P>These five requirements drive the design principles in the next section.</P>
          </div>
        </div>

        <div
          id="solution"
          className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10 scroll-mt-28"
        >
          <div className="wide:col-span-1">
            <SectionTitle>Prototype</SectionTitle>
          </div>
          <div className="wide:col-span-3">
            <P>
              The working prototype of the connected experience. Demo data is illustrative.
            </P>
          </div>
        </div>

        <div className="mb-16" data-toc-exclude>
          <Prototype />
        </div>
      </CaseStudyShell>
    </div>
  );
};

export default GiatecCaseStudy;
