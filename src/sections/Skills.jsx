import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../services/data.json';

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-800/50">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    Technical <span className="text-indigo-600">Skills</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    A comprehensive list of technologies and tools I work with to build robust applications.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((category, catIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-2">
                            {category.category}
                        </h3>
                        <div className="space-y-4">
                            {category.items.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center space-x-3 group"
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                                        {skill.icon}
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
