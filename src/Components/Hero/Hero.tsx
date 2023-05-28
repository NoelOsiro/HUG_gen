import React, { useEffect, useRef, ButtonHTMLAttributes, useState } from 'react';

const Hero = () => {
  const carouselItems = [
    {
      backgroundImage: "url(assets/img/hero-carousel/1.jpg)",
      title: "Serving our Generation",
      description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference!",
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/2.jpg)",
      title: "Be the change that you want to see",
      description: "Be the change that you want to see. Join Humble Generation and empower communities through youth leadership and social impact.",
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/3.jpg)",
      title: "Temporibus autem quibusdam",
      description: "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/4.jpg)",
      title: "Nam libero tempore",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.",
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/5.jpg)",
      title: "Magnam aliquam quaerat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleSlideTo = (slideIndex:number) => {
    setActiveSlide(slideIndex);
  };

  return (
    <section id="hero">
      <div className="hero-container">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={index}
                className={index === activeSlide ? "active" : ""}
                aria-current={index === activeSlide ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleSlideTo(index)}
              ></button>
            ))}
          </div>

          <div className="carousel-inner" role="listbox">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeSlide ? "active" : ""}`}
                style={{ backgroundImage: item.backgroundImage }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">{item.title}</h2>
                    <p className="animate__animated animate__fadeInUp">{item.description}</p>
                    <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev" onClick={() => handleSlideTo((activeSlide - 1 + carouselItems.length) % carouselItems.length)}>
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next" onClick={() => handleSlideTo((activeSlide + 1) % carouselItems.length)}>
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
