import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    // Mapping Tailwind colors to Bootstrap background utility classes
    const colorMap = {
        'bg-indigo-500': 'bg-primary',
        'bg-emerald-500': 'bg-success',
        'bg-cyan-500': 'bg-info',
    };
    const bsColor = colorMap[project.color] || 'bg-secondary';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden"
        >
            {/* Image Placeholder / Gradient */}
            <div className={`card-img-top ${bsColor} position-relative overflow-hidden`} style={{ height: '12rem' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25 hover:opacity-0 transition" />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <span className="display-4">{project.icon}</span>
                </div>
            </div>

            <div className="card-body d-flex flex-column p-4">
                <h3 className="card-title h5 fw-bold text-body mb-2">
                    {project.title}
                </h3>

                <p className="card-text text-secondary mb-4 small flex-grow-1">
                    {project.description}
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 fw-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="d-flex align-items-center gap-3 mt-auto">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm d-flex align-items-center gap-2 rounded-3 px-3 shadow-sm"
                        >
                            <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2 rounded-3 px-3"
                        >
                            <Github className="w-4 h-4" /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
