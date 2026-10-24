'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, ProjectItem } from '../../../data/portfolio';
import SpotlightCard from '../reactbits/SpotlightCard';
import { ExternalLink, Github, Sparkles, Building2, ShoppingCart, CheckSquare, GraduationCap, Trophy, Calendar, Users, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Projects() {
  const { projects } = portfolioData;
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Multi-Tenant SaaS', 'Enterprise', 'Full Stack', 'Backend API'];

  const projectIcons: Record<string, React.ReactNode> = {
    '🏢': <Building2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
    '🗓️': <Calendar className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    '🏆': <Trophy className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    '🤝': <Users className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
    '🎓': <GraduationCap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    '⚡': <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-space-950 transition-colors duration-300">
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Case Studies & Systems</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Featured Engineering{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Production web platforms engineered for business operations, resource allocation, and inventory velocity.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                  : 'bg-white/80 dark:bg-space-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with SpotlightCard */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project: ProjectItem, index: number) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <SpotlightCard
                  theme={isDark ? 'dark' : 'light'}
                  spotlightColor={
                    isDark
                      ? index % 3 === 0
                        ? 'rgba(34, 211, 238, 0.25)'
                        : index % 3 === 1
                        ? 'rgba(168, 85, 247, 0.25)'
                        : 'rgba(99, 102, 241, 0.25)'
                      : 'rgba(2, 132, 199, 0.15)'
                  }
                  className="h-full flex flex-col justify-between p-7 rounded-3xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="space-y-5">
                    {/* Card Top Banner with Icon & Category */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-space-950/80 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {projectIcons[project.icon] || <span className="text-2xl">{project.icon}</span>}
                      </div>
                      <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
                        {project.category}
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      {project.subtitle && (
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">
                          {project.subtitle}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlight Metric */}
                    {project.metrics && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-space-950/70 border border-emerald-500/20 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                        <span>Key Metric: {project.metrics}</span>
                      </div>
                    )}

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom / Action Triggers */}
                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-slate-500">Enterprise Solution</span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="text-slate-400 font-mono text-[10px]">Proprietary Architecture</span>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
