import React from 'react';

interface MenuButtonProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isMenuOpen, toggleMenu }) => {
    return (
        <button data-toggle-navbar data-is-open={isMenuOpen.toString()} onClick={toggleMenu} className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative">
            {isMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            ) : (
                <>
                    <span id="line-1" className="w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear"></span>
                    <span id="line-2" className="w-6 origin-center  mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"></span>
                    <span id="line-3" className="w-6 mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"></span>
                </>
            )}
            <span className="sr-only">Toggle Navigation</span>
        </button>
    );
};

export default MenuButton;
