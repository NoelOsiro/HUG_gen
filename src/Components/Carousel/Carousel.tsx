import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

const carouselData = [
  {
    imgSrc: 'assets/img/carousel-1.jpg',
    title: "Serving our Generation",
    text: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference!",
    videoSrc: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
  {
    imgSrc: 'assets/img/carousel-2.jpg',
    title: 'Be the change that you want to see',
    text: 'Be the change that you want to see.Join hands and empower communities through youth leadership and social impact.',
    videoSrc: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
  {
    imgSrc: 'assets/img/carousel-5.jpg',
    title: 'Inspiring Youth, Transforming Communities',
    text: 'Inspire, empower, and transform. Let us partner as we harness the power of youth to create thriving communities and a brighter future.',
    videoSrc: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
  {
    imgSrc: 'assets/img/carousel-4.jpg',
    title: "Building Bridges, Creating Impact",
    text: "Break down barriers and build bridges of understanding. Join HuG in creating a lasting impact and fostering stronger, more compassionate communities.",
    videoSrc: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
  {
    imgSrc: 'assets/img/carousel-3.jpg',
    title: "Amplify children voices",
    text: "Empower their dreams, and witness the transformative impact. Stand with HuG and let our collective voice be heard.",
    videoSrc: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
];

const Carousel = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component is mounted
    $('.carousel .owl-carousel').owlCarousel({
      autoplay: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      smartSpeed: 300,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
    });
  }, []);

  return (
    <div className="carousel">
      <div className="container-fluid">
        <div className="owl-carousel">
          {carouselData.map((item, index) => (
            <div className="carousel-item" key={index}>
              <div className="carousel-img">
                <img src={item.imgSrc} alt={`Image${index + 1}`} />
              </div>
              <div className="carousel-text">
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <div className="carousel-btn">
                  <a className="btn btn-custom" href="/donate">
                    Donate Now
                  </a>
                  <button
                    className="btn btn-custom btn-play"
                    data-toggle="modal"
                    data-src={item.videoSrc}
                    data-target="#videoModal"
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
