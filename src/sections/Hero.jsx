import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../components/Button';
import CV from '../assets/Toufiq-Rehman-Sayyed-CV.pdf';

const Hero = () => {

    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = CV; // Set the file path
        link.download = 'Toufiq-Rehman-Sayyed-CV.pdf'; // Set the desired download filename
        link.style.display = 'none'; // Hide the link

        // Append to the document body and trigger a click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the temporary link

        // Execute the callback function after initiating the download
        if (typeof onDownloadComplete === 'function') {
            onDownloadComplete();
        }
    };

    return (
        <section id="home" className="vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            {/* Background Elements */}
            <div className="position-absolute w-100 h-100 top-0 start-0 z-n1">
                <div className="position-absolute rounded-circle bg-primary opacity-25" style={{ top: '5rem', left: '2.5rem', width: '18rem', height: '18rem', filter: 'blur(3rem)', animation: 'pulse 2s infinite' }} />
                <div className="position-absolute rounded-circle bg-info opacity-25" style={{ bottom: '5rem', right: '2.5rem', width: '24rem', height: '24rem', filter: 'blur(3rem)', animation: 'pulse 2s infinite 1s' }} />
            </div>

            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* Text Content */}
                    <div className="col-md-6 text-center text-md-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-primary fw-semibold fs-5 mb-3 d-block"
                            >
                                Hi, I am
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="display-4 fw-bold text-body mb-4"
                            >
                                Toufiq Rehman<span className="text-primary" style={{ background: 'linear-gradient(to right, var(--bs-primary), var(--bs-info))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sayyed</span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="h3 text-secondary fw-medium mb-4"
                            >
                                Full Stack Developer
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="fs-5 text-secondary mb-5"
                                style={{ maxWidth: '32rem', margin: '0 auto' }}
                            >
                                Building scalable backend systems and modern web applications with PHP, Laravel, and JavaScript.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3"
                            >
                                <Button onClick={() => document.getElementById('projects').scrollIntoView()}>
                                    View Projects <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Button variant="secondary" onClick={handleDownload}>
                                    Download CV <Download className="w-5 h-5" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Visual/Image Content */}
                    <div className="col-md-6 d-none d-md-block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="position-relative"
                        >
                            <div className="position-relative mx-auto" style={{ width: '100%', maxWidth: '28rem', aspectRatio: '1/1' }}>
                                {/* Abstract Shapes/Grid */}
                                <div className="position-absolute w-100 h-100 rounded-4" style={{ background: 'linear-gradient(to top right, rgba(var(--bs-primary-rgb), 0.2), rgba(var(--bs-info-rgb), 0.2))', transform: 'rotate(3deg)', backdropFilter: 'blur(4px)' }} />
                                <div className="position-absolute w-100 h-100 bg-body rounded-4 shadow-lg border border-secondary-subtle d-flex align-items-center justify-content-center overflow-hidden" style={{ transform: 'rotate(-3deg)' }}>
                                    <div className="position-relative z-1 text-center p-5">
                                        <div className="bg-primary bg-opacity-10 rounded-4 mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '6rem', height: '6rem' }}>
                                            <span style={{ fontSize: '2.5rem' }}>👨‍💻</span>
                                        </div>
                                        <div className="d-flex flex-column gap-3">
                                            <div className="bg-secondary bg-opacity-25 rounded mx-auto" style={{ height: '1rem', width: '8rem' }} />
                                            <div className="bg-secondary bg-opacity-25 rounded mx-auto" style={{ height: '1rem', width: '12rem' }} />
                                            <div className="bg-secondary bg-opacity-25 rounded mx-auto" style={{ height: '1rem', width: '10rem' }} />
                                        </div>

                                        {/* Floating badges */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                            className="position-absolute bg-body p-3 rounded-3 shadow"
                                            style={{ top: '2.5rem', right: '2.5rem' }}
                                        >
                                            <span className="fs-3">🐘</span>
                                        </motion.div>
                                        <motion.div
                                            animate={{ y: [0, 10, 0] }}
                                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                            className="position-absolute bg-body p-3 rounded-3 shadow"
                                            style={{ bottom: '2.5rem', left: '2.5rem' }}
                                        >
                                            <span className="fs-3">⚛️</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
