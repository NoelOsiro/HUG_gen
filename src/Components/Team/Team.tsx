import React from 'react';

const teamMembers = [
  {
    image: 'assets/img/team-1.jpg',
    name: 'Isaiah Nyandwaro',
    role: 'Executive Director',
  },
  {
    image: 'assets/img/team-6.jpg',
    name: 'Mike Dimo',
    role: 'Operations and Finance',
  },
  {
    image: 'assets/img/team-3.jpg',
    name: 'Phostine Ondimu',
    role: 'Human Resources',
  },
  {
    image: 'assets/img/team-5.jpg',
    name: 'Daniel Mogaka',
    role: 'Programmes Coordinator',
  },
  {
    image: 'assets/img/team-2.jpg',
    name: 'Linet Awuor',
    role: 'Administrator',
  },
  {
    image: 'assets/img/team-4.jpg',
    name: 'Noel Osiro',
    role: 'ICT Engineer',
  },
];

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Meet Our Team</p>
          <h2>Awesome guys behind our charity activities</h2>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="team-item">
                <div className="team-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-text">
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                  <div className="team-social">
                    <a href="/twitt" title='social'><i className="fab fa-twitter"></i></a>
                    <a href="/twitt" title='social'><i className="fab fa-facebook-f"></i></a>
                    <a href="/twitt" title='social'><i className="fab fa-linkedin-in"></i></a>
                    <a href="/twitt" title='social'><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
