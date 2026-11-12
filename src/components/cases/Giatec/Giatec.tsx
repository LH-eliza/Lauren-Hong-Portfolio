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
        className="w-full h-auto rounded-2xl border border-[rgb(229,229,229)] shadow-sm"
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

const ReasonCard: React.FC<{
  eyebrow: string;
  title: string;
  whatLabel: string;
  what: string;
  why: string;
}> = ({ eyebrow, title, whatLabel, what, why }) => (
  <div className="rounded-2xl border border-[rgb(229,229,229)] bg-white p-5">
    <p className="text-xs font-vietnam uppercase tracking-wider" style={{ color: GREEN }}>
      {eyebrow}
    </p>
    <h3 className="mt-1 font-castoro text-xl leading-snug text-gray-900">{title}</h3>
    <p className="mt-3 text-sm font-vietnam leading-relaxed text-gray-700">
      <span className="font-semibold text-gray-900">{whatLabel}. </span>
      {what}
    </p>
    <p className="mt-3 rounded-lg bg-[#F2F9F1] px-3 py-2 text-sm font-vietnam leading-relaxed text-gray-700">
      <span className="font-semibold" style={{ color: GREEN }}>
        Why.{' '}
      </span>
      {why}
    </p>
  </div>
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
            { label: 'Timeline', value: 'July 2025' },
          ]}
          hideHero
        />

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1">
            <SectionTitle>Overview</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              Giatec&apos;s SmartMix, MixPilot, and SmartRock each cover one stage of a concrete
              pour: SmartMix holds the mix design and batch record at the plant, MixPilot reads
              slump and temperature inside the truck, and SmartRock tracks temperature and strength
              in the slab. I designed a concept design system and a working prototype that puts all
              three on one screen. A user types a ticket or pour ID and sees the mix design,
              delivery readings, and in-place strength on a single timeline, which answers one
              question:
            </P>
            <Quote>Did this pour perform the way we designed it?</Quote>
          </div>
        </div>

        <ProtoShot
          src="/images/Giatec/products/portal-hero.png?v=3"
          alt="Ecosystem portal overview with pours on target, insight flags, and connection health"
          caption="Portal overview. One screen for mix design, delivery, and in-place strength."
        />
        <ProtoShot
          src="/images/Giatec/products/same-pour-comparison.gif"
          alt="Same pour compared two ways: three tools matched by hand, or one search in the portal"
          caption="Same pour, two ways. Three tools matched by hand, or one search in the portal."
        />

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1">
            <SectionTitle>The problem</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              Picture a site engineer whose slab hits only 80% of its target strength at seven days.
              To find out why, they open SmartMix to pull the mix design and batch record for that
              ticket. They switch to MixPilot to see whether the truck&apos;s slump drifted on the
              way to the site, then open SmartRock for the maturity curve from the sensor in the
              slab. Then they line up the three sets of timestamps by hand, usually in a
              spreadsheet, to see whether the drift happened before the strength fell behind. Each
              tool answers its own piece well, but nothing connects the pieces, so the engineer does
              that work every time.
            </P>
          </div>
        </div>

        <ProtoShot
          src="/images/Giatec/products/journey-map.png"
          alt="Current-state journey map of a site engineer tracing one pour across SmartMix, MixPilot, SmartRock, and a spreadsheet"
          caption="Current state. Tracing one pour across three tools, then reconciling the timestamps by hand."
        />

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
                The ticket number, mix ID, timestamp, and location appear in more than one product,
                so the engineer has to decide which copy to trust.
              </li>
              <li>
                Because the pour&apos;s story is split across tools, deciding whether the cause was
                the mix, the delivery, or the site comes down to a guess.
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
              I started from needs, not features. For each role I asked which decision they are
              trying to make, what they have to do today to make it, and what goes wrong when they
              cannot. The reason behind each need shaped the design more than the need itself, so
              every card below pairs the two.
            </P>
            <P>Three roles touch every pour, and each holds a different third of the answer.</P>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <ReasonCard
            eyebrow="Quality or mix-design manager"
            title="Did my mix perform as designed?"
            whatLabel="Need"
            what="To know whether a mix performs as designed and whether it can be optimized, without chasing delivery and strength data from other tools."
            why="Overdesigning a mix wastes cement and money, and underdesigning risks a strength shortfall. The manager can only tune the mix if the outcome comes back to the place where the mix lives."
          />
          <ReasonCard
            eyebrow="Dispatcher or plant operator"
            title="Did every load arrive within spec?"
            whatLabel="Need"
            what="To know whether each load arrived within spec, and what happened to the concrete after the truck left."
            why="A rejected load is wasted material and a delayed pour. The dispatcher can only adjust the next load if they learn what the last one did, and today their view ends at the truck."
          />
          <ReasonCard
            eyebrow="Site or project engineer"
            title="When can we strip the forms?"
            whatLabel="Need"
            what="To know when the slab will reach strength, and when it will not, with the mix and delivery history that explains why."
            why="Stripping early risks the structure and waiting too long costs schedule. A strength shortfall with no history behind it turns a technical question into a guess."
          />
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1" />
          <div className="wide:col-span-3 space-y-5">
            <P>
              Beneath the role needs sit three that every role shares. They are the needs the portal
              has to meet to be worth opening at all.
            </P>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <ReasonCard
            eyebrow="Shared need"
            title="A verdict before the evidence"
            whatLabel="Need"
            what="To see at a glance whether a pour is on target before reading any detail."
            why="People checking many pours need to know where to look first. Opening with raw curves makes them do the triage the tool should have done."
          />
          <ReasonCard
            eyebrow="Shared need"
            title="Numbers they can trust"
            whatLabel="Need"
            what="To know which product each number came from, and which copy to believe when two disagree."
            why="If the source is hidden, a wrong guess sends the team to blame the wrong stage, and one bad experience teaches them to go back to the spreadsheet."
          />
          <ReasonCard
            eyebrow="Shared need"
            title="Deep work stays in the product"
            whatLabel="Need"
            what="To keep editing mix designs, routes and sensors in the tools built for it."
            why="Each product is where the work already lives. A portal that tried to replace them would lose the people who depend on them, so it orients and then hands off."
          />
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1" />
          <div className="wide:col-span-3">
            <P className="text-sm text-gray-500">
              These needs come from the product descriptions, the competitor research below and
              hackathon discussions. Interviews would replace them with findings, stating how many
              people I spoke to and in which roles.
            </P>
          </div>
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-16">
          <div className="wide:col-span-1">
            <SectionTitle>Research questions</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>I scoped the work around four questions.</P>
            <ol className="list-decimal space-y-3 pl-5 font-vietnam text-gray-700">
              <li>
                Where do users lose time or context when they trace a pour across the three tools?
              </li>
              <li>What do they need to see first to judge whether a pour is on track?</li>
              <li>When strength falls short, which evidence do they check, and in what order?</li>
              <li>
                When two products show the same data point, how do they decide which one to trust?
              </li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1">
            <SectionTitle>Competitor research</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              Before designing anything I wanted to know whether this view already existed. I mapped
              four players against the five things a user has to do to trace one pour, using public
              product pages and press releases. The matrix is built from sticky notes in FigJam, and
              the color of each note shows how well that player covers the row. The last column
              states why the row matters to the person using it, because a gap only counts if it
              hurts someone.
            </P>
          </div>
        </div>

        <ProtoShot
          src="/images/Giatec/products/Giatec%20Ecosystem%20Portal_%20Competitor%20Research%20Matrix.png"
          alt="Competitor research matrix comparing Giatec tools, Command Alkon, Verifi, Maturix, Giatec 360, and the Ecosystem Portal concept"
          caption="Competitor research matrix. Each note is how well a player covers one step of tracing a pour."
        />

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1" />
          <div className="wide:col-span-3 space-y-5">
            <P>
              Three patterns stood out. First, each specialist goes deep on one stage. Verifi works
              inside the truck and Maturix works inside the slab, which is why neither can explain a
              pour on its own. Second, platform vendors connect systems but stop short of explaining
              a pour. Command Alkon follows a ticket from quote to billing, and its partner
              integration passes SmartMix records between systems, yet nothing public shows mix,
              delivery and strength on one timeline. Third, the last row is nearly empty. A shared
              time axis with a visible source for every number is a gap or unevidenced for every
              player.
            </P>
            <P>
              Since the hackathon, Giatec has announced Giatec 360, a platform that links mix
              design, batching, delivery and field data as a single system of record. I read that as
              confirmation of the direction rather than a threat to it. Unifying the data answers
              where the numbers live. This concept asks a different question, which is how a person
              reads them: verdict first, evidence second, with the source of every number visible.
              That is the part of the design I would defend.
            </P>
            <P>
              The takeaway for the design is that the gap is interpretation, not storage. Engineers
              already have the numbers. What they lack is the order of events and a clear sense of
              which tool each number came from.
            </P>
            <P className="text-sm">
              <a
                href="https://www.figma.com/board/gu3DwHxgecwcA9OO03dj1v"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
                style={{ color: GREEN }}
              >
                Open the research matrix in FigJam
              </a>
            </P>
          </div>
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-16">
          <div className="wide:col-span-1">
            <SectionTitle>Requirements</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              Those questions and the gaps in the competitor matrix produced five requirements, each
              with a reason attached.
            </P>
            <ol className="list-decimal space-y-3 pl-5 font-vietnam text-gray-700">
              <li>The user starts from one ticket or pour ID and gets the whole story back.</li>
              <li>Design, delivery, and performance sit on one shared time axis.</li>
              <li>Every number shows which product it came from.</li>
              <li>The page gives a verdict first and the evidence second.</li>
              <li>
                Any card links into the full product, so deep work happens where it already lives.
              </li>
            </ol>
            <P>Each requirement became a design principle in the next section.</P>
          </div>
        </div>

        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10">
          <div className="wide:col-span-1">
            <SectionTitle>Design principles</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              A principle is only useful if it can settle an argument. I wrote each one with the
              reason behind it, so that when a layout choice was unclear I could ask which option
              better served the reason, not which looked better.
            </P>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <ReasonCard
            eyebrow="Principle 1"
            title="Start from the pour, not the product"
            whatLabel="In practice"
            what="Search takes a ticket or pour ID and returns mix, delivery and strength together."
            why="Users ask questions about a pour. The boundaries between products are how Giatec is organized, not how the work is."
          />
          <ReasonCard
            eyebrow="Principle 2"
            title="Put time on one axis"
            whatLabel="In practice"
            what="Design, delivery and performance share one timeline so events line up without a spreadsheet."
            why="Finding a cause is a question of order. Drift before a strength lag points to delivery, and drift after it does not."
          />
          <ReasonCard
            eyebrow="Principle 3"
            title="Label every number with its source"
            whatLabel="In practice"
            what="Each value names the product it came from, and a conflict between two copies is shown rather than hidden."
            why="Trust is earned when people can check. Hiding the source forces a guess, and a wrong guess costs more than the extra label."
          />
          <ReasonCard
            eyebrow="Principle 4"
            title="Verdict first, evidence second"
            whatLabel="In practice"
            what="Each pour opens with a plain status, then the evidence that supports it."
            why="A person scanning many pours needs to know where to look before they read how. The verdict is the triage, and the evidence is the proof."
          />
          <ReasonCard
            eyebrow="Principle 5"
            title="Link out for deep work"
            whatLabel="In practice"
            what="Every card links into the full product at the right record."
            why="Each product is where the work already happens. The portal earns its place by orienting people quickly, not by replacing the tools they rely on."
          />
        </div>

        <div id="solution" className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-10 scroll-mt-28">
          <div className="wide:col-span-1">
            <SectionTitle>Prototype</SectionTitle>
          </div>
          <div className="wide:col-span-3"></div>
        </div>

        <div className="mb-16" data-toc-exclude>
          <Prototype />
        </div>
        <div className="grid grid-cols-1 wide:grid-cols-4 gap-8 mb-16">
          <div className="wide:col-span-1">
            <SectionTitle>Reflection and next steps</SectionTitle>
          </div>
          <div className="wide:col-span-3 space-y-5">
            <P>
              The first thing I would validate is the needs themselves. They come from product
              descriptions, competitor research and hackathon discussions, so the next step is a
              round of interviews with at least one person from each role. I would ask each of them
              to trace a real pour while I watch, to check whether verdict first matches how they
              reason and whether they trust the source labels.
            </P>
            <P>
              The second is the verdict logic. The thresholds in the prototype are illustrative.
              With real mix designs and sensor curves I would test where the line between on target
              and watch closely belongs, because a verdict that raises false alarms is worse than no
              verdict, and people stop trusting a signal that cries wolf.
            </P>
            <P>
              The third is alignment with Giatec 360. If the platform already unifies the data, the
              most useful contribution of this work is the reading layer on top of it: the timeline,
              the source labels and the verdict. That is where I would take the concept next.
            </P>
          </div>
        </div>
      </CaseStudyShell>
    </div>
  );
};

export default GiatecCaseStudy;
