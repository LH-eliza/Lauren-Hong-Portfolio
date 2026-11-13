'use client';

import React from 'react';

type Tone = 'strong' | 'partial' | 'gap' | 'unknown' | 'concept';

interface Cell {
  tone: Tone;
  text: string;
}

const TONES: Record<Tone, { label: string; bg: string; border: string }> = {
  strong: { label: 'Covers well', bg: '#B3EFBD', border: '#7CCB8B' },
  partial: { label: 'Partial', bg: '#FFE299', border: '#E8C45E' },
  gap: { label: 'Gap', bg: '#FFB8A8', border: '#EE8E78' },
  unknown: { label: 'Not evidenced', bg: '#E6E6E6', border: '#C9C9C9' },
  concept: { label: 'Concept', bg: '#A8DAFF', border: '#73BDF2' },
};

const WHY_BG = '#D3BDFF';
const WHY_BORDER = '#B497F0';

const players = [
  'Giatec tools today',
  'Command Alkon COMMANDseries',
  'Verifi (Saint-Gobain)',
  'Maturix (Sensohive)',
  'Giatec 360 (announced)',
  'Ecosystem Portal (my concept)',
];

const playerNotes = [
  'SmartMix, MixPilot, SmartRock',
  'Quote to cash for ready-mix',
  'In-transit management',
  'Wireless slab sensors',
  'Unified platform',
  'Prototype, not yet validated',
];

interface Row {
  label: string;
  cells: Cell[];
  why: string;
}

const rows: Row[] = [
  {
    label: 'Mix design and batch record',
    cells: [
      { tone: 'strong', text: 'SmartMix holds the mix design and the plant batch record.' },
      {
        tone: 'partial',
        text: 'Covers production and quality control and links to batching tools. SmartMix plugs in for deeper mix analysis.',
      },
      { tone: 'gap', text: 'Not part of the product. It starts when the truck is loaded.' },
      { tone: 'gap', text: 'The coverage does not mention mix design.' },
      { tone: 'strong', text: 'Links mix design and batch records in one platform.' },
      { tone: 'concept', text: 'Mix design appears as the first layer of the pour timeline.' },
    ],
    why: 'A quality manager cannot judge a mix without knowing how it behaved after it left the plant.',
  },
  {
    label: 'Delivery readings in the truck',
    cells: [
      { tone: 'strong', text: 'MixPilot reads slump and temperature inside the truck.' },
      {
        tone: 'partial',
        text: 'Dispatch view and in-cab telematics. Slump and temperature readings are not described on its page.',
      },
      {
        tone: 'strong',
        text: 'Truck sensors track slump, temperature, drum speed and additions, and adjust water or admixture in transit.',
      },
      { tone: 'gap', text: 'The coverage does not mention delivery.' },
      { tone: 'strong', text: 'Delivery and dispatch data, plus slump and strength deviation alerts.' },
      { tone: 'concept', text: 'Delivery readings sit on the same axis as the mix and the slab.' },
    ],
    why: 'A dispatcher can only fix slump drift if they learn later whether it mattered. Today the story stops at the truck.',
  },
  {
    label: 'Strength and temperature in the slab',
    cells: [
      { tone: 'strong', text: 'SmartRock tracks temperature and strength in the slab.' },
      { tone: 'gap', text: 'Not described on its product page. Field data arrives through partners.' },
      { tone: 'gap', text: 'Covers transit only. The goal is a load that arrives ready to pour.' },
      {
        tone: 'strong',
        text: 'Wireless sensors report temperature every 10 minutes and estimate maturity and strength.',
      },
      { tone: 'strong', text: 'In-field quality results and in-place strength from SmartRock.' },
      { tone: 'concept', text: 'Strength curve shown against the target with a verdict first.' },
    ],
    why: 'A site engineer strips forms based on strength. A late or unexplained curve costs schedule, not just paperwork.',
  },
  {
    label: 'One ticket or pour ID returns the whole story',
    cells: [
      { tone: 'gap', text: 'Three apps, three vocabularies. The engineer matches the ticket by hand.' },
      {
        tone: 'partial',
        text: 'Follows a ticket from quote to billing. That is a commercial thread, not a performance one.',
      },
      { tone: 'partial', text: 'Visibility across the delivery cycle only.' },
      {
        tone: 'gap',
        text: 'Starts from the sensor in the slab. A link back to the ticket is not described.',
      },
      {
        tone: 'strong',
        text: 'Described as a single system of record, with ticket, batch and delivery data moving between systems.',
      },
      { tone: 'concept', text: 'Type one ticket or pour ID and get mix, delivery and strength together.' },
    ],
    why: 'A strength shortfall is a question about one pour. People ask it by ticket, so the tool should answer it by ticket.',
  },
  {
    label: 'Shared time axis with the source of every number',
    cells: [
      { tone: 'gap', text: 'No shared axis. Engineers line up timestamps in a spreadsheet.' },
      { tone: 'unknown', text: 'A cross-stage timeline is not described publicly.' },
      { tone: 'unknown', text: 'The page does not describe how data is displayed.' },
      {
        tone: 'unknown',
        text: 'Streams temperature to any connected device. A cross-stage view is not described.',
      },
      {
        tone: 'unknown',
        text: 'A shared live view is claimed. A pour timeline and source labels are not described.',
      },
      { tone: 'concept', text: 'One time axis. Every number names the product it came from.' },
    ],
    why: 'Cause is a question of order. If drift came before the strength lag, suspect delivery. Seeing the source is what earns trust.',
  },
];

