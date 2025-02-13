import React from 'react';
import CaseStudy from '../../../assets/Header';

const AppSite = () => {
  return (
    <div>
      <CaseStudy
        title="Making Life More Accessible Through Software-Hardware Interaction"
        subtitle="Designing and developing a real-time app and programming a exo arm for people to access their daily needs"
        metadata={{
          period: 'April 2024 - Present',
          role: 'UI Designer, Embedded Systems & Android Mobile Developer',
          team: '4 Designers, 9 Developers, 3 Embedded Systems Developer, 12 Mechanical Engineers',
          tools:
            'Figma, SolidWorks, Fusion 360, Kotlin, Firebase, Arduino, Raspberry Pi, ESP32, Python',
        }}
        githubLink=""
        heroImage="/images/Bionics/bionics.svg"
      />
    </div>
  );
};

export default AppSite;
