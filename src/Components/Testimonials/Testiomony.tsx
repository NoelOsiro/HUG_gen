import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimon.css';
import { Pagination, Autoplay } from 'swiper';

const testimonialData = [
  {
    imgSrc: 'assets/img/testimonial-1.jpg',
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    testimonial: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    imgSrc: 'assets/img/testimonial-2.jpg',
    name: 'Sara Wilsson',
    role: 'Designer',
    testimonial: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  // Add more testimonial objects as needed
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