const CompetitorMatrix: React.FC = () => {
  return (
    <figure className="mb-10">
      <div className="mb-4 flex flex-wrap gap-2" aria-label="Legend">
        {(Object.keys(TONES) as Tone[]).map(t => (
          <span
            key={t}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-vietnam text-gray-800"
            style={{ background: TONES[t].bg, borderColor: TONES[t].border }}
          >
            {TONES[t].label}
          </span>
        ))}
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-vietnam text-gray-800"
          style={{ background: WHY_BG, borderColor: WHY_BORDER }}
        >
          Why it matters
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[rgb(229,229,229)] bg-[#F9F9F9]">
        <table className="min-w-[1500px] w-full border-separate border-spacing-3 text-left">
          <caption className="sr-only">
            Competitor research matrix. Rows are the capabilities a user needs to trace one pour.
            Columns are the products and platforms compared, with a final column explaining why each
            row matters.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="sticky left-0 z-10 w-44 bg-[#F9F9F9] align-bottom" />
              {players.map((p, i) => (
                <th key={p} scope="col" className="w-52 align-bottom pb-1">
                  <div className="font-vietnam text-sm font-semibold text-gray-900">{p}</div>
                  <div className="font-vietnam text-xs font-normal text-gray-500">
                    {playerNotes[i]}
                  </div>
                </th>
              ))}
              <th scope="col" className="w-52 align-bottom pb-1">
                <div className="font-vietnam text-sm font-semibold text-gray-900">
                  Why this row matters
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-[#F9F9F9] pr-2 align-top font-vietnam text-sm font-semibold text-gray-900"
                >
                  {row.label}
                </th>
                {row.cells.map((cell, i) => (
                  <td
                    key={`${row.label}-${players[i]}`}
                    className="align-top rounded-md border p-3 shadow-sm"
                    style={{ background: TONES[cell.tone].bg, borderColor: TONES[cell.tone].border }}
                  >
                    <div className="mb-1 font-vietnam text-[10px] font-semibold uppercase tracking-wider text-gray-800">
                      {TONES[cell.tone].label}
                    </div>
                    <div className="font-vietnam text-[13px] leading-snug text-gray-900">
                      {cell.text}
                    </div>
                  </td>
                ))}
                <td
                  className="align-top rounded-md border p-3 shadow-sm"
                  style={{ background: WHY_BG, borderColor: WHY_BORDER }}
                >
                  <div className="font-vietnam text-[13px] leading-snug text-gray-900">{row.why}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figcaption className="mt-3 text-sm text-gray-500 font-vietnam">
        Research matrix built from sticky notes in FigJam. Evidence comes from public product pages
        and press releases, not hands-on testing, so &quot;not evidenced&quot; means the public
        sources are silent, not that the feature is missing.
      </figcaption>
    </figure>
  );
};

export default CompetitorMatrix;
