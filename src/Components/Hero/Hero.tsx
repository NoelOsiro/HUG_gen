import React, { useEffect, useState } from 'react';

const Hero = () => {
  const carouselItems = [
    {
      backgroundImage: "url(assets/img/hero-carousel/1.jpg)",
      title: "Serving our Generation",
      description: "Cultivating compassion, inspiring change, and serving our generation with unwavering dedication. Join us in making a difference!",
      btnText:"Learn More"
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/2.jpg)",
      title: "Be the change that you want to see",
      description: "Be the change that you want to see.Join hands and empower communities through youth leadership and social impact.",
      btnText:"About Us"
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/3.jpg)",
      title: "Inspiring Youth, Transforming Communities",
      description: "Inspire, empower, and transform. Let's partner as we harness the power of youth to create thriving communities and a brighter future.",
      btnText:"Projects"
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/4.jpg)",
      title: "Building Bridges, Creating Impact",
      description: "Break down barriers and build bridges of understanding. Join HuG in creating a lasting impact and fostering stronger, more compassionate communities.",
      btnText:"Services"
    },
    {
      backgroundImage: "url(assets/img/hero-carousel/5.jpg)",
      title: "Amplify children voices",
      description: "Empower their dreams, and witness the transformative impact. Stand with HuG and let our collective voice be heard.",
      btnText:"Gallery"
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [carouselItems.length]);

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
                    <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">{item.btnText}</a>
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
