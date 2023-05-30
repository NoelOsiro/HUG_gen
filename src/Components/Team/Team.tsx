import React from 'react';
import { Link } from 'react-router-dom';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Isaiah Nyandwaro',
      position: 'Executive Director',
      image: 'assets/img/izzo1.JPG',
      slug: 'executive-director',
    },
    {
      name: 'Linet Awuor',
      position: 'Administrator',
      image: 'assets/img/linet1.JPG',
      slug: 'admininistrator',
    },
    {
      name: 'Mike Dimo',
      position: 'Operations and Finance',
      image: 'assets/img/dimo1.jpg',
      slug: 'opsfinance',
    },
    {
      name: 'Noel Osiro',
      position: 'Information Systems',
      image: 'assets/img/team-4.jpg',
      slug: 'infosys',
    },
    {
      name: 'Daniel Mogaka',
      position: 'Programmes Co-ordinator',
      image: 'assets/img/dan.jpeg',
      slug: 'progscord',
    },
    {
      name: 'Phostine Ondimu',
      position: 'Human Resource',
      image: 'assets/img/phostine.jpeg',
      slug: 'hr',
    },
  ];
  return (
    <section id="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Team</h3>
          <p>
          Our dedicated team of passionate individuals in our Community Based Organization works
          tirelessly to empower and uplift our community, bringing positive change through 
          collaborative efforts and impactful initiatives.
          </p>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >
              <Link to={`/team/${member.slug}`}>
              <div className="member" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <img src={member.image} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>{member.name}</h4>
                    <span>{member.position}</span>
                    <div className="social">
                      {/* eslint jsx-a11y/anchor-is-valid: 0 */}
                      <a><i className="bi bi-twitter"></i></a>
                      <a><i className="bi bi-facebook"></i></a>
                      <a><i className="bi bi-instagram"></i></a>
                      <a><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
