import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../services/data.json';

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-body">
            <div className="text-center mb-5">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="display-6 fw-bold text-body mb-3"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-secondary fs-5 mx-auto"
                    style={{ maxWidth: '42rem' }}
                >
                    Here are some of the projects I've worked on, showcasing my expertise in backend and frontend development.
                </motion.p>
            </div>

            <div className="row g-4">
                {projects.map((project, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <ProjectCard project={project} index={index} />
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
