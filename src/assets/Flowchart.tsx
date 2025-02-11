import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const FlowchartSection = () => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h3 className="text-xl sm:text-2xl mb-4 font-libre">User Flow Visualization</h3>
      <div className="bg-white p-4 rounded-xl shadow-lg overflow-auto">
        <div className="mermaid">
          {`
          graph TD
              A[User Visits Documentation] --> B{Has Specific Question?}
              B -->|Yes| C[Use Natural Language Search]
              B -->|No| D[Browse Topics]
              
              C --> E{Found Answer?}
              D --> E
              
              E -->|Yes| F[View Documentation]
              E -->|No| G[Ask Chatbot]
              
              F --> H{Need Implementation Help?}
              G --> H
              
              H -->|Yes| I[Get Code Examples]
              H -->|No| J[Rate Experience]
              I --> J
              
              J --> K{Satisfied?}
              K -->|Yes| L[End Session]
              K -->|No| M[Provide Feedback]
              M --> N[Improvement Loop]
              N --> O[Update Knowledge Base]

              classDef default fill:#f9f9f9,stroke:#333,stroke-width:2px
              classDef question fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
              classDef action fill:#f5f5f5,stroke:#616161,stroke-width:2px
              
              class B,E,H,K question
              class C,D,F,G,I,J,L,M,N,O action
          `}
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mt-4 font-libre">
        Interactive flowchart showing the user journey through our documentation system
      </p>
    </div>
  );
};

export default FlowchartSection;