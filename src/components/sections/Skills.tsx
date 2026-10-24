'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, SkillItem } from '../../../data/portfolio';
import ScrollVelocity from '../reactbits/ScrollVelocity';
import SpotlightCard from '../reactbits/SpotlightCard';
import { Server, Layout, Database, Wrench, CheckCircle, Code, Layers, Cpu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Skills() {
  const { skills } = portfolioData;
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Languages & Core',
    'Backend Architecture',
    'Frontend Engineering',
    'Databases & Performance',
    'System Architecture',
    'Integrations & APIs',
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages & Core': <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    'Backend Architecture': <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    'Frontend Engineering': <Layout className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
    'Databases & Performance': <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    'System Architecture': <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
    'Integrations & APIs': <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
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
            'REACT.JS ✦ LARAVEL ✦ TYPESCRIPT ✦ NODE.JS ✦ MYSQL ✦ POSTGRESQL ✦ REDIS QUEUES ✦',
            '✦ MULTI-TENANT SAAS ✦ RESTFUL APIS ✦ STRIPE & PAYPAL ✦ GOOGLE & MS APIS ✦ RBAC ✦',
          ]}
          velocity={50}
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

        {/* Skills Grid - Simple & Compact */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-3.5">
          <AnimatePresence>
            {filteredSkills.map(skill => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  theme={isDark ? 'dark' : 'light'}
                  spotlightColor={isDark ? 'rgba(34, 211, 238, 0.15)' : 'rgba(2, 132, 199, 0.12)'}
                  className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-space-950/80 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-cyan-500/40 hover:bg-white dark:hover:bg-space-900 transition-all flex items-center justify-between gap-2.5 h-full group"
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-space-900 border border-slate-200/80 dark:border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-cyan-500/30 transition-all text-cyan-600 dark:text-cyan-400">
                      {categoryIcons[skill.parentCategory] || <Code className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                        {skill.name}
                      </h4>
                    </div>
                  </div>

                  {skill.badge && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/20 flex-shrink-0">
                      {skill.badge}
                    </span>
                  )}
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
