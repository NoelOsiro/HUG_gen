import React, { useEffect } from 'react';

const testimonialsData = [
  {
    name: 'Alice Wanjiru',
    profession: 'Community Educator',
    text: "Being a part of Humble Generation has allowed me to make a real impact in addressing the challenges faced by vulnerable children in our community. We're creating a brighter future for these kids by providing education, health resources, and empowerment opportunities.",
    image: 'assets/img/testimonial-6.jpg'
  },
  {
    name: 'Grace Mwende',
    profession: 'Youth Mentor',
    text: "I've witnessed the transformation in our youth as they gain confidence, skills, and employment opportunities through our programs. Humble Generation is not just an organization; it's a family that's creating lasting change and breaking the cycle of unemployment and limited opportunities.",
    image: 'assets/img/testimonial-2.jpg'
  },
  {
    name: 'Esther Akinyi',
    profession: 'Women Empowerment Advocate',
    text: "Humble Generation is dedicated to ensuring that women's rights are respected and upheld. We're working tirelessly to provide access to reproductive health and create a safe space for women to thrive, both socially and economically.",
    image: 'assets/img/testimonial-3.jpg'
  },
  {
    name: 'John Mungai',
    profession: 'Parent and Supporter',
    text: "As a parent, I'm grateful for the positive impact that Humble Generation has on my children and our community. Their commitment to addressing child abuse, dropout rates, and limited access to resources is making our community stronger and healthier.",
    image: 'assets/img/testimonial-4.jpg'
  }
];


const Testimonials = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component is mounted
    $(".testimonials-carousel").owlCarousel({
      center: true,
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }, []);


  return (
    <div className="testimonial">
      <div className="container">
        <div className="section-header text-center">
          <p>Testimonial</p>
          <h2>What people are talking about our charity activities</h2>
        </div>
        <div className="owl-carousel testimonials-carousel">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-profile">
                <img src={testimonial.image} alt="pic" />
                <div className="testimonial-name">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.profession}</p>
                </div>
              </div>
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
