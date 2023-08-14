import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownClose = () => {
        setIsDropdownOpen(false);
    };
    const handleNavbarToggle = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };
    return (
        <div className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                < div className='d-flex'>
                    <div className="navbar-logo">HG</div>
                    <div className='divider'></div>
                    <a href='/' className='nav-text'>Humble <br/> Generation</a>
                </div>
                <button
                    type="button"
                    className="navbar-toggler"
                    onClick={handleNavbarToggle}>
                    <span className="navbar-toggler-icon"
                    ></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-between ${isNavbarCollapsed ? 'collapse' : 'show'
                    }`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive}) => isActive ? "nav-link me-2 active" : "nav-link me-2"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive}) => isActive ? "nav-link me-2 active" : "nav-link me-2"}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cause" className={({ isActive}) => isActive ? "nav-link me-2 active" : "nav-link me-2"}>
                                Causes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/event" className={({ isActive}) => isActive ? "nav-link me-2 active" : "nav-link me-2"}>
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/donate" className={({ isActive}) => isActive ? "nav-link me-2 active" : "nav-link me-2"}>
                                Donate
                            </NavLink>
                        </li>
                        <div className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}
                            onMouseEnter={handleDropdownToggle}
                            onMouseLeave={handleDropdownClose}>
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <a href="/blog" className="dropdown-item">Blog</a>
                                <a href="/gallery" className="dropdown-item">Gallery</a>
                                <a href="/team" className="dropdown-item">Meet The Team</a>
                                <a href="/donate" className="dropdown-item">Donate Now</a>
                                <a href="/volunteer" className="dropdown-item">Become A Volunteer</a>
                            </div>
                        </div>
                        <a href="/contact" className="nav-item nav-link">Contact</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar