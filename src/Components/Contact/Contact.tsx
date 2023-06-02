import React from 'react';

const Contacts = ()=> {
  return (
    <section id="contact" className="section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h3>Contact Us</h3>
          <p>Reach out for any assistance.</p>
        </div>

        <div className="row contact-info">

          <div className="col-md-4">
            <div className="contact-address">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <address>Malindi Complex, Lamu Road, Kilifi, Kenya</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="bi bi-phone"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+254 123 4563</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@humblegeneration.com</a></p>
            </div>
          </div>

        </div>

        <div className="form">
          <form action="forms/contact.php" method="post" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contacts;
