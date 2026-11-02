'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolio';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-serif italic text-xl sm:text-2xl text-sky-600 dark:text-sky-300 mb-2"
          >
            Career Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Professional{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-300 dark:to-indigo-300 bg-clip-text text-transparent pr-1">
              Experience
            </span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-2 bottom-2 left-4 sm:left-6 w-[1px] bg-gradient-to-b from-sky-400/50 via-indigo-400/30 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex items-start pl-10 sm:pl-14 w-full"
              >
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-7 w-3.5 h-3.5 rounded-full bg-sky-400 ring-4 ring-sky-400/20 z-20" />

                <div className="w-full p-6 sm:p-8 rounded-[28px] liquid-glass-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5 pb-4 border-b border-slate-200/60 dark:border-white/10">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="font-serif italic text-lg text-sky-600 dark:text-sky-300">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium liquid-pill text-slate-700 dark:text-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-sky-500 dark:text-sky-300" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-300 flex-shrink-0 mt-1" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full liquid-pill text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
