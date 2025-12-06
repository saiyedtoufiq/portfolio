import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Workplace Management System',
            description: 'A comprehensive solution for managing workplace resources, employee scheduling, and facility maintenance requests.',
            tags: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind'],
            icon: '🏢',
            color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'E-commerce API Backend',
            description: 'Scalable RESTful API for a multi-vendor e-commerce platform featuring secure authentication, payment processing, and inventory management.',
            tags: ['PHP', 'CodeIgniter', 'REST API', 'Stripe'],
            icon: '🛒',
            color: 'bg-gradient-to-br from-violet-400 to-purple-500',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Task Management System',
            description: 'Real-time task collaboration tool with Kanban boards, team chat, and progress tracking features.',
            tags: ['React', 'Firebase', 'Tailwind', 'Framer Motion'],
            icon: '✅',
            color: 'bg-gradient-to-br from-emerald-400 to-teal-500',
            demoUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'Portfolio Website',
            description: 'Modern developer portfolio featuring dark mode, smooth animations, and responsive design.',
            tags: ['React', 'Tailwind', 'Framer Motion'],
            icon: '🎨',
            color: 'bg-gradient-to-br from-orange-400 to-pink-500',
            demoUrl: '#',
            githubUrl: '#',
        },
    ];

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
