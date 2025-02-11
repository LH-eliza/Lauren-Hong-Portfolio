const About = () => {
    return (
      <div className="py-16">
        <div className="flex gap-8 mb-16">
          <div className="flex-1">
            <h1 className="text-6xl text-blue-500 font-medium mb-6 mt-40 font-chewie">
              Hi there! <span role="img" aria-label="winking face">🤗</span>
            </h1>
            <p className="mt-10 text-lg text-gray-700 leading-relaxed font-chewie">
              How are you! My name is Lauren and I'm a Software Engineering student attending the 
              University of Ottawa! I enjoy creating technologies that allows for accessibility for 
              everyone in hopes that people of all ages and types can cross all barricades.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 rounded-lg aspect-square"></div>
          </div>
        </div>
  
        <div>
          <h2 className="text-5xl text-[#F4511E] mb-6 font-chewie">Outside of School and Work</h2>
          <p className="mb-12 text-lg text-gray-700 font-chewie">
            I love to explore my creative side when I'm not working. I've been video editing, 
            animating, baking, cooking, language learning, and 3D printing. There's so much 
            I would love to accomplish outside of my regular working schedule!
          </p>
  
          <section className="mb-16 font-chewie">
            <h3 className="text-4xl text-[#558B2F] mb-4">
              Baking <span role="img" aria-label="knife">🔪</span>
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              I've been baking for 15 years (that's 75% of my life!)
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-gray-200 rounded-lg"></div>
              <div className="grid grid-rows-2 gap-4">
                <div className="aspect-[2/1] bg-gray-200 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>
  
          <section>
            <h3 className="text-4xl text-[#558B2F] mb-4 font-chewie">
              Cooking <span role="img" aria-label="snake">🐍</span>
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              Cooking is something I'm good at, but some recipes still scare me
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-gray-200 rounded-lg"></div>
              <div className="grid grid-rows-2 gap-4">
                <div className="aspect-[2/1] bg-gray-200 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                  <div className="aspect-square bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default About;