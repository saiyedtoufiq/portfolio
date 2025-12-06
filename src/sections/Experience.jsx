import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior PHP Developer',
            company: 'Tech Solutions Inc.',
            duration: '2021 - Present',
            description: [
                'Led a team of 5 developers in building scalable backend systems using Laravel.',
                'Optimized database queries reducing response time by 40%.',
                'Implemented RESTful APIs for mobile and web applications.',
                'Mentored junior developers and conducted code reviews.',
            ],
        },
        {
            title: 'Full Stack Developer',
            company: 'WebCreators Studio',
            duration: '2019 - 2021',
            description: [
                'Developed custom e-commerce solutions using CodeIgniter and WooCommerce.',
                'Built interactive frontend components with jQuery and Vue.js.',
                'Integrated third-party payment gateways (Stripe, PayPal).',
                'Managed server deployment and maintenance.',
            ],
        },
        {
            title: 'Junior Web Developer',
            company: 'Digital Agency',
            duration: '2018 - 2019',
            description: [
                'Assisted in developing responsive websites using HTML, CSS, and Bootstrap.',
                'Fixed bugs and implemented minor features in existing projects.',
                'Collaborated with designers to implement UI/UX improvements.',
            ],
        },
    ];

    return (
        <SectionWrapper id="experience" className="bg-gray-50 dark:bg-gray-800/50">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    Work <span className="text-indigo-600">Experience</span>
                </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 pb-12 last:pb-0 border-l-2 border-indigo-200 dark:border-indigo-900"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900" />

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <div className="flex flex-wrap justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-indigo-600" />
                                        {exp.title}
                                    </h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                                        {exp.company}
                                    </p>
                                </div>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {exp.duration}
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
