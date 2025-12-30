import React, { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
                threshold: 0
            }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { name: 'Intro', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <React.Fragment>
            <header className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
                <nav className="flex flex-col items-end space-y-6">
                    <ThemeToggle />
                    <div className="flex flex-col items-end space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`group flex items-center space-x-3 transition-all duration-300 ${isActive ? 'translate-x-0' : 'translate-x-0'
                                        }`}
                                >
                                    <span className={`text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                        }`}>
                                        {link.name}
                                    </span>
                                    <div className={`h-2 transition-all duration-300 rounded-full ${isActive
                                        ? 'w-8 bg-indigo-600 dark:bg-indigo-400'
                                        : 'w-2 bg-gray-300 dark:bg-gray-600 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-500 group-hover:w-4'
                                        }`} />
                                </a>
                            );
                        })}
                    </div>
                </nav>
            </header>

            {/* Mobile simplified nav (optional) */}
            <div className="md:hidden fixed top-4 right-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-2 rounded-lg shadow-lg z-50">
                <ThemeToggle />
            </div>
        </React.Fragment>
    );
};

export default Header;
