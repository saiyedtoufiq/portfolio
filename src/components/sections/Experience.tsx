'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SpotlightCard from '../reactbits/SpotlightCard';
import { useTheme } from '../../context/ThemeContext';

export default function Experience() {
  const { experiences } = portfolioData;
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-slate-100/60 dark:bg-space-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-mono font-medium mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Work <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            A timeline of delivering scalable backend engineering, high-throughput APIs, and enterprise systems.
          </motion.p>
        </div>

        {/* Wide Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Glowing Vertical Line on Left */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-7 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-violet-500/20" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="relative flex items-start pl-10 sm:pl-16 w-full"
              >
                {/* Timeline Node on Left Spine */}
                <div className="absolute left-4 sm:left-7 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-white dark:bg-space-950 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
                </div>

                {/* Wide Experience Card */}
                <div className="w-full">
                  <SpotlightCard
                    theme={isDark ? 'dark' : 'light'}
                    spotlightColor={isDark ? 'rgba(34, 211, 238, 0.18)' : 'rgba(2, 132, 199, 0.12)'}
                    className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-space-900/80 border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/50 hover:border-cyan-500/40 transition-all w-full"
                  >
                    {/* Header: Role, Company, Duration & Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-5 border-b border-slate-200 dark:border-white/10">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                          {exp.company}
                        </h4>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Accomplishments */}
                    <ul className="space-y-3 mb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      {exp.description.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-1" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Tags */}
                    <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
