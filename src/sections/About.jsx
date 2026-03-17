import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Zap } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    const highlights = [
        { icon: <Code className="w-6 h-6" />, title: '5 Years Experience', desc: 'In full-stack development' },
        { icon: <Server className="w-6 h-6" />, title: 'API Development', desc: 'Robust RESTful APIs' },
        { icon: <Database className="w-6 h-6" />, title: 'Scalable Systems', desc: 'Optimized backend architecture' },
        { icon: <Zap className="w-6 h-6" />, title: 'Clean Code', desc: 'Maintainable & efficient' },
    ];

    return (
        <SectionWrapper id="about" className="bg-body">
            <div className="row align-items-center gy-5">
                {/* Image Placeholder */}
                <div className="col-md-6 order-2 order-md-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="position-relative"
                    >
                        <div className="position-relative mx-auto rounded-4 overflow-hidden shadow-lg" style={{ maxWidth: '24rem', aspectRatio: '1/1' }}>
                            <div className="position-absolute w-100 h-100 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center">
                                <span style={{ fontSize: '4rem' }}>👨‍💻</span>
                            </div>
                            {/* Overlay gradient */}
                            <div className="position-absolute w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(var(--bs-primary-rgb), 0.5), transparent)' }} />
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="col-md-6 order-1 order-md-2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="display-6 fw-bold text-body mb-4">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <p className="fs-5 text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                            I am a passionate Full Stack Developer with a strong focus on building scalable backend systems and modern web applications. With 5 years of experience, I specialize in creating robust APIs and efficient database architectures.
                        </p>

                        <p className="fs-5 text-secondary mb-5" style={{ lineHeight: '1.8' }}>
                            I pride myself on writing clean, maintainable code and staying up-to-date with the latest industry trends. Whether it's optimizing a legacy system or building a new product from scratch, I enjoy the challenge of solving complex problems.
                        </p>

                        <div className="row g-4">
                            {highlights.map((item, index) => (
                                <div className="col-sm-6" key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="d-flex align-items-start gap-3 p-3 rounded-3 bg-secondary bg-opacity-10 transition-colors"
                                    >
                                        <div className="text-primary mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="h6 fw-bold text-body mb-1">{item.title}</h3>
                                            <p className="small text-secondary mb-0">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
