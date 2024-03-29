import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min.js';

const eventData = [
  {
    image: 'assets/img/event-1.jpg',
    date: '06-April-2024',
    time: '7:00 - 15:00',
    location: 'Fisherman Village, Malindi',
    title: 'Feeding Programe',
    description: 'Join hands with us in our Feeding Program to provide nutritious meals for the needy. Your support ensures a healthier community. Be part of the change today!',
    link: '/volunteer',
  },
  {
    image: 'assets/img/event-2.jpg',
    date: '12-April-24',
    time: '8:00 - 15:00',
    location: 'Fisherman Village, Malindi',
    title: 'Jigger Eradication',
    description: 'Join us in eradicating jiggers from impoverished communities. Together, we can provide medical care, education, and prevention, bringing lasting change',
    link: '/volunteer',
  },
  {
    image: 'assets/img/event-2.jpg',
    date: '11-Apr-23',
    time: '10:00 - 18:00',
    location: 'Fisherman Village, Malindi',
    title: 'Tree Plantation Drive',
    description: 'Join us in making our planet greener by participating in our tree plantation drive. Your efforts will contribute to a sustainable and healthy environment.',
    link: '/volunteer',
  },                                                                  
  // Add more events...
];

const Event = () => {
  useEffect(() => {
    // Initialize Owl Carousel when the component mounts
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
    });
  }, []);
  return (
    <div className="event">
      <div className="container">
        <div className="section-header text-center">
          <p>Upcoming Events</p>
          <h2>Be ready for our upcoming charity events</h2>
        </div>
        <div className="owl-carousel">
          {eventData.map((event, index) => (
            <div className="row" key={index}>
              <div className="event-item">
                <img src={event.image} alt={`pic${index + 1}`} />
                <div className="event-content">
                  <div className="event-meta">
                    <p><i className="fa fa-calendar-alt"></i>{event.date}</p>
                    <p><i className="far fa-clock"></i>{event.time}</p>
                    <p><i className="fa fa-map-marker-alt"></i>{event.location}</p>
                  </div>
                  <div className="event-text">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <a className="btn btn-custom" href={event.link}>Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Event;
