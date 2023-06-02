import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './clients.css';
import { Pagination, Autoplay } from 'swiper';

const Clients = () => {
  const clientImages = [
    'assets/img/clients/almasi.jpg',
    'assets/img/clients/ccompassion.png',
    'assets/img/clients/OIP.jpg',
    'assets/img/clients/endless.jpg',
    'assets/img/clients/emerald.png',
  ];

  return (
    <section id="clients">
      <div className="container" data-aos="zoom-in">
        <header className="section-header">
          <h3>Our Partners</h3>
        </header>
        <Swiper
          className="clients-slider swiper mt-5"
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
          }}
        >
          <div className="swiper-wrapper align-items-center">
            {clientImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} className="img-fluid" alt="" />
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
