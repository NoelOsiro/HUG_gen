import React from 'react';

interface MenuButtonProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isMenuOpen, toggleMenu }) => {
    return (
        <button 
            data-toggle-navbar 
            data-is-open={isMenuOpen.toString()} 
            onClick={toggleMenu} 
            className="lg:hidden outline-none w-8 h-8 flex flex-col items-center justify-center relative bg-gray-100 dark:bg-blackho hover:bg-primary/20 rounded-lg transition-all duration-300 p-1.5"
            aria-label="Toggle Navigation Menu"
        >
            {isMenuOpen ? (
                <svg className="w-5 h-5 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            ) : (
                <div className="flex flex-col gap-1 w-4">
                    <span className="w-full h-0.5 rounded-full bg-gray-900 dark:bg-white transition-all duration-300 ease-linear"></span>
                    <span className="w-full h-0.5 rounded-full bg-gray-900 dark:bg-white transition-all duration-300 ease-linear"></span>
                    <span className="w-full h-0.5 rounded-full bg-gray-900 dark:bg-white transition-all duration-300 ease-linear"></span>
                </div>
            )}
            <span className="sr-only">Toggle Navigation</span>
        </button>
    );
};

export default MenuButton;
