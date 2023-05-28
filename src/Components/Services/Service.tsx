import React from 'react';
import './serv.css';

const serviceData = [
  {
    icon: 'bi bi-person-lock',
    title: 'Child Protection and Abuse Prevention',
    description: 'Actively collaborates with government agencies, NGOs, and communities to raise awareness about child abuse prevention and establish reporting mechanisms, while conducting comprehensive training programs for parents, teachers, and community members to effectively identify and address child abuse cases.',
    delay: 100
  },
  {
    icon: 'bi bi-card-checklist',
    title: 'Girl Education and Empowerment',
    description: 'Boost girl education by implementing initiatives that tackle barriers like gender discrimination, early marriage, and cultural norms, with a focus on increasing enrollment and retention in primary schools. We also provide scholarships and financial support to ensure girls have access to quality education, while offering tailored life skills and leadership development programs to enhance their confidence and empowerment.',
    delay: 200
  },
  {
    icon: 'bi bi-bandaid-fill',
    title: 'Adolescent Sexual and Reproductive Health',
    description: 'Improve adolescent sexual and reproductive health by establishing youth-friendly health centers, educational programs, and advocating for policies that support access to contraceptives, safe abortion services, and comprehensive sexuality education. We also conduct awareness campaigns to challenge stigma and dispel myths surrounding adolescent sexual and reproductive health.',
    delay: 300
  },
  {
    icon: 'bi bi-hammer',
    title: 'Youth Employment and Entrepreneurship',
    description: 'Empower youth by providing vocational training programs, entrepreneurship training, and fostering partnerships with the private sector to offer internship opportunities and job placements. Additionally, we strive to support youth-led enterprises and start-ups through the establishment of small business incubation centers.',
    delay: 200
  },
  {
    icon: 'bi bi-gender-female',
    title: 'Women Rights and Gender Equality',
    description: 'Advocates against gender-based violence and discriminatory practices towards women while providing legal support and counseling services to those facing rights violations. Additionally, we conduct awareness campaigns to promote gender equality and challenge societal norms and stereotypes.',
    delay: 300
  },
  {
    icon: 'bi bi-people',
    title: 'Support for Orphans and Vulnerable Children',
    description: 'Establish community-based support systems that effectively identify and provide assistance to orphans and vulnerable children, offering them access to education, healthcare, psychosocial support, and basic needs. We prioritize collaboration with local organizations and stakeholders to ensure the sustainability of our efforts and create a lasting positive impact on the lives of these children in need.',
    delay: 400
  }
];

const Services = () => {
  return (
    <section id="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header wow fadeInUp">
          <h3>Activities</h3>
          <p>We are an organization that aims to address the rising cases of child abuse,
            high rates of school dropout, especially among girls at the primary level of education,
            limited access to sexual and reproductive health and rights for adolescents,
            limited access to orphans and vulnerable children in the community, high rates of unemployment among youth, and violations of women's rights.</p>
        </header>
        <div className="row">
          {serviceData.map((service, index) => (
            <div className="col-lg-4 col-md-6 box" data-aos="fade-up" data-aos-delay={service.delay} key={index}>
              <div className="icon"><i className={service.icon}></i></div>
              {/* eslint jsx-a11y/anchor-is-valid: 0 */}
              <h4 className="title"><a>{service.title}</a></h4>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
