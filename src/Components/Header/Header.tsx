import React, { useEffect, useState } from 'react';
import './header.css';

const Header = ()=> {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const desiredSection = document.querySelector('#featured-services'); // Replace 'desiredSection' with the ID of the desired section

      if (desiredSection) {
        const desiredSectionOffsetTop = desiredSection.getBoundingClientRect().top + scrollPosition;
        const isScrollWithinDesiredSection = scrollPosition >= desiredSectionOffsetTop;
        setIsScrolled(isScrollWithinDesiredSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${isScrolled ? 'scrolled' : 'header-transparent'}`}>
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-11 d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="index.html">Humble Generation</a></h1>
           {/* <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto " href="#portfolio">Projects</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link  " href="blog.html">Blog</a></li>
              {/* eslint jsx-a11y/anchor-is-valid: 0 */}
              <li className="dropdown"><a><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a>Gallery</a></li>
                  <li className="dropdown"><a><span>Participate</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="/">Contribute</a></li>
                      <li><a href="/">Donate</a></li>
                      <li><a href="/">Volunteer</a></li>
                      <li><a href="/">Team up</a></li>
                    </ul>
                  </li>
                  <li><a href="/">Facebook</a></li>
                  <li><a href="/">Twitter</a></li>
                  <li><a href="/">Reach Us</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;
