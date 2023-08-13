import React from 'react';

const servicesData = [
    {
      icon: 'flaticon-diet',
      title: 'Feeding Programe',
      text: 'We provide nutritious meals to those in need, ensuring a healthier community.',
    },
    {
      icon: 'flaticon-woman',
      title: 'Sex Education',
      text: 'We offer comprehensive sex education programs to empower individuals with knowledge about their sexual and reproductive health.',
    },
    {
      icon: 'flaticon-healthcare',
      title: 'Health Care',
      text: 'Our healthcare services offer medical support for those who cannot afford it.',
    },
    {
      icon: 'flaticon-education',
      title: 'Primary Education',
      text: 'Quality education for underprivileged kids is our goal, fostering brighter futures.',
    },
    {
      icon: 'flaticon-home',
      title: 'Residence Facilities',
      text: 'Temporary shelter for the homeless, providing a stepping stone to stability.',
    },
    {
      icon: 'flaticon-social-care',
      title: 'Social Care',
      text: 'We offer emotional support and outreach, building a strong community network.',
    },
  ];
  
  

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="section-header text-center">
          <p>What We Do?</p>
          <h2>We believe that we can save more lifes with you</h2>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-text">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
