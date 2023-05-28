import React from 'react';
import './about.css';

const aboutData = [
  {
    imgSrc: 'assets/img/about-mission.jpg',
    iconClass: 'bi bi-bar-chart',
    title: 'Our Mission',
    description: 'Our organization is dedicated to promoting the holistic wellbeing of children, youths, and women. We believe in nurturing their spiritual, emotional, and physical needs while ensuring the promotion and protection of their rights. Through our programs and initiatives, we aim to create an environment where their spiritual growth is supported, their emotional well-being is nurtured, and their physical health is prioritized. We work tirelessly to advocate for and uphold their rights, ensuring that they are treated with dignity, respect, and equality.'
  },
  {
    imgSrc: 'assets/img/about-plan.jpg',
    iconClass: 'bi bi-brightness-high',
    title: 'Our Plan',
    description: 'Create a safe society with equal opportunities for children, education, employment, and gender equality.Our organization is dedicated to promoting the holistic wellbeing of children, youths, and women. We believe in nurturing their spiritual, emotional, and physical needs while ensuring the promotion and protection of their rights. Through our programs and initiatives, we aim to create an environment where their spiritual growth is supported, their emotional well-being is nurtured, and their physical health is prioritized.'
  },
  {
    imgSrc: 'assets/img/about-vision.jpg',
    iconClass: 'bi bi-calendar4-week',
    title: 'Our Vision',
    description: 'We are an organization that aims to address the rising cases of child abuse, high rates of school dropout, especially among girls at the primary level of education, limited access to sexual and reproductive health and rights for adolescents, limited access to orphans and vulnerable children in the community, high rates of unemployment among youth, and violations of women rights.'
  }
];

const About = () => {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h3>About Us</h3>
          <p>We are an organization that aims to address the rising cases of child abuse,
            high rates of school dropout especially among girls at the primary level of education,
            limited access to sexual and reproductive health and rights for adolescents,
            orphans and vulnerable children in the community and tackle
            high rates of unemployment among youth, and violations of women's rights.</p>
        </header>

        <div className="row about-cols">
          {aboutData.map((item, index) => (
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}>
              <div className="about-col">
                <div className="img">
                  <img src={item.imgSrc} alt="" className="img-fluid" />
                  <div className="icon"><i className={item.iconClass}></i></div>
                </div>
                <h2 className="title"><a href=" ">{item.title}</a></h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
