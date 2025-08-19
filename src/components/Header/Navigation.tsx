import React, { useState, useEffect } from 'react';

interface NavigationProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, toggleMenu }) => {
    const [activeLink, setActiveLink] = useState('');

    const navItems = [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Events', link: '/events' },
        { text: 'Blog', link: '/blog' },
        { text: 'Contact', link: '/contact' },
    ];

    useEffect(() => {
        const currentPath = window.location.pathname;
        setActiveLink(currentPath);
    }, []);

    return (
        <div data-navbar className={`flex ${isMenuOpen ? 'visible opacity-100 z-40' : 'invisible opacity-0'} lg:visible lg:opacity-100 lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white dark:bg-blacksection lg:!bg-transparent border border-gray-200 dark:border-strokedark lg:border-0 rounded-lg lg:rounded-none mt-2 lg:mt-0 shadow-solid-13 lg:shadow-none`}>
            <ul className="px-6 lg:px-0 pt-6 lg:pt-0 pb-4 lg:pb-0 flex flex-col lg:flex-row gap-y-4 gap-x-8 text-lg w-full lg:justify-center lg:items-center">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.link}
                            className={`duration-300 font-medium ease-linear py-3 px-2 rounded-md transition-all hover:bg-primary/10 ${
                                activeLink === item.link 
                                    ? 'text-primary bg-primary/20' 
                                    : 'text-gray-900 dark:text-white hover:text-primary'
                            }`}
                            onClick={() => {
                                setActiveLink(item.link);
                                if (window.innerWidth < 1024) {
                                    toggleMenu();
                                }
                            }}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="lg:hidden flex items-center w-full pb-6 px-6">
                <a 
                    href="/donate" 
                    className="flex justify-center items-center w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primaryho text-white font-semibold hover:shadow-solid-5 transition-all duration-300 hover:scale-105" 
                    onClick={toggleMenu}
                >
                    Donate Now
                </a>
            </div>
        </div>
    );
};

export default Navigation;
