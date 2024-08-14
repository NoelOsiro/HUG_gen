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
        <div data-navbar className={`flex ${isMenuOpen ? 'visible opacity-100 z-40' : 'invisible opacity-0'} lg:visible lg:opacity-100 lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0`}>
            <ul className="border-t border-gray-100 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg w-full lg:justify-between lg:mx-32 lg:items-center">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.link}
                            className={`duration-300 font-medium ease-linear py-3 ${activeLink === item.link ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100 lg:border-0 px-6 lg:px-0">
                <a href="/donate" className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]" onClick={toggleMenu}>
                    <span className="relative z-10 text-white">
                        Donate
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Navigation;
