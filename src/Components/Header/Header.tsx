import React, { useEffect, useState } from 'react';
import './header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // Added state for mobile navigation toggle
  const location = useLocation();
  const isTeamPage = location.pathname.includes('/team');
  const headerBackground = isTeamPage ? 'black' : '';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const desiredSection = document.querySelector('#featured-services');
      // Replace 'desiredSection' with the ID of the desired section
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

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${isScrolled ? 'scrolled' : 'header-transparent'}`} style={{ background: headerBackground }}>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-11 d-flex align-items-center justify-content-between">
            <h1 className="logo">
              <a href="/">HG</a>
            </h1>
            <div className="logotext">
              <a href="/">HUMBLE<br/>GENERATION</a>
            </div>
            <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
              <ul>
                <li><a className="nav-link active" href="/#hero" onClick={()=>setIsMobileNavOpen(false)}>Home</a></li>
                <li><a className="nav-link" href="/#about" onClick={()=>setIsMobileNavOpen(false)}>About</a></li>
                <li><a className="nav-link" href="/#services" onClick={()=>setIsMobileNavOpen(false)}>Activities</a></li>
                <li><a className="nav-link" href="/#portfolio" onClick={()=>setIsMobileNavOpen(false)}>Projects</a></li>
                <li><a className="nav-link" href="/#team" onClick={()=>setIsMobileNavOpen(false)}>Team</a></li>
                <li><a className="nav-link" href="blog.html" onClick={()=>setIsMobileNavOpen(false)}>Blog</a></li>
                {/* eslint jsx-a11y/anchor-is-valid: 0 */}
                <li className="dropdown">
                  <a>
                    <span>Drop Down</span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li><a>Gallery</a></li>
                    <li className="dropdown">
                      <a>
                        <span>Participate</span>
                        <i className="bi bi-chevron-right"></i>
                      </a>
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
                <li><a className="nav-link scrollto" href="/#contact" onClick={()=>setIsMobileNavOpen(false)}>Contact</a></li>
              </ul>
              <i className={`bi mobile-nav-toggle ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`} onClick={toggleMobileNav}></i>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
