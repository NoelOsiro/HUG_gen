import React from 'react';

interface OverlayProps {
    isMenuOpen: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isMenuOpen }) => {
    return (
        <div data-nav-overlay aria-hidden="true" className={`fixed inset-0 ${isMenuOpen ? 'z-30 bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-xl' : 'hidden'}`}></div>
    );
};

export default Overlay;
