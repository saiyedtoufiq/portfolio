import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-body py-5 border-top border-secondary-subtle">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="mb-3 mb-md-0">
                    <p className="text-secondary small mb-0">
                        &copy; {new Date().getFullYear()} Toufiq Sayyed. All rights reserved.
                    </p>
                </div>

                <div className="d-flex gap-4">
                    <a
                        href="https://github.com/saiyedtoufiq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary link-primary transition"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/toufiq-saiyed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary link-primary transition"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:saiyedtoufiq@gmail.com"
                        className="text-secondary link-primary transition"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
