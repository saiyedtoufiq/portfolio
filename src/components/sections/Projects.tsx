'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, ProjectItem } from '../../../data/portfolio';
import {
  ExternalLink,
  Github,
  Building2,
  GraduationCap,
  Trophy,
  Calendar,
  Users,
  Zap,
  ArrowUpRight,
  Images,
} from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Multi-Tenant SaaS', 'Enterprise', 'Full Stack', 'Backend API'];

  const projectIcons: Record<string, React.ReactNode> = {
    '🏢': <Building2 className="w-6 h-6 text-sky-500 dark:text-sky-300" />,
    '🗓️': <Calendar className="w-6 h-6 text-indigo-500 dark:text-indigo-300" />,
    '🏆': <Trophy className="w-6 h-6 text-amber-500 dark:text-amber-300" />,
    '🤝': <Users className="w-6 h-6 text-violet-500 dark:text-violet-300" />,
    '🎓': <GraduationCap className="w-6 h-6 text-emerald-500 dark:text-emerald-300" />,
    '⚡': <Zap className="w-6 h-6 text-sky-500 dark:text-sky-300" />,
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-transparent transition-colors duration-500">
      {/* Ambient liquid glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-violet-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-serif italic text-xl sm:text-2xl text-sky-600 dark:text-sky-300 mb-2"
          >
            Selected Works
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Featured{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-300 dark:to-indigo-300 bg-clip-text text-transparent pr-1">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Platforms built for multi-tenant operations, seamless workflows, and high-throughput scale.
          </motion.p>
        </div>

        {/* Liquid Glass Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'liquid-button-primary text-white scale-105'
                  : 'liquid-pill text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          <AnimatePresence>
            {filteredProjects.map((project: ProjectItem, index: number) => {
              const previewImage = project.gallery?.[0]?.imageUrl;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col justify-between p-5 sm:p-6 rounded-[28px] liquid-glass-card group">
                    <div className="space-y-4">
                      {/* Preview Image */}
                      {previewImage && (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="block relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10] group/img"
                        >
                          <img
                            src={previewImage}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end justify-between p-3.5">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white/90 border border-white/15 text-[11px] font-medium">
                              <Images className="w-3 h-3 text-sky-300" />
                              <span>{project.gallery.length} Screens</span>
                            </span>
                            <span className="text-[11px] font-medium text-white bg-white/20 backdrop-blur-md border border-white/25 px-3 py-1 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity">
                              View Gallery
                            </span>
                          </div>
                        </Link>
                      )}

                      {/* Category & Icon */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-medium px-3 py-1 rounded-full liquid-pill text-sky-700 dark:text-sky-300">
                          {project.category}
                        </span>
                        <div className="w-9 h-9 rounded-full liquid-pill flex items-center justify-center">
                          {projectIcons[project.icon] || <span className="text-lg">{project.icon}</span>}
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <div>
                        <Link href={`/projects/${project.slug}`}>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors leading-snug">
                            {project.title}
                          </h3>
                        </Link>
                        {project.subtitle && (
                          <span className="font-serif italic text-base text-slate-500 dark:text-slate-400 block mt-0.5">
                            {project.subtitle}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.slice(0, 5).map(tag => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-full liquid-pill text-slate-600 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between gap-2 text-xs font-medium">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full liquid-button-primary text-white"
                      >
                        <span>Explore Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center gap-3">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sky-600 dark:text-sky-300 hover:underline"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-white"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
