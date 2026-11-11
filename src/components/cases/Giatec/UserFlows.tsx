'use client';

import React, { useEffect, useId } from 'react';
import mermaid from 'mermaid';

const flows = [
  {
    title: 'Orient → investigate → recover',
    caption: 'How a degraded SmartRock source becomes an actionable recovery path.',
    chart: `
flowchart LR
  A[Ecosystem overview] --> B[Alert: GW-02 stale]
  B --> C[Riverside project detail]
  C --> D[Trace SR-218 source]
  D --> E[Review connection]
  E --> F[Recover / re-authorize]
  B --> E
  classDef node fill:#F2F9F1,stroke:#32863F,stroke-width:1.5px,color:#111
  class A,B,C,D,E,F node
`,
  },
  {
    title: 'Configure → explain → report',
    caption: 'Scoped reporting with provenance kept beside attributed estimates.',
    chart: `
flowchart LR
  A[Overview / project] --> B[Impact report builder]
  B --> C[Select period + metrics]
  C --> D[Generate preview]
  D --> E[Inspect definitions]
  E --> F[Save / export intent]
  classDef node fill:#F2F9F1,stroke:#32863F,stroke-width:1.5px,color:#111
  class A,B,C,D,E,F node
`,
  },
  {
    title: 'Start empty → connect a product',
    caption: 'First-use path emphasizing recoverable authorization failure.',
    chart: `
flowchart TD
  A[First-use overview] --> B[Connect a product]
  B --> C[Choose MixPilot / SmartMix / SmartRock]
  C --> D[Authorize]
  D -->|Success| E[Map projects]
  D -->|Failure| F[Show missing permission]
  F --> G[Retry with values preserved]
  G --> D
  E --> H[Review]
  H --> I[Connected overview]
  classDef node fill:#F2F9F1,stroke:#32863F,stroke-width:1.5px,color:#111
  classDef warn fill:#FFF3E0,stroke:#C35B20,stroke-width:1.5px,color:#111
  class A,B,C,D,E,H,I node
  class F,G warn
`,
  },
];

const UserFlows: React.FC = () => {
  const uid = useId().replace(/:/g, '');

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        padding: 12,
      },
    });

    mermaid.run({ querySelector: `.giatec-flow-${uid}` });
  }, [uid]);

  return (
    <div className="space-y-10">
      {flows.map(flow => (
        <div key={flow.title}>
          <h3 className="text-xl mb-2 font-castoro">{flow.title}</h3>
          <p className="text-gray-600 font-vietnam mb-4">{flow.caption}</p>
          <div className="bg-[#FAFBFA] border border-[rgb(229,229,229)] rounded-2xl p-4 sm:p-6 overflow-auto">
            <div className={`mermaid giatec-flow-${uid}`}>{flow.chart}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserFlows;
