import React, { useState, useEffect} from 'react';
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
    image.src = 'assets/img/about.jpg';
    image.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

  // Render the component only when images are loaded
  if (!imagesLoaded) {
    return null;
  }

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
          <Parallax
              bgImage="assets/img/about.jpg"
              bgImageAlt="About Image"
              strength={200} // Adjust the parallax effect strength
            >
              <div className="about-img"></div>
            </Parallax>
          </div>
          <div className="col-lg-6">
            <div className="section-header">
              <p>Learn About Us</p>
              <h2>Community Protection, Education and Empowerment</h2>
            </div>
            <div className="about-tab">
              <ul className="nav nav-pills nav-justified">
                {tabData.map(tab => (
                  <li className="nav-item" key={tab.id}>
                    <button
                      className={`nav-link ${tab.id === activeTab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content">
                {tabData.map(tab => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`container tab-pane ${tab.id === activeTab ? 'active' : 'fade'}`}
                  >
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


                   