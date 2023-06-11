import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from './teams';
import './teams.css';

const Teams = () => {
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
              <Link
                to={{
                    pathname: `/team/${member.slug}`,
                  }}
                state={member}>
              <div className="member" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <img src={member.image} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>{member.name}</h4>
                    <span>{member.position}</span>
                    <div className="social d-flex">
                      {/* eslint jsx-a11y/anchor-is-valid: 0 */}
                      <span><i className="bi bi-twitter"></i></span>
                      <span><i className="bi bi-facebook"></i></span>
                      <span><i className="bi bi-instagram"></i></span>
                      <span><i className="bi bi-linkedin"></i></span>
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
