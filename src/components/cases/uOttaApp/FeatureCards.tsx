import React from 'react';

interface FeatureCardProps {
  title: string;
  imageUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-video">
        <img
          src="/api/placeholder/800/450"
          alt="Feature preview"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-blue-700 text-lg text-center">{title}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Students can choose a characters...',
      imageUrl: '/feature1.jpg',
    },
    {
      title: 'Create their own portfolios...',
      imageUrl: '/feature2.jpg',
    },
    {
      title: '...Easily enter all personal information',
      imageUrl: '/feature3.jpg',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} imageUrl={feature.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default Features;
