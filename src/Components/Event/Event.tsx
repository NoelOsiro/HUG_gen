import React from 'react';

const eventData = [
  {
    image: 'assets/img/event-1.jpg',
    date: '26-August-23',
    time: '7:00 - 15:00',
    location: 'Fisherman Village, Malindi',
    title: 'Feeding Programe',
    description: 'Join hands with us in our Feeding Program to provide nutritious meals for the needy. Your support ensures a healthier community. Be part of the change today!',
    link: '/volunteer',
  },
  {
    image: 'assets/img/event-2.jpg',
    date: '03-Sep-23',
    time: '8:00 - 15:00',
    location: 'Fisherman Village, Malindi',
    title: 'Jigger Eradication',
    description: 'Join us in eradicating jiggers from impoverished communities. Together, we can provide medical care, education, and prevention, bringing lasting change',
    link: '/volunteer',
  },
  // Add more events...
];

const Event = () => {
  return (
    <div className="event">
      <div className="container">
        <div className="section-header text-center">
          <p>Upcoming Events</p>
          <h2>Be ready for our upcoming charity events</h2>
        </div>
        <div className="row">
          {eventData.map((event, index) => (
            <div className="col-lg-6" key={index}>
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