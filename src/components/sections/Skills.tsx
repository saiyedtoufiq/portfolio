'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, SkillItem } from '../../../data/portfolio';
import ScrollVelocity from '../reactbits/ScrollVelocity';
import SpotlightCard from '../reactbits/SpotlightCard';
import { Server, Layout, Database, Wrench, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const { skills } = portfolioData;
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Backend Architecture', 'Frontend Engineering', 'Database & Caching', 'DevOps & Tooling'];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Backend Architecture': <Server className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    'Frontend Engineering': <Layout className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
    'Database & Caching': <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    'DevOps & Tooling': <Wrench className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  };

  const allSkills: (SkillItem & { parentCategory: string })[] = skills.flatMap(cat =>
    cat.items.map(item => ({ ...item, parentCategory: cat.category }))
  );

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter(item => item.parentCategory === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-slate-100/60 dark:bg-space-900/40 transition-colors duration-300">
      {/* Kinetic Text Marquee using ScrollVelocity */}
      <div className="mb-16 sm:mb-20 overflow-hidden opacity-90 py-4 border-y border-slate-200 dark:border-white/5 bg-white/70 dark:bg-space-950/80">
        <ScrollVelocity
          texts={[
            'PHP ✦ LARAVEL ✦ RESTFUL APIS ✦ MYSQL ✦ REACT ✦ NEXT.JS ✦ TYPESCRIPT ✦',
            '✦ POSTGRESQL ✦ CODEIGNITER ✦ DOCKER ✦ REDIS ✦ GIT ✦ TAILWIND CSS ✦',
          ]}
          velocity={55}
          className="text-cyan-600/40 dark:text-cyan-300/40 font-mono text-2xl sm:text-4xl font-bold tracking-widest"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-mono font-medium mb-4"
          >
            <span>Production Toolset</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Technical Arsenal &{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Core Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Proven frameworks, databases, and architectural tools leveraged daily to construct fast, stable software.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/25 scale-105'
                    : 'bg-white/80 dark:bg-space-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  theme={isDark ? 'dark' : 'light'}
                  spotlightColor={isDark ? 'rgba(34, 211, 238, 0.2)' : 'rgba(2, 132, 199, 0.15)'}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-space-950/80 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-cyan-500/40 transition-all flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                        {skill.badge || skill.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {skill.proficiency}%
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-wide">
                      {skill.name}
                    </h4>

                    {/* Proficiency Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-space-850 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency || 85}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="truncate">{skill.parentCategory}</span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                      <CheckCircle className="w-3 h-3" /> Production
                    </span>
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
