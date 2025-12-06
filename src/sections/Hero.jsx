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
        if (onDownloadComplete && typeof onDownloadComplete === 'function') {
            onDownloadComplete();
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg mb-4 block"
                    >
                        Hi, I am
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Toufiq Rehman<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Sayyed</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-6"
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
                    >
                        Building scalable backend systems and modern web applications with PHP, Laravel, and JavaScript.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button onClick={() => document.getElementById('projects').scrollIntoView()}>
                            View Projects <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="secondary" onClick={handleDownload}>
                            Download CV <Download className="w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Visual/Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Abstract Shapes/Grid */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-violet-600/20 rounded-2xl rotate-3 backdrop-blur-sm" />
                        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl -rotate-3 shadow-2xl border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                            <div className="relative z-10 text-center p-8">
                                <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-4xl">👨‍💻</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
                                    <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
                                    <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="absolute top-10 right-10 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg"
                                >
                                    <span className="text-2xl">🐘</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-10 left-10 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg"
                                >
                                    <span className="text-2xl">⚛️</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
