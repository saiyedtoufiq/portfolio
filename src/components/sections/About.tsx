'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Zap, ShieldCheck, Cpu, Terminal, Layers, GraduationCap, Award } from 'lucide-react';
import { portfolioData, EducationItem } from '../../../data/portfolio';
import SpotlightCard from '../reactbits/SpotlightCard';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { personal, highlights, education } = portfolioData;
  const { isDark } = useTheme();

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
    Server: <Server className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    Database: <Database className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
    Zap: <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-space-950 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium mb-4"
          >
            <span>Background & Architecture</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Full-Stack Engineering &{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
              Architectural Roots
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Over 5 years designing multi-tenant SaaS platforms, optimizing high-load databases, and engineering reliable RESTful APIs from schema to UI.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Personal Narrative & Core Principles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-space-900/60 border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Engineering Philosophy</h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">Multi-Tenant SaaS • RBAC • Query Optimization</span>
                </div>
              </div>

              {personal.bioLong.map((para, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>RBAC & JWT Security</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Zap className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <span>~60% Latency Tuning</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Database className="w-4 h-4 text-violet-500 flex-shrink-0" />
                  <span>MySQL & PostgreSQL Opt</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <Layers className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Queue & Worker Scaling</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Location: {personal.location}</span>
              <span className="text-emerald-600 dark:text-emerald-400">● {personal.availability}</span>
            </div>
          </motion.div>

          {/* Right Column: 4 Interactive Spotlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <SpotlightCard
                  theme={isDark ? 'dark' : 'light'}
                  spotlightColor={
                    isDark
                      ? index === 0
                        ? 'rgba(34, 211, 238, 0.25)'
                        : index === 1
                        ? 'rgba(99, 102, 241, 0.25)'
                        : index === 2
                        ? 'rgba(168, 85, 247, 0.25)'
                        : 'rgba(16, 185, 129, 0.25)'
                      : 'rgba(2, 132, 199, 0.15)'
                  }
                  className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-space-900/60 border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-space-950/80 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-inner">
                      {iconMap[item.icon] || <Zap className="w-6 h-6 text-cyan-500" />}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Verified Production</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">5+ Yrs</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Academic Pedigree */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">Academic Background & Degrees</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <SpotlightCard
                key={idx}
                theme={isDark ? 'dark' : 'light'}
                spotlightColor="rgba(34, 211, 238, 0.15)"
                className="p-6 rounded-2xl bg-white/70 dark:bg-space-900/50 border border-slate-200 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                      {edu.duration}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    {edu.field}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
