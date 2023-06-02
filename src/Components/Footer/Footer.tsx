import React from 'react';


function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Humble Generation</h3>
                            <p>
                                We can't help everyone but everyone can help someone.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bi bi-chevron-right"></i>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i>
                                    <a href="/#about">About us</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i>
                                    <a href="/#services">Activities</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right">
                                    </i>
                                    <a href="/#portfolio">Projects</a>
                                </li>
                                <li>
                                    <i className="bi bi-chevron-right"></i>
                                    <a href="/participate">Participate</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p></p>
                            <div className="social-links">
                                <a href="#" className="twitter">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="#" className="facebook">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Blog</h4>
                            <p>Catch all the latest activities our organization does and follow us on social media</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                                </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright"> &copy; Copyright <strong>HuG</strong>. All Rights Reserved </div>
                <div className="credits"> Designed by <a href="https://github.com/NoelOsiro/">Noel Osiro</a>
                </div>
            </div>
        </footer>
    );

}
export default Footer;
