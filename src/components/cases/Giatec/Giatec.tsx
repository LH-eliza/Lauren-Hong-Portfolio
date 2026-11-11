'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import CaseStudy from '../../../assets/Header';
import CaseStudyShell from '../../CaseStudyShell';
import ScrollProgressBar from '../../ScrollProgressBar';
import Prototype from './Prototype';
import UserFlows from './UserFlows';

const GREEN = '#32863F';
const FIGMA = 'https://www.figma.com/design/nMgAAd6myrFpu6ZuTKdJ8N/Giatec-Hackathon';

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
    className="font-castoro normal-case scroll-mt-28 leading-tight"
    style={{ color: GREEN, fontSize: '36px' }}
  >
    {children}
  </h2>
);

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-castoro text-gray-900 leading-snug mb-3">{children}</h3>
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

const SimpleTable: React.FC<{
  headers: string[];
  rows: React.ReactNode[][];
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-2xl border border-[rgb(229,229,229)]">
    <table className="w-full text-left text-sm font-vietnam">
      <thead className="bg-[#F4F6F5] text-gray-600">
        <tr>
          {headers.map(h => (
            <th key={h} className="px-4 py-3 font-medium">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t border-[rgb(229,229,229)] align-top">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-gray-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DecisionBlock: React.FC<{
  title: string;
  problem: string;
  decision: string;
  rationale: string;
  tradeoff: string;
}> = ({ title, problem, decision, rationale, tradeoff }) => (
  <div className="space-y-4 rounded-2xl border border-[rgb(229,229,229)] p-5 md:p-6">
    <H3>{title}</H3>
    <div className="space-y-3 text-sm md:text-base">
      <P>
        <span className="font-semibold text-gray-900">Problem. </span>
        {problem}
      </P>
      <P>
        <span className="font-semibold text-gray-900">Decision. </span>
        {decision}
      </P>
      <P>
        <span className="font-semibold text-gray-900">Rationale. </span>
        {rationale}
      </P>
      <P>
        <span className="font-semibold text-gray-900">Trade-off. </span>
        {tradeoff}
      </P>
    </div>
  </div>
);

const GiatecCaseStudy: React.FC = () => {
  return (
    <div className="relative w-full">
      <ScrollProgressBar color={GREEN} />
      <CaseStudyShell accentColor={GREEN} solutionId="solution">
        <CaseStudy
          title="Giatec Ecosystem Portal"
          subtitle="Designing one connected view of usage, waste, and impact across Giatec products"
          metaRows={[
            {
              label: 'Context',
              value:
                'Internal hackathon at Giatec (prompt: build a solution surrounding AI), extended into a full design concept',
            },
            { label: 'Platform', value: 'Desktop web portal' },
            {
              label: 'Role',
              value: 'Product designer and lead front-end developer',
            },
            { label: 'Team', value: 'Two developers' },
            {
              label: 'Timeline',
              value: 'Hackathon: 3 days. Extension: design concept follow-up',
            },
            {
              label: 'Scope',
              value:
                'Product design, front-end development, AI chatbot, information architecture, data and content design, design system',
            },
            {
              label: 'Status',
              value:
                'Design concept. Not shipped. All operational values are illustrative demo data.',
            },
          ]}
          hideHero
        />

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <SectionTitle>Summary</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-5">
            <P>
              Giatec customers can use several products at once, but each product tells only part of
              the story. The hackathon prompt was to create a solution surrounding AI. Our answer was
              a single platform where customers use all Giatec products together, trust the
              information they see, and understand their usage, concrete waste, and the environmental
              impact behind it, such as CO₂ emissions.
            </P>
            <P>
              I worked with two developers over three days. I designed the product, built the front
              end, and created an AI chatbot for the system. The chatbot is not part of the design
              prototype because of LLM usage, so this case study focuses on the portal experience it
              would sit inside.
            </P>
            <P>
              The hackathon proof of concept proved the idea was worth pursuing. This case study
              covers the extension: understanding user needs, scanning the competitive landscape,
              auditing that first dashboard, finding where it would break down for real users, and
              redesigning it around a single principle.{' '}
              <strong>
                Products stay distinct, projects connect the evidence, and the portal makes
                uncertainty visible.
              </strong>
            </P>
            <P>
              The result is a 12-screen desktop concept, a traceable project view, a recovery-oriented
              alert flow, a transparent impact report builder, a working interactive prototype, and a
              reusable design foundation of 24 components and 44 variables.
            </P>
          </div>
        </div>

        <ProtoShot
          src="/images/Giatec/proto/overview.png"
          alt="Ecosystem overview from the interactive prototype"
          caption="Prototype: ecosystem overview. Orientation first, then attributed metrics and product health."
        />

        {/* 1. Problem */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="md:col-span-1">
            <SectionTitle>Problem</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-6">
            <P>
              Giatec&apos;s products each serve a different part of the concrete lifecycle. MixPilot,
              SmartMix, and SmartRock produce valuable data, but a customer running all three has to
              visit each product separately and assemble the picture themselves.
            </P>
            <P>That creates three problems:</P>
            <ol className="list-decimal pl-5 space-y-3 font-vietnam text-gray-700">
              <li>
                <strong className="text-gray-900">No shared context.</strong> A batch in one product
                and a sensor reading in another may belong to the same project, but nothing in the
                experience says so.
              </li>
              <li>
                <strong className="text-gray-900">No clear way to know what needs attention.</strong>{' '}
                If a data source goes quiet, the user has to notice it by checking each product.
              </li>
              <li>
                <strong className="text-gray-900">Impact numbers are hard to trust.</strong> When
                multiple products report time, cost, and environmental figures, it is unclear which
                system owns a number, what period it covers, and whether it overlaps with another
                product&apos;s estimate.
              </li>
            </ol>

            <H3>Why this matters</H3>
            <P>
              Concrete waste is Giatec&apos;s central concern, and the data that describes it lives in
              separate product views. If a customer cannot see usage, waste, and impact together, they
              cannot act on waste, and they cannot show the impact of acting on it. A unified view is
              only valuable if people trust what it says. That is why accuracy and traceability became
              the core of the design instead of an add-on.
            </P>

            <H3>Hackathon objective</H3>
            <P>
              The prompt asked for a solution surrounding AI. Concrete waste is Giatec&apos;s central
              concern, and its impact is expressed through metrics such as CO₂ emissions. Our framing:
            </P>
            <Quote>
              Can we create a platform that lets customers use all Giatec products in one place,
              receive accurate information, and track usage, concrete waste, and the impact behind it?
            </Quote>

            <H3>Design question for the extension</H3>
            <Quote>
              Can a user understand ecosystem health, trace an issue to its project and source, and
              explain the impact without losing context?
            </Quote>
          </div>
        </div>

        {/* 2. User needs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="md:col-span-1">
            <SectionTitle>Understanding user needs</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-6">
            <P>
              The central question in this section is <strong>why</strong>. Why would a customer want
              one view of several products? Why would they trust it? Why would they act on it? Each
              need below is traced back to a reason, because a feature without a reason is a guess.
            </P>

            <H3>Where the needs came from</H3>
            <P>
              I did not run formal research with end customers, so the needs below are{' '}
              <strong>design hypotheses</strong> to be tested, not findings. They come from three
              inputs:
            </P>
            <ul className="list-disc pl-5 space-y-2 font-vietnam text-gray-700">
              <li>
                <strong className="text-gray-900">
                  Informal conversations with three internal teams at Giatec:
                </strong>{' '}
                the VP of Development, QA, and the marketing team responsible for customer experience.
                I used these to understand how the products function and how customer workflows run.
              </li>
              <li>
                <strong className="text-gray-900">The hackathon prototype itself,</strong> which showed
                which questions the first dashboard could and could not answer.
              </li>
              <li>
                <strong className="text-gray-900">The competitive scan</strong> in the next section,
                which shows what customers are likely to expect from the category.
              </li>
            </ul>

            <H3>Audiences</H3>
            <SimpleTable
              headers={['Audience', 'Primary needs']}
              rows={[
                [
                  <strong key="a1">Workspace administrator</strong>,
                  'Connect products, resolve access issues, manage team permissions.',
                ],
                [
                  <strong key="a2">Project lead</strong>,
                  'Check project status, follow alerts, inspect the affected batch, mix, or sensor.',
                ],
                [
                  <strong key="a3">Operations or sustainability reviewer</strong>,
                  'Compare attributed estimates and prepare a transparent report.',
                ],
              ]}
            />

            <H3>Job to be done</H3>
            <Quote>
              When I manage several connected Giatec products, help me see what needs attention,
              investigate it in context, and communicate the evidence, without confusing estimated,
              stale, or overlapping data.
            </Quote>

            <H3>Needs and the reasons behind them</H3>
            <SimpleTable
              headers={['Need', 'Who', 'Why it matters', 'Design response']}
              rows={[
                [
                  <strong key="n1">Know what needs attention right now</strong>,
                  'Project lead, administrator',
                  'A stale or offline source can lead to a wrong on-site decision, such as acting on an outdated strength reading.',
                  'Orientation-first overview and alerts with recommended checks.',
                ],
                [
                  <strong key="n2">Trace an issue to its project and source</strong>,
                  'Project lead',
                  'Each product measures something different, so finding the cause means piecing together separate views.',
                  'Project detail with a traceability table linking batches, mixes, pours, and sensors.',
                ],
                [
                  <strong key="n3">Trust a number enough to report it</strong>,
                  'Sustainability reviewer',
                  'Impact claims get scrutinized. One wrong unit or double-counted estimate can undermine every figure.',
                  'Explicit metric definitions, source labels, and attribution next to each value.',
                ],
                [
                  <strong key="n4">See how waste connects to impact</strong>,
                  'Sustainability reviewer, project lead',
                  "Concrete waste is Giatec's core concern and its impact is expressed through measures such as CO₂ emissions.",
                  "Attributed estimates that keep each product's contribution separate.",
                ],
                [
                  <strong key="n5">Get set up and recover from errors without help</strong>,
                  'Administrator',
                  'The first session shapes the first impression, and an unexplained failure stalls adoption.',
                  'First-use overview and a connect flow with a fully designed authorization failure.',
                ],
                [
                  <strong key="n6">Control who can see and change what</strong>,
                  'Administrator',
                  'Several teams and products share one workspace, so access needs to be clear and reviewable.',
                  'Team and access screen with role-based membership.',
                ],
              ]}
            />

            <H3>What I still need to learn</H3>
            <P>
              These needs are plausible but unproven. The validation plan later in this case study
              turns the riskiest assumptions into testable tasks. The ones I am least sure of are how
              often customers actually work across more than one product, and how much they rely on
              estimated impact figures when making decisions.
            </P>
          </div>
        </div>

        {/* 3. Competitors */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="md:col-span-1">
            <SectionTitle>Competitor analysis</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-6">
            <P>
              The question here is also <strong>why</strong>. Why does a unified portal matter in this
              market, and why would customers choose it over alternatives? To answer that, I looked at
              how other companies in concrete monitoring, production optimization, and AI-assisted mix
              design present themselves, and where the category appears to be heading.
            </P>
            <P>
              This is a public-information scan, not a hands-on usability review of each product.
              Descriptions are drawn from public company summaries and should be verified against each
              company&apos;s own materials.
            </P>

            <H3>The landscape</H3>
            <SimpleTable
              headers={['Company', 'What they focus on', 'Why it matters for this design']}
              rows={[
                [
                  <strong key="c1">Converge</strong>,
                  'Wireless sensors for concrete strength, temperature, and humidity, plus data collection, mix optimization, and precast logistics.',
                  'The closest in breadth. Suggests customers expect more than a single sensor feed.',
                ],
                [
                  <strong key="c2">Maturix</strong>,
                  'Wireless sensors for temperature, strength, and maturity, with insight into curing and drying.',
                  'A sensor-first benchmark for how curing data is presented at the moment of decision.',
                ],
                [
                  <strong key="c3">EXACT Technology</strong>,
                  'Cloud-based concrete monitoring for precast, prestress, and cast-in-place work.',
                  'Shows how monitoring is framed per construction method.',
                ],
                [
                  <strong key="c4">Cloud Cycle</strong>,
                  'Real-time monitoring of concrete quality on delivery trucks. Positions itself around reducing wastage and improving batching consistency.',
                  'Names waste reduction directly and treats integration as a given.',
                ],
                [
                  <strong key="c5">ConcreteAI</strong>,
                  'AI for concrete mix design, helping producers make performance decisions.',
                  "Relevant to the hackathon's AI prompt. Raises how users learn to trust AI recommendations.",
                ],
                [
                  <strong key="c6">Brickeye</strong>,
                  'Platform with live monitoring, historical data, alerts, analytics, and automation for contractors, owners, and insurers.',
                  'A benchmark for alert design, and a reminder that reports can have audiences beyond the product team.',
                ],
              ]}
            />
            <P>
              Giatec&apos;s own stated direction, including its partnership with Sika, is to bring
              sensors, software, and AI-driven analysis together and to unify production, delivery, and
              placement into one system. The portal is the customer-facing expression of that
              direction.
            </P>

            <H3>What the scan suggests</H3>
            <ol className="list-decimal pl-5 space-y-3 font-vietnam text-gray-700">
              <li>
                <strong className="text-gray-900">
                  The category is moving from point products toward platforms.
                </strong>{' '}
                A customer who uses multiple Giatec products will likely expect them to behave as one
                system.
              </li>
              <li>
                <strong className="text-gray-900">
                  Waste reduction is a common promise, but defensible measurement may be the open
                  space.
                </strong>{' '}
                Competitors talk about reducing waste. What I could not see from public summaries is
                how clearly any of them shows the source, period, and limits of an impact number.
              </li>
              <li>
                <strong className="text-gray-900">AI is arriving, and explainability is unresolved.</strong>{' '}
                If AI recommendations enter the portal, users will need to see why a recommendation was
                made and what it is based on.
              </li>
              <li>
                <strong className="text-gray-900">Integration is an expectation.</strong> Connection
                health and onboarding are part of the product, not setup chores.
              </li>
            </ol>

            <H3>Why this shaped the design</H3>
            <SimpleTable
              headers={['What the scan suggested', 'Why it matters', 'Where it shows up']}
              rows={[
                [
                  'Customers expect a connected system',
                  'A portal that only lists products adds little over separate apps',
                  'Project identity as the connective layer',
                ],
                [
                  'Waste and impact are core promises',
                  'Promises need evidence to be believed',
                  'Attributed estimates, definitions, and the report builder',
                ],
                [
                  'AI needs to be explainable',
                  'Unexplained answers erode trust faster than no answer',
                  'Design intent for the AI assistant',
                ],
                [
                  'Integration is table stakes',
                  'Connection failures stall adoption',
                  'Integrations screen and connect-product validation',
                ],
              ]}
            />
            <P className="text-sm text-gray-500">
              Sources for the public descriptions above: CB Insights comparison and company profile
              pages for Giatec, Converge, Maturix, EXACT Technology, Cloud Cycle, ConcreteAI, and
              Brickeye, and the Sika and Giatec partnership announcement summarized there. Verify
              against each company&apos;s own site before treating these as definitive.
            </P>
          </div>
        </div>

        {/* 4. Starting point */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <SectionTitle>Starting point</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-6">
            <P>
              The hackathon version was built in three days, so it was optimized for proving the idea
              quickly. It already did several things well. It brought environmental impact, time,
              money, and product analytics into one green-branded shell, and it gave MixPilot,
              SmartMix, and SmartRock clear destinations.
            </P>
            <P>Auditing it for credibility and scalability surfaced four gaps:</P>
            <SimpleTable
              headers={['Gap', 'What I found', 'Why it matters']}
              rows={[
                [
                  <strong key="g1">Summary without orientation</strong>,
                  'The dashboard showed totals but did not say which products were connected, which source needed attention, or which projects were affected.',
                  'Users could see numbers but not know where to act.',
                ],
                [
                  <strong key="g2">Metrics without provenance</strong>,
                  'Figures had no visible source, period, or definition.',
                  'A number that cannot be traced cannot be defended in a report.',
                ],
                [
                  <strong key="g3">A misleading headline metric</strong>,
                  '"Carbon Saved" was shown as 2730 PPM. Parts per million is a concentration, not a mass of avoided emissions.',
                  'A sustainability figure with the wrong unit undermines trust in the entire product.',
                ],
                [
                  <strong key="g4">Inconsistent source data</strong>,
                  'SmartMix explorations used mismatched units.',
                  'Mixing unvalidated values into a shared view would spread the error across the portal.',
                ],
              ]}
            />
            <P>
              These findings shaped the rest of the work. The problem was less about adding screens
              and more about making each number, status, and relationship{' '}
              <strong>trustworthy</strong>.
            </P>
            <P className="text-sm text-gray-500">
              Original hackathon dashboard (unchanged reference):{' '}
              <a
                href={`${FIGMA}?node-id=21-203`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: GREEN }}
              >
                Figma frame
              </a>
              .
            </P>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
          {[
            {
              src: '/images/Giatec/proto/products.png',
              alt: 'Product portfolio in the prototype',
              caption: 'After: products stay distinct destinations with connection health.',
            },
            {
              src: '/images/Giatec/proto/overview.png',
              alt: 'Overview orientation in the prototype',
              caption: 'After: overview leads with orientation, not only totals.',
            },
            {
              src: '/images/Giatec/proto/riverside.png',
              alt: 'Riverside project detail in the prototype',
              caption: 'After: one project identity connects evidence across products.',
            },
          ].map(shot => (
            <ProtoShot key={shot.src} {...shot} />
          ))}
        </div>

        {/* 5. Principles */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="md:col-span-1">
            <SectionTitle>Design principles</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-4">
            <P>These five principles guided every decision below.</P>
            <ol className="list-decimal pl-5 space-y-3 font-vietnam text-gray-700">
              <li>
                <strong className="text-gray-900">Unify without flattening.</strong> Keep each
                product&apos;s specialized analytics. Connect them through shared context instead of
                merging them into one ambiguous score.
              </li>
              <li>
                <strong className="text-gray-900">Make health actionable.</strong> Every status should
                come with a source, timestamp, owner, impact, and a recovery path.
              </li>
              <li>
                <strong className="text-gray-900">Make impact defensible.</strong> Keep units, period,
                provenance, estimates, and overlap limitations next to the numbers they qualify.
              </li>
              <li>
                <strong className="text-gray-900">Design the first day, not only the everyday.</strong>{' '}
                Cover empty workspaces, connection validation, and access management, not just a
                populated dashboard.
              </li>
              <li>
                <strong className="text-gray-900">Build a reusable foundation.</strong> Define native
                components, states, tokens, and text styles so the concept can scale.
              </li>
            </ol>
          </div>
        </div>

        {/* 6. Decisions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <SectionTitle>Key design decisions</SectionTitle>
          </div>
          <div className="md:col-span-3">
            <P>
              Each decision follows the same pattern: the problem I saw, what I designed, and the
              reasoning behind it.
            </P>
          </div>
        </div>

        <div className="md:pl-[25%] space-y-6 mb-10">
          <DecisionBlock
            title="Decision 1: Lead with orientation, not totals"
            problem="The original overview opened with aggregate metrics. Users had to work out for themselves where things stood."
            decision="The new overview answers three questions first: which products are connected, which source needs attention, and which projects are affected. A product portfolio keeps a clear route into MixPilot, SmartMix, and SmartRock."
            rationale="Orientation comes before analysis. A user who knows what is healthy and what is not can decide where to go next. Keeping the products as separate destinations avoids a single blended score that would hide product-specific meaning."
            tradeoff="The overview carries less headline data than the original. I accepted that in exchange for faster triage."
          />
          <DecisionBlock
            title="Decision 2: Use the project as the connective layer"
            problem="Batches, mixes, pours, and sensors come from different products but describe the same physical work."
            decision="The Riverside Tower project detail links all of them under one project identity. A traceability table shows how each record relates, and each measurement keeps its own source label."
            rationale="A shared project identity connects the evidence without implying that every product reports the same thing. The table makes the relationships inspectable, so users can verify a connection instead of trusting it."
            tradeoff="This depends on consistent project mapping across products. The connect-a-product flow is designed to address that, and full mapping states remain future work."
          />
        </div>

        <ProtoShot
          src="/images/Giatec/proto/riverside.png"
          alt="Riverside Tower project detail"
          caption="Prototype: Riverside Tower. Shared project context with source-labeled evidence and a delayed sensor callout."
        />

        <div className="md:pl-[25%] space-y-6 mb-10">
          <DecisionBlock
            title="Decision 3: Turn warnings into a recovery path"
            problem="A colored indicator tells a user something is wrong but not what, where, or what to do."
            decision="The example incident follows gateway GW-02 and sensor SR-218 at Riverside. The alert shows the last-seen time, the stale reading, the affected project, and recommended checks. The design discourages using stale strength data for release decisions and keeps engineering review in the loop. The user can move from the alert straight to the affected source in Integrations."
            rationale="In a construction context, a stale strength reading can have real consequences. The alert needs to communicate risk and guide action, not only report status. Status uses words alongside color so it does not rely on color alone."
            tradeoff="Alerts carry more content and take more space, which is why they live in a dedicated inbox with a linked detail view instead of a toast or banner."
          />
        </div>

        <ProtoShot
          src="/images/Giatec/proto/alerts.png"
          alt="Alerts inbox with gateway incident detail"
          caption="Prototype: alerts inbox. Critical gateway outage with recovery steps and linked sensor context."
        />

        <div className="md:pl-[25%] space-y-6 mb-10">
          <DecisionBlock
            title="Decision 4: Replace impressive totals with transparent estimates"
            problem="Large impact numbers are persuasive, but they are only useful if a reviewer can defend them."
            decision='I did not carry forward the PPM carbon figure. The concept uses explicit metric definitions, attributes estimates to the product that produces them, and keeps overlapping product impacts separate. The illustrative June dataset shows 502 t estimated CO₂e avoided (MixPilot), CAD $4,300 modeled material savings (MixPilot), and SmartRock context of 43 sensors, 56 tests, and 12 monitored projects. These are demo values, not measured outcomes.'
            rationale="Credibility compounds. One incorrect or overstated number can cost the trust that every correct number earned. Showing definitions, period, and ownership beside each figure lets a sustainability reviewer explain it in a report without caveats appearing after the fact."
            tradeoff='Separating overlapping impacts means the portal does not offer a single combined "total impact" number. I judged that an honest set of attributed figures is more useful than a larger, less defensible one.'
          />
        </div>

        <ProtoShot
          src="/images/Giatec/proto/impact.png"
          alt="Impact report builder preview"
          caption="Prototype: impact report builder. Attributed MixPilot estimates with definitions beside the numbers."
        />

        <div className="md:pl-[25%] space-y-6 mb-10">
          <DecisionBlock
            title="Decision 5: Design the first-use experience"
            problem="A portal that only looks good when fully populated fails on day one, which is exactly when an administrator forms their impression."
            decision="The concept includes an empty first-use overview that explains setup and shows honest missing-data states. It also includes a connect-product flow, with the authorization failure at step 2 fully designed: persistent field labels, masked credentials, the specific missing permission, a retry action, and a disabled Continue button."
            rationale="Error states are where trust is won or lost. Explaining exactly what failed and what happens next keeps users moving instead of stuck."
            tradeoff="Only the failure state is delivered in full detail in the concept. Product selection, successful authorization, project mapping, final review, and success confirmation remain future screens."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          <ProtoShot
            src="/images/Giatec/proto/welcome.png"
            alt="First-use welcome overview"
            caption="Prototype: first-use overview with honest empty states."
          />
          <ProtoShot
            src="/images/Giatec/proto/connect.png"
            alt="Connect product authorization failure"
            caption="Prototype: authorization failure at step 2 with recoverable guidance."
          />
        </div>

        {/* 7. AI */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="md:col-span-1">
            <SectionTitle>The AI assistant</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-5">
            <P>
              Because the hackathon prompt asked for a solution surrounding AI, I also created an AI
              chatbot for the portal during the three-day build. The chatbot is not included in the
              design prototype. Because of LLM usage, it could not be part of the prototyping phase, so
              the design concept focuses on the portal experience the assistant would live inside.
            </P>
            <P>
              <strong>Design intent for future work:</strong> the principles in this case study apply
              to the assistant too. An AI answer about usage, waste, or CO₂ impact would need the same
              units, period, source, and estimate labeling as any number in the portal.
            </P>
          </div>
        </div>

        {/* 8. Experience architecture */}
        <div
          id="solution"
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 scroll-mt-28"
        >
          <div className="md:col-span-1">
            <SectionTitle>Experience architecture</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-5">
            <P>Twelve screens cover three connected journeys.</P>
            <ul className="list-disc pl-5 space-y-2 font-vietnam text-gray-700">
              <li>
                <strong className="text-gray-900">Orient, investigate, recover.</strong> Overview,
                product portfolio, product analytics, project detail, alerts, and integrations.
              </li>
              <li>
                <strong className="text-gray-900">Configure, explain, report.</strong> Impact report
                builder and team and access.
              </li>
              <li>
                <strong className="text-gray-900">Start empty, connect a product.</strong> First-use
                overview and connect product validation.
              </li>
            </ul>
            <P>
              Below is the interactive React prototype built for this case study. Use the sidebar to
              move between screens. Demo data is illustrative.
            </P>
          </div>
        </div>

        <div className="mb-16">
          <Prototype />
        </div>

        <div className="md:pl-[25%] space-y-8 mb-16">
          <SimpleTable
            headers={['Screen', 'Purpose']}
            rows={[
              ['01 Ecosystem overview', 'Orient the user, summarize health, and surface affected projects.'],
              ['02 Product portfolio', 'Track the three products and their connection states.'],
              ['03 MixPilot analytics', 'Explore batching and source-attributed impact estimates.'],
              ['04 SmartMix analytics', 'Review production, consistency, and device health.'],
              ['05 SmartRock analytics', 'Review sensors, strength monitoring, and project progress.'],
              ['06 Riverside project detail', 'Trace batches, mix data, pours, and sensors in one context.'],
              ['07 Alerts inbox', 'Triage a gateway outage and its linked sensor delay.'],
              ['08 Impact report builder', 'Configure an illustrative report and inspect definitions.'],
              ['09 Team and access', 'Review membership and role-based access.'],
              ['10 Integrations and sources', 'Inspect connection health and a recovery state.'],
              ['11 Connect product and validation', 'Show authorization failure, field feedback, and retry guidance.'],
              ['12 First-use overview', 'Explain setup and show honest missing-data states.'],
            ]}
          />

          <H3>Primary journeys</H3>
          <P className="mb-6">
            Three flows map the operational story the decisions converged on.
          </P>
          <UserFlows />
        </div>

        {/* 9. Design system */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <SectionTitle>Design system</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-6">
            <P>
              A concept at this scale needs a foundation, so the delivered system makes the screens
              consistent and ready to extend.
            </P>
            <ul className="list-disc pl-5 space-y-2 font-vietnam text-gray-700">
              <li>
                <strong className="text-gray-900">Foundations:</strong> palette roles, typography,
                spacing, shape, accessibility intent, and chart grammar.
              </li>
              <li>
                <strong className="text-gray-900">UI kit and component library:</strong> 24 component
                definitions across 9 families, including buttons, inputs, navigation, status badges,
                and metric cards.
              </li>
              <li>
                <strong className="text-gray-900">44 variables:</strong> 29 color, 11 spacing, and 4
                radius, bound to the screens.
              </li>
              <li>
                <strong className="text-gray-900">37 text styles</strong> applied across screens and
                documentation.
              </li>
            </ul>
            <P>
              Accessibility rules in the system express design intent: visible focus, text paired with
              color for status, labeled chart axes, and clear treatment of missing and stale data. They
              have not been audited for compliance.
            </P>

            <H3>Brand alignment</H3>
            <P>
              After the initial concept, I received authoritative brand specifications and updated the
              system to match them.
            </P>
            <SimpleTable
              headers={['Role', 'Value']}
              rows={[
                ['Primary call to action', '#32863F'],
                ['Warning or cancellation', '#C35B20'],
                ['Remove or delete', '#D90C00CC (80% opacity)'],
                ['Focused or selected background', '#F2F9F1'],
                ['Required typeface', 'Museo Sans'],
                [
                  'Page title',
                  'Weight 400, 26 px size, 32 px line height, 0.25 px letter spacing',
                ],
              ]}
            />
            <ul className="list-disc pl-5 space-y-2 font-vietnam text-gray-700">
              <li>
                <strong className="text-gray-900">
                  Destructive actions are separate from critical status.
                </strong>{' '}
                Delete uses the specified translucent red, while operational critical status keeps its
                own treatment.
              </li>
              <li>
                <strong className="text-gray-900">Typeface substitution is temporary.</strong> Museo
                Sans was not available in the design and prototype environment, so Nunito Sans is used
                as a placeholder in the interactive HTML mockup. Page title measurements and weight are
                updated, and swapping the family is a pending step. This case study page keeps Castoro
                for headers and Be Vietnam Pro for body copy.
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { hex: '#32863F', label: 'Primary CTA' },
                { hex: '#C35B20', label: 'Warning' },
                { hex: '#D90C00', label: 'Delete 80%' },
                { hex: '#F2F9F1', label: 'Focus fill' },
              ].map(swatch => (
                <div key={swatch.label} className="flex items-center gap-2">
                  <span
                    className="w-10 h-10 rounded-lg border border-[rgb(229,229,229)]"
                    style={{
                      background: swatch.hex,
                      opacity: swatch.label.includes('80%') ? 0.8 : 1,
                    }}
                  />
                  <span className="text-xs font-vietnam text-gray-600">
                    {swatch.label}
                    <br />
                    {swatch.hex}
                  </span>
                </div>
              ))}
            </div>
            <P className="text-sm text-gray-500">
              Figma foundations, UI kit, and component library:{' '}
              <a
                href={FIGMA}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: GREEN }}
              >
                Giatec Hackathon file
              </a>
              .
            </P>
          </div>
        </div>

        {/* 10. Scope */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="md:col-span-1">
            <SectionTitle>Scope and limitations</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-5">
            <P>
              <strong>What the concept demonstrates:</strong> a coherent multi-product direction,
              connected project context, visible connection health, clearer analytics, attributed
              reporting, a reusable design foundation, and a working interactive prototype of the
              extended concept.
            </P>
            <P>
              <strong>What it does not demonstrate:</strong> real integrations, production
              authentication, exported PDFs, validated user behavior, accessibility conformance, or
              measured time, cost, or carbon benefits. No usability sessions were conducted. Some
              lifecycle states remain incomplete.
            </P>
            <P>
              The portal assets are proposed for this concept and are not a replacement for an official
              Giatec design system.
            </P>
            <P>
              <strong>A production scope would also need:</strong> responsive layouts, authentication
              and workspace switching, a project index, detailed permissions, complete connection
              lifecycle states, loading and error coverage, and report lifecycle states.
            </P>
          </div>
        </div>

        {/* 11. Validation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="md:col-span-1">
            <SectionTitle>Validation plan</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-5">
            <P>
              The next step is a short task-based walkthrough with representative internal teammates.
              The tasks map directly to the design question:
            </P>
            <ol className="list-decimal pl-5 space-y-2 font-vietnam text-gray-700">
              <li>Identify which product is degraded.</li>
              <li>Trace Riverside&apos;s delayed reading to its source.</li>
              <li>Explain which system owns the CO₂e estimate.</li>
              <li>Recover from an authorization error.</li>
              <li>Prepare a scoped report.</li>
            </ol>
            <P>
              <strong>Measures:</strong> task completion, navigation mistakes, and comprehension of
              stale and estimated values. These are planned tasks, not results.
            </P>
            <P>
              <strong>Success signal:</strong> a user can complete the investigation without leaving
              project context and can correctly explain what is estimated and what is measured.
            </P>
          </div>
        </div>

        {/* 12. Reflection */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <SectionTitle>Reflection</SectionTitle>
          </div>
          <div className="md:col-span-3 space-y-8">
            <P>
              The strongest extension of the hackathon idea was not a bigger dashboard. It was a shared
              context layer. Products stay distinct, projects connect the evidence, and the portal
              makes uncertainty visible.
            </P>
            <div className="space-y-6">
              <div>
                <H3>Trust is a design material.</H3>
                <P>
                  Units, sources, timestamps, and definitions shape whether a number can be used, and
                  they deserve the same care as layout and color.
                </P>
              </div>
              <div>
                <H3>Auditing before extending pays off.</H3>
                <P>
                  Reviewing the original dashboard exposed a wrong unit and mismatched data early,
                  before they could spread through a larger system.
                </P>
              </div>
              <div>
                <H3>Honest scope is a strength.</H3>
                <P>
                  Marking what is a hypothesis, what is illustrative, and what is still unbuilt makes
                  the rest of the work more credible.
                </P>
              </div>
            </div>
            <P>
              The next milestone is to complete and wire the missing lifecycle states, then test
              whether the shared context helps people make clearer decisions.
            </P>
          </div>
        </div>
      </CaseStudyShell>
    </div>
  );
};

export default GiatecCaseStudy;
