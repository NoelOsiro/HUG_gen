"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import MenuButton from "./MenuButton";
import Overlay from "./Overlay";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav className="w-full flex justify-between gap-6 relative">
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">
                <span className="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
                <span className="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
                <span className="absolute w-4 h-4 -bottom-1 -left-1 bg-blue-600 rounded-md rotate-45"></span>
                <span className="absolute w-2 h-2 rounded-full bg-gray-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              </div>
              <div className="inline-flex text-lg font-semibold text-gray-900">
                Humble Generation
              </div>
            </a>
          </div>

          <Overlay isMenuOpen={isMenuOpen} />

          <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

          <div className="min-w-max z-40 flex items-center gap-x-3">
            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
