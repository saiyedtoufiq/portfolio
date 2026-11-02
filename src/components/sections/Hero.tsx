'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Layers, Database, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

const Aurora = dynamic(() => import('../reactbits/Aurora'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

export default function Hero() {
  const { personal, projects } = portfolioData;
  const { isDark } = useTheme();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personal.cvUrl;
    link.download = 'Toufiq-Rehman-Sayyed-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const featuredProject = projects[0];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full py-20 sm:py-24 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-space-950 transition-colors duration-500"
    >
      {/* Dynamic Aurora Liquid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-70 dark:opacity-55">
        <Aurora
          colorStops={
            isDark
              ? ['#06b6d4', '#4f46e5', '#9333ea']
              : ['#38bdf8', '#818cf8', '#c084fc']
          }
          speed={0.45}
          amplitude={1.05}
          blend={0.5}
          opacity={isDark ? 0.55 : 0.4}
          lightMode={!isDark}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-space-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Liquid Glass Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-pill text-xs font-medium text-slate-700 dark:text-slate-200 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              <span>Full Stack Engineer</span>
              <span className="text-slate-300 dark:text-white/20">•</span>
              <span className="font-serif italic text-sm text-sky-600 dark:text-sky-300">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Stylish Editorial Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.06] mb-5">
              <span className="block">Toufiq Rehman</span>
              <span className="font-serif italic font-normal bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 dark:from-sky-300 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent pr-2">
                Sayyed
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-200 mb-4">
              Crafting scalable{' '}
              <span className="font-serif italic text-xl sm:text-2xl text-sky-600 dark:text-sky-300">
                multi-tenant SaaS
              </span>
              , resilient backends, and fluid web experiences.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-9">
              {personal.bioShort}
            </p>

            {/* Liquid Glass Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-white liquid-button-primary"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-medium text-sm text-slate-700 dark:text-slate-200 liquid-pill hover:border-sky-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-sky-500 dark:text-sky-300" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Soft Glass Metrics Row */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg">
              <div className="p-4 rounded-2xl liquid-glass-card text-left">
                <span className="block font-serif italic text-3xl text-slate-900 dark:text-white">
                  5+ yrs
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  Production Craft
                </span>
              </div>
              <div className="p-4 rounded-2xl liquid-glass-card text-left">
                <span className="block font-serif italic text-3xl text-sky-600 dark:text-sky-300">
                  ~60%
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  Faster APIs
                </span>
              </div>
              <div className="p-4 rounded-2xl liquid-glass-card text-left">
                <span className="block font-serif italic text-3xl text-indigo-600 dark:text-indigo-300">
                  15+
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  Systems Shipped
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Liquid Glass Featured Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-sky-500/20 via-indigo-500/15 to-purple-500/20 rounded-3xl blur-3xl -z-10" />

            <div className="p-6 sm:p-7 rounded-3xl liquid-glass space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-serif italic text-base text-sky-600 dark:text-sky-300 block">
                    Core Focus
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    Full-Stack Architecture
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full liquid-pill text-xs font-medium text-slate-700 dark:text-slate-200">
                  React · Laravel · Node
                </span>
              </div>

              {/* 2x2 Liquid Glass Pillars */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl liquid-pill space-y-1.5">
                  <Layers className="w-4 h-4 text-sky-500 dark:text-sky-300" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Multi-Tenant SaaS
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Dynamic form builders &amp; isolated workspaces
                  </p>
                </div>

                <div className="p-4 rounded-2xl liquid-pill space-y-1.5">
                  <Database className="w-4 h-4 text-indigo-500 dark:text-indigo-300" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Data &amp; Caching
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    MySQL, PostgreSQL &amp; Redis index tuning
                  </p>
                </div>

                <div className="p-4 rounded-2xl liquid-pill space-y-1.5">
                  <Globe className="w-4 h-4 text-purple-500 dark:text-purple-300" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Ecosystem Sync
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Google, Microsoft 365, Stripe &amp; FCM
                  </p>
                </div>

                <div className="p-4 rounded-2xl liquid-pill space-y-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-300" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Security &amp; Scale
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Granular RBAC, JWT &amp; async worker queues
                  </p>
                </div>
              </div>

              {/* Featured Project Spotlight */}
              {featuredProject && (
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="group block p-4 rounded-2xl liquid-pill hover:border-sky-400/50 transition-all"
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className="text-xs font-medium text-sky-600 dark:text-sky-300">
                      Featured Spotlight
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-sky-400 transition-colors">
                      <span>View Gallery</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {featuredProject.title}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-1">
                    {featuredProject.subtitle}
                  </p>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
