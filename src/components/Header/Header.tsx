"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import Overlay from "./Overlay";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-blacksection/95 backdrop-blur-md shadow-solid-13 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav className="w-full flex justify-between gap-6 relative items-center">
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden flex rounded-xl bg-gradient-to-br from-primary to-meta shadow-solid-5 group-hover:shadow-solid-7 transition-all duration-300">
                <span className="absolute w-6 h-6 -top-1 -right-1 bg-gradient-to-br from-green-400 to-green-500 rounded-md rotate-45 opacity-80"></span>
                <span className="absolute w-6 h-6 -bottom-1 -right-1 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-md rotate-45 opacity-80"></span>
                <span className="absolute w-6 h-6 -bottom-1 -left-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md rotate-45 opacity-80"></span>
                <span className="absolute w-3 h-3 rounded-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md"></span>
              </div>
              <div className="inline-flex text-xl font-bold bg-gradient-to-r from-primary to-meta bg-clip-text text-transparent group-hover:from-primaryho group-hover:to-meta transition-all duration-300">
                Humble Generation
              </div>
            </a>
          </div>

          <Overlay isMenuOpen={isMenuOpen} />

          <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

          <div className="min-w-max z-40 flex items-center gap-x-3">
            <a
              href="/donate"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-primary to-primaryho text-white font-semibold rounded-full hover:shadow-solid-5 transition-all duration-300 hover:scale-105"
            >
              Donate Now
            </a>
            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
