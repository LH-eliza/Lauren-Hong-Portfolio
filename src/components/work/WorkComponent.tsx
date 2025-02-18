import React from 'react';

const WorksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-medium font-chewie text-[#1E658F] mb-8">Works</h1>

      <section className="mb-16">
        <h2 className="text-2xl text-[#1E658F] mb-8 font-chewie">Case Studies & Style Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Enhancing Solace Documentation Navigation',
              image: '/images/Solace/SolaceDocs.svg',
              tags: ['graphic', 'full-stack', 'ux/ui'],
              path: '/solace',
            },
            {
              title: 'Refreshing the Hackathon Application Experience',
              image: '/images/uottapp_tn.svg',
              tags: ['illustration', 'full-stack', 'ux/ui'],
              path: '/uotta-app',
            },
            {
              title: 'Creating the One-Stop-Shop for Sponsorship Needs',
              image: '/images/uottashop/uOttaShop.svg',
              tags: ['graphic', 'full-stack', 'ux/ui'],
              path: '/uottashop',
            },
            {
              title: 'Making Life More Accessible Through Software-Hardware Interaction',
              image: '/images/Bionics/bionics.png',
              tags: ['embedded', 'full-stack', 'ux/ui', 'simulation'],
              path: '/bionics',
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-chewie text-gray-900">{item.title}</h3>
                <div className="mt-2 flex gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={item.path}>
                  <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
                    View Work
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
