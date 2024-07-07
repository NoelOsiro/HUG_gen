'use client'
import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

const tabData = [
  {
    id: 'tab-content-1',
    title: 'About',
    content: 'We are an organization that aims to address the rising cases of child abuse, high rates of school dropout especially among girls at the primary level of education, limited access to sexual and reproductive health and rights for adolescents, orphans and vulnerable children in the community and tackle high rates of unemployment among youth, and violations of women\'s rights.',
  },
  {
    id: 'tab-content-2',
    title: 'Mission',
    content: 'Aiming for an equitable society: equal opportunities in education, jobs, and gender. Our focus is holistic well-being, rights protection, and growth through programs.',
  },
  {
    id: 'tab-content-3',
    title: 'Vision',
    content: 'We are an organization that aims to address the rising cases of child abuse, high rates of school dropout, especially among girls at the primary level of education, limited access to sexual and reproductive health and rights for adolescents, limited access to orphans and vulnerable children in the community, high rates of unemployment among youth, and violations of women rights.',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = '/img/about.jpg';
    image.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

  // Render the component only when images are loaded
  if (!imagesLoaded) {
    return null;
  }

  return (
    <section className="relative py-32 lg:py-36 bg-white w-full">
      <div className="container mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 md:h-full">
            <Parallax
              bgImage="/img/about.jpg"
              bgImageAlt="About Image"
              strength={200}
              className="h-full"
            >
              <div className="bg-cover bg-center h-full"></div>
            </Parallax>
          </div>
          <div>
            <div className="text-center md:text-left">
              <p className="text-yellow-500 text-2xl">Learn About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Protection, Education and Empowerment</h2>
            </div>
            <div className="mt-8">
              <ul className="flex justify-center md:justify-start mb-4">
                {tabData.map(tab => (
                  <li className="mr-4" key={tab.id}>
                    <button
                      className={`text-base md:text-lg px-4 py-2 rounded-full focus:outline-none ${tab.id === activeTab ? 'bg-yellow-500 text-gray-800' : 'bg-gray-300 text-gray-600 hover:bg-yellow-500 hover:text-gray-800'}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                {tabData.map(tab => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`mt-4 ${tab.id === activeTab ? '' : 'hidden'}`}
                  >
                    <p className="text-base md:text-lg">{tab.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
