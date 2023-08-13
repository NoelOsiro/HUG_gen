import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

const causesData = [
  {
    image: 'assets/img/causes-1.jpg',
    progress: 15,
    raised: 4000,
    goal: 60000,
    title: 'Feeding Program',
    description: 'Support our mission to provide nutritious meals to those in need, ensuring a healthier community.',
  },
  {
    image: 'assets/img/causes-2.jpg',
    progress: 0,
    raised: 0,
    goal: 150000,
    title: 'Sustainable Living',
    description: 'Promote sustainable practices for a greener future through conscious choices in daily life.',
  },
  {
    image: 'assets/img/causes-3.jpg',
    progress: 5,
    raised: 5000,
    goal: 100000,
    title: 'Quality Education',
    description: 'Empower underprivileged kids with quality primary education through partnerships with local libraries.',
  },
  {
    image: 'assets/img/causes-4.jpg',
    progress: 4,
    raised: 4000,
    goal: 100000,
    title: 'Accessible Healthcare',
    description: 'Provide essential healthcare services to those without proper medical care, improving overall well-being.',
  },
  {
    image: 'assets/img/causes-3.jpg',
    progress: 10,
    raised: 10000,
    goal: 100000,
    title: 'Reproductive Health',
    description: 'Empower individuals with knowledge about sexual and reproductive health for informed decisions.',
  },
  {
    image: 'assets/img/causes-2.jpg',
    progress: 0,
    raised: 0,
    goal: 100000,
    title: 'Jigger Eradication',
    description: 'Join our campaign against jiggers, providing care, education, and prevention to impacted communities.',
  },
  // Add more items...
];





const Cause = () => {
  useEffect(() => {
    // Initialize Owl Carousel after component is mounted
    $(".causes-carousel").owlCarousel({
      autoplay: true,
      animateIn: 'slideInDown',
      animateOut: 'slideOutDown',
      items: 1,
      smartSpeed: 450,
      dots: false,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
    
  }, []);
  return (
    <div className="causes">
      <div className="container">
        <div className="section-header text-center">
          <p>Popular Causes</p>
          <h2>Let's know about charity causes around the world</h2>
        </div>
        <div className="owl-carousel causes-carousel">
          {causesData.map((cause, index) => (
            <div className="causes-item" key={index}>
              <div className="causes-img">
                <img src={cause.image} alt={`pic${index + 1}`} />
              </div>
              <div className="causes-progress">
                <div className="progress">
                  <div title='progress' className="progress-bar" role="progressbar" aria-valuenow={cause.progress} aria-valuemin={0} aria-valuemax={100} style={{'width':String(cause.progress) + '%'}}>
                    <span>{cause.progress}%</span>
                  </div>
                </div>
                <div className="progress-text">
                  <p><strong>Raised:</strong> Ksh {cause.raised}</p>
                  <p><strong>Goal:</strong> Ksh {cause.goal}</p>
                </div>
              </div>
              <div className="causes-text">
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
              </div>
              <div className="causes-btn">
                <a className="btn btn-custom" href='/about'>Learn More</a>
                <a className="btn btn-custom" href='/donate'>Donate Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cause;
