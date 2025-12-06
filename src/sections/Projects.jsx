import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../services/data';
const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-white dark:bg-gray-900">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    Featured <span className="text-indigo-600">Projects</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    Here are some of the projects I've worked on, showcasing my expertise in backend and frontend development.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
