import React, { useEffect } from 'react';

const testimonialsData = [
  {
    name: 'Person Name 1',
    profession: 'Profession 1',
    text: 'Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis',
    image: 'assets/img/testimonial-1.jpg'
  },
  {
    name: 'Person Name 2',
    profession: 'Profession 2',
    text: 'Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis',
    image: 'assets/img/testimonial-2.jpg'
  },
  {
    name: 'Person Name 3',
    profession: 'Profession 3',
    text: 'Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis',
    image: 'assets/img/testimonial-3.jpg'
  },
  {
    name: 'Person Name 4',
    profession: 'Profession 4',
    text: 'Lorem ipsum dolor sit amet elit. Phasel preti mi facilis ornare velit non vulputa. Aliqu metus tortor, auctor id gravid vivera quis',
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
                0:{
                    items:1
                },
                576:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
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
