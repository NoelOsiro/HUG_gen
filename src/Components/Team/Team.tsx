import React from 'react';
import { Link } from 'react-router-dom';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Isaiah Nyandwaro',
      phone: '+254 714 956717',
      email: '@humblegeneration.co.ke',
      position: 'Executive Director',
      image: 'assets/img/izzo1.JPG',
      slug: 'executive-director',
      bio: 'Isaiah is a strategic leader with vast experience working in different communities in Kenya for close to 15 years.His expertise covers multiple functional areas,including organizational strategy and development, financial management, budgeting and budget implementation, procurement, operations, internal controls systems design and set up, grants and contracts management, sub-awards management, project lifecycle management, HR, and IT systems management. He has worked with different organizations including; Nairobi Baptist Church, Almasi International school, Emerald International School, Compassion International, Spur Afrika, Endless Frontier Foundation and Karura Community Chapel, among others.',
    },
    {
      name: 'Linet Awuor',
      phone: '+254 112904413',
      email: '@humblegeneration.co.ke',
      position: 'Administrator',
      image: 'assets/img/linet1.JPG',
      slug: 'administrator',
      bio: 'Having volunteered in a number of organizations within Kenya including; Compassion International, Endless Frontier, Karura Community Chapel and Wholistic Outdoor Camps, Linet brings a wealth of experience in administrative work which will enrich the organization. He is passionate and well versed in working with teenagers and women in communities. With the skills she has accumulated over years, her interest will help organize and grow the foundation to greater heights.',
    },
    {
      name: 'Mike Dimo',
      phone: '+254 724 696342',
      email: '@humblegeneration.co.ke',
      position: 'Operations and Finance',
      image: 'assets/img/dimo1.jpg',
      slug: 'opsfinance',
      bio: 'I am a documentary filmmaker and a cinematographer by profession, holding various projects under my name, the major one being Chromes dark Rising a German Super hero film, Pojkdrommen (A boy and a dream) a Swedish soccer documentary and personal projects including commercials. I have aslo worked with Non-Government Organizations like ActionAid Kenya, UsawaKe, Kenya Lend a Hand, Global Platfrom Kenya, ViceVersa Global, Community Mappers, CBCK, National Aids Control Council (NACC) and Kenya Water for Health Organization (KWAHO). My major is community development documentaries where I focus on Sports and Arts, social and Economic structures and Humanitarian projects',
    },
    {
      name: 'Noel Osiro',
      phone: '+254 729732440',
      email: '@humblegeneration.co.ke',
      position: 'Information Systems',
      image: 'assets/img/team-4.jpg',
      slug: 'infosys',
      bio: 'As a highly skilled and experienced Cloud Solutions Architect, I specialize in providing cutting-edge IT solutions for community-based organizations. With a strong background in cloud technologies and a passion for empowering communities, I am dedicated to leveraging technology to drive positive change. My expertise includes designing and implementing scalable cloud architectures, optimizing cloud infrastructure for cost-efficiency, ensuring data security and privacy, and integrating cloud solutions with existing systems. I am committed to helping community-based organizations leverage the power of cloud technology to enhance their operations, streamline processes, and ultimately make a lasting impact in the communities they serve.',
    },
    {
      name: 'Daniel Mogaka',
      phone: '+254 720750837',
      email: '@humblegeneration.co.ke',
      position: 'Programmes Co-ordinator',
      image: 'assets/img/dan.jpeg',
      slug: 'progscord',
      bio: 'A multi-talented professional with a passion for creativity and community engagement. As a creative director, producer, and cinematographer, he brings visions to life and creates captivating experiences. With expertise in tour guiding, administration, and team building, my skills extend beyond the creative realm. He is also an entrepreneur and a dedicated volunteer in various community-building projects. Diverse talents and commitment to making a positive impact make him a dynamic force in the industry and a valued contributor to society.',
    },
    {
      name: 'Phostine Ondimu',
      phone: '+254 720 549898',
      email: '@humblegeneration.co.ke',
      position: 'Human Resource',
      image: 'assets/img/phostine.jpeg',
      slug: 'hr',
      bio: 'Phostine Ondimu is a registered community health nurse specializing in HIV testing services. With a keen eye for community issues related to HIV, she combines her healthcare expertise with strong human resource skills to make a positive impact. Passionate and dedicated, Phostine aims to improve the lives of those affected by HIV and foster a collaborative environment for effective healthcare initiatives.',
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
