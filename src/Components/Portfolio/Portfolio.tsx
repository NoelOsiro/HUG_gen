import React from 'react';

const Portfolio = () => {
  const projects = [
    { id: 1, filter: 'children', title: 'Food programme', category: 'Children', image: 'app1.jpg' },
    { id: 2, filter: 'youth', title: 'Creative Arts', category: 'Youth', image: 'web3.jpg' },
    { id: 3, filter: 'children', title: 'Education', category: 'Children', image: 'app2.jpg' },
    { id: 4, filter: 'children', title: 'Talent show', category: 'Youth', image: 'card2.jpg' },
    { id: 5, filter: 'women', title: 'Business Education', category: 'Women', image: 'web2.jpg' },
    { id: 6, filter: 'children', title: 'Reproductive Health', category: 'Children', image: 'app3.jpg' },
    { id: 7, filter: 'youth', title: 'Education', category: 'Youth', image: 'card1.jpg' },
    { id: 8, filter: 'youth', title: 'Skills search', category: 'Youth', image: 'card3.jpg' },
    { id: 9, filter: 'women', title: 'Clinic check ups', category: 'Women', image: 'web1.jpg' },
  ];

  return (
    <section id="portfolio" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3 className="section-title">Projects</h3>
        </header>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-children">Children</li>
              <li data-filter=".filter-women">Women</li>
              <li data-filter=".filter-youth">Youth</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {projects.map(project => (
            <div
              key={project.id}
              className={`col-lg-4 col-md-6 portfolio-item filter-${project.filter}`}
            >
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src={`assets/img/portfolio/${project.image}`}
                    className="img-fluid"
                    alt=""
                  />
                  <a
                    href={`assets/img/portfolio/${project.image}`}
                    data-lightbox="portfolio"
                    data-title={project.title}
                    className="link-preview"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <a href="portfolio-details.html" className="link-details" title="More Details">
                    <i className="bi bi-link"></i>
                  </a>
                </figure>

                <div className="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">{project.title}</a>
                  </h4>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
