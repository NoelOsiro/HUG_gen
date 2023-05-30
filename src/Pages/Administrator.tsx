import React from 'react'
import { useLocation } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Administrator = () => {
  const { state: member = {} } = useLocation();
  return (
    <main id="main">
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>{member.position}</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li>Portfolio Details</li>
          </ol>
        </div>

      </div>
    </section>
    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4">
          <div className="col-lg-8">
            <Swiper className="portfolio-details-slider swiper"
             pagination={true}
             modules={[Pagination, Autoplay]}
             autoplay={{ delay: 5000 }}
             slidesPerView={'auto'}>
              <div className="swiper-wrapper align-items-center">
                <SwiperSlide>
                  <img src={member.imagefull1} alt=""  height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={member.imagefull2} alt="" height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../assets/img/portfolio/portfolio-details-3.jpg" alt="" className='img-fluid'/>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>{member.name}</h3>
              <ul>
                <li><strong>Phone</strong>: {member.phone}</li>
                <li><strong>Email</strong>: {member.email}</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>Who am I?</h2>
              <p>
                {member.bio}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
  )
}

export default Administrator;