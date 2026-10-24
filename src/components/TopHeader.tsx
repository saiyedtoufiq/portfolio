'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Menu, X, ArrowUpRight, Sun, Moon, Terminal } from 'lucide-react';

export default function TopHeader() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = portfolioData.navigation;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
        {/* Left Brand Identity (Pointer Events Auto) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-auto"
        >
          <a
            href="#home"
            className="flex items-center gap-3 group px-4 py-2 rounded-2xl bg-white/70 dark:bg-space-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30 hover:border-cyan-500/40 transition-all"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-sm shadow-cyan-500/30">
              <div className="w-full h-full rounded-[11px] bg-slate-900 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-cyan-300">TR</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  Toufiq Sayyed
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  Senior Web Dev
                </span>
              </div>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                Available for high-impact roles
              </span>
            </div>
          </a>
        </motion.div>

        {/* Right Top Actions (Pointer Events Auto) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-auto flex items-center gap-2 sm:gap-3"
        >
          {/* Social Links on Desktop */}
          <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-2xl bg-white/70 dark:bg-space-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-8 h-8 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-black/5 dark:hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center bg-white/80 dark:bg-space-900/90 backdrop-blur-xl border border-slate-300 dark:border-white/10 text-slate-700 dark:text-cyan-400 shadow-md"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle Navigation"
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center bg-white/80 dark:bg-space-900/90 backdrop-blur-xl border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden rounded-3xl bg-white/95 dark:bg-space-900/95 backdrop-blur-2xl border border-cyan-500/30 p-6 shadow-2xl shadow-black/40 flex flex-col gap-4 text-slate-800 dark:text-slate-100"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-500 dark:hover:text-cyan-300 flex items-center justify-between transition-all"
                >
                  <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">0{idx + 1}</span>
                  <span className="font-semibold">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="/Toufiq-Rehman-Sayyed-CV.pdf"
                  download
                  className="px-3.5 py-2 rounded-xl bg-cyan-500 text-space-950 font-semibold text-xs flex items-center gap-1"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
