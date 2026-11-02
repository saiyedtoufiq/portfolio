'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, SkillItem } from '../../../data/portfolio';
import { Database, Code, Layers, Cpu } from 'lucide-react';

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Core Stack',
    'Databases & Caching',
    'Architecture',
    'Third-Party Integrations',
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Core Stack': <Code className="w-4 h-4 text-sky-500 dark:text-sky-300" />,
    'Databases & Caching': <Database className="w-4 h-4 text-emerald-500 dark:text-emerald-300" />,
    'Architecture': <Cpu className="w-4 h-4 text-indigo-500 dark:text-indigo-300" />,
    'Third-Party Integrations': <Layers className="w-4 h-4 text-amber-500 dark:text-amber-300" />,
  };

  const allSkills: (SkillItem & { parentCategory: string })[] = skills.flatMap(cat =>
    cat.items.map(item => ({ ...item, parentCategory: cat.category }))
  );

  const filteredSkills =
    selectedCategory === 'All'
      ? allSkills
      : allSkills.filter(item => item.parentCategory === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-serif italic text-xl sm:text-2xl text-sky-600 dark:text-sky-300 mb-2"
          >
            Capabilities &amp; Craft
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Technologies &amp;{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-300 dark:to-indigo-300 bg-clip-text text-transparent pr-1">
              Core Stack
            </span>
          </motion.h2>
        </div>

        {/* Liquid Glass Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'liquid-button-primary text-white scale-105'
                    : 'liquid-pill text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Liquid Glass Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
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
                <div className="p-4 rounded-2xl liquid-glass-card flex items-center justify-between gap-3 h-full group">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="w-9 h-9 rounded-xl liquid-pill flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      {categoryIcons[skill.parentCategory] || <Code className="w-4 h-4 text-sky-400" />}
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                      {skill.name}
                    </h4>
                  </div>

                  {skill.badge && (
                    <span className="font-serif italic text-xs px-2.5 py-0.5 rounded-full liquid-pill text-sky-700 dark:text-sky-300 flex-shrink-0">
                      {skill.badge}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
