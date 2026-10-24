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
            <header className="position-fixed top-50 translate-middle-y end-0 me-4 z-3 d-none d-md-block">
                <nav className="d-flex flex-column align-items-end gap-3">
                    <ThemeToggle />
                    <div className="d-flex flex-column align-items-end gap-2 pt-3 border-top border-secondary-subtle">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="d-flex align-items-center gap-2 text-decoration-none transition"
                                >
                                    <span className={`small transition ${isActive
                                        ? 'text-primary fw-bold'
                                        : 'text-secondary font-weight-medium'
                                        }`}>
                                        {link.name}
                                    </span>
                                    <div className={`transition rounded-pill ${isActive
                                        ? 'bg-primary'
                                        : 'bg-secondary'
                                        }`} style={{ height: '2px', width: isActive ? '32px' : '16px' }} />
                                </a>
                            );
                        })}
                    </div>
                </nav>
            </header>

            {/* Mobile simplified nav */}
            <div className="d-md-none position-fixed top-0 end-0 mt-3 me-3 bg-body bg-opacity-75 p-2 rounded-3 shadow-sm z-3" style={{ backdropFilter: 'blur(8px)' }}>
                <ThemeToggle />
            </div>
        </React.Fragment>
    );
};

export default Header;
