import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Zap, BookOpen } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    const highlights = [
        { icon: <Code className="w-6 h-6" />, title: '5+ Years Experience', desc: 'In full-stack development' },
        { icon: <Server className="w-6 h-6" />, title: 'API Development', desc: 'Robust RESTful APIs' },
        { icon: <Database className="w-6 h-6" />, title: 'Scalable Systems', desc: 'Optimized backend architecture' },
        { icon: <Zap className="w-6 h-6" />, title: 'Clean Code', desc: 'Maintainable & efficient' },
    ];

    return (
        <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 rounded-full blur-2xl opacity-20" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-violet-600 rounded-full blur-2xl opacity-20" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        About <span className="text-indigo-600">Me</span>
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                        I am a passionate PHP & JavaScript Developer with a strong focus on building scalable backend systems and modern web applications. With over 5 years of experience, I specialize in creating robust APIs and efficient database architectures.
                    </p>

                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                        I pride myself on writing clean, maintainable code and staying up-to-date with the latest industry trends. Whether it's optimizing a legacy system or building a new product from scratch, I enjoy the challenge of solving complex problems.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <div className="text-indigo-600 dark:text-indigo-400 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
