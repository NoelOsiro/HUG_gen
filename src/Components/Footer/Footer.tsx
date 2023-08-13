import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Our Head Office</h2>
                            <p><i className="fa fa-map-marker-alt"></i>Malindi Complex Lamu Road, Malindi, Kenya</p>
                            <p><i className="fa fa-phone-alt"></i>+254 714 956 717</p>
                            <p><i className="fa fa-envelope"></i>humblegenerationke@gmail.com</p>
                            <div className="footer-social">
                                <a className="btn btn-custom" title='socials' href="/twiit"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-custom"  title='socials' href="/fb"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom"  title='socials' href="/yt"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" title='socials' href="/insta"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" title='socials' href="/linked"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/causes">Popular Causes</a>
                            <a href="/events">Upcoming Events</a>
                            <a href="/blog">Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="/terms">Terms of use</a>
                            <a href="/privacy">Privacy policy</a>
                            <a href="/cookies">Cookies</a>
                            <a href="/help">Help</a>
                            <a href="/fqa">FQAs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form>
                                <input className="form-control" placeholder="Email goes here" />
                                <button className="btn btn-custom">Submit</button>
                                <label>Don't worry, we don't spam!</label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="/#">www.humblegeneration.com</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://github.com/NoelOsiro">Noel Osiro</a></p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer