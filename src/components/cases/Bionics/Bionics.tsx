import CaseStudy from '../../../assets/Header';

const BionicsComponent = () => {
  return (
    <div>
      <CaseStudy
        title="Making Life More Accessible Through Software-Hardware Interaction"
        subtitle="Designing and developing a real-time app and programming a exo arm for people to access their daily needs"
        metadata={{
          period: 'April 2024 - Present',
          role: 'Product Designer, Embedded Systems & Android Mobile Developer',
          team: '4 Designers, 9 Developers, 3 Embedded Systems Developer, 12 Mechanical Engineers',
          tools:
            'Figma, SolidWorks, Fusion 360, Kotlin, Firebase, Arduino, Raspberry Pi, ESP32, Python',
        }}
        githubLink="https://github.com/uOttawaBionics/Software"
        heroImage="/images/Bionics/bionics.svg"
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl text-blue-700 font-serif flex flex-col">COMING SOON</h2>
      </div>
    </div>
  );
};

export default BionicsComponent;
