import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimon.css';
import { Pagination, Autoplay } from 'swiper';

const testimonialData = [
  {
    imgSrc: 'assets/img/izzo1.JPG',
    name: 'Isaiah Nyandwaro',
    role: 'Executive Director',
    testimonial: 'Orphans and vulnerable children often face immense challenges and are at a higher risk of marginalization. Hubmble Generation has been a beacon of hope for these children, providing them with a support system, access to education, and necessary resources. Their holistic approach has transformed the lives of many vulnerable children in our community, giving them a chance for a brighter future.',
  },
  {
    imgSrc: 'assets/img/testimonial-2.jpg',
    name: 'Margret Kalala',
    role: 'Volunteer',
    testimonial: 'Hubmble Generations efforts to combat high rates of youth unemployment are commendable. Through skill development programs, entrepreneurship training, and job placement assistance, they have empowered young people with the necessary tools to find sustainable employment. Their dedication to nurturing the talents and ambitions of the youth has resulted in a positive impact on our economy and social fabric.',
  },
  {
    imgSrc: 'assets/img/testimonial-3.jpg',
    name: 'Leito Wahoro',
    role: 'Parent',
    testimonial: 'As a parent in the community, I am incredibly grateful for Hubmble Generations dedication to addressing child abuse. They have implemented various awareness campaigns and workshops that have educated parents and caregivers about the signs of abuse and how to prevent it. I feel more empowered and equipped to protect my children thanks to their efforts.',
  },
  {
    imgSrc: 'assets/img/testimonial-4.jpg',
    name: 'Noel Osiro',
    role: 'ICT',
    testimonial: 'Fostering a sense of community and solidarity among its members. Through various community engagement initiatives, they have encouraged dialogue, collaboration, and collective action to address the pressing issues we face. Their efforts have strengthened social bonds, promoted empathy, and inspired individuals to take an active role in creating positive change.',
  },
  {
    imgSrc: 'assets/img/dan.jpeg',
    name: 'Daniel Mogaka',
    role: 'Programmes Co-ordinator',
    testimonial: 'Through our creative arts initiatives, we have been able to engage and empower children and young people, providing them with a platform to express themselves, share their stories, and raise awareness about the issues they face. We believe in the power of art to create positive change, and we have witnessed its transformative effects firsthand.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-bg">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Testimonials</h3>
        </header>
        <Swiper
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
          slidesPerView={'auto'}
        >
          <div className="swiper-wrapper">
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item">
                  <img
                    src={testimonial.imgSrc}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                  <p>
                    <img
                      src="assets/img/quote-sign-left.png"
                      className="quote-sign-left"
                      alt=""
                    />
                    {testimonial.testimonial}
                    <img
                      src="assets/img/quote-sign-right.png"
                      className="quote-sign-right"
                      alt=""
                    />
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
