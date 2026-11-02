'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Zap, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../../data/portfolio';

export default function About() {
  const { personal, highlights, education } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code2 className="w-5 h-5 text-sky-500 dark:text-sky-300" />,
    Server: <Server className="w-5 h-5 text-indigo-500 dark:text-indigo-300" />,
    Database: <Database className="w-5 h-5 text-purple-500 dark:text-purple-300" />,
    Zap: <Zap className="w-5 h-5 text-emerald-500 dark:text-emerald-300" />,
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-transparent transition-colors duration-500">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-serif italic text-xl sm:text-2xl text-sky-600 dark:text-sky-300 mb-2"
          >
            Background &amp; Craft
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Full-Stack Engineering &amp;{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-300 dark:to-indigo-300 bg-clip-text text-transparent pr-1">
              Architectural Roots
            </span>
          </motion.h2>
        </div>

        {/* Liquid Glass Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch mb-14">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-[32px] liquid-glass"
          >
            <div className="space-y-5">
              <div>
                <span className="font-serif italic text-lg text-sky-600 dark:text-sky-300 block">
                  Approach
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Thoughtful Systems, Built to Last
                </h3>
              </div>

              {personal.bioLong.map((para, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>{personal.location}</span>
              <span className="text-emerald-600 dark:text-emerald-300 font-medium">
                ● {personal.availability}
              </span>
            </div>
          </motion.div>

          {/* 4 Liquid Glass Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="h-full"
              >
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-[28px] liquid-glass-card">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-2xl liquid-pill flex items-center justify-center">
                      {iconMap[item.icon] || <Zap className="w-5 h-5 text-sky-400" />}
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="pt-6">
          <div className="flex items-center gap-2.5 mb-5">
            <GraduationCap className="w-5 h-5 text-sky-500 dark:text-sky-300" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[24px] liquid-glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-medium px-3 py-1 rounded-full liquid-pill text-slate-600 dark:text-slate-300">
                      {edu.duration}
                    </span>
                    <span className="font-serif italic text-base text-emerald-600 dark:text-emerald-300">
                      {edu.grade}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
