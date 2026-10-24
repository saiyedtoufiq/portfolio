'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

const sectionList = [
  { id: 'home', index: '01', label: 'Intro', tag: 'HERO & ARCHITECTURE' },
  { id: 'about', index: '02', label: 'About', tag: 'ENGINEERING ROOTS' },
  { id: 'skills', index: '03', label: 'Skills', tag: 'CORE TECH STACK' },
  { id: 'projects', index: '04', label: 'Projects', tag: 'ENTERPRISE SYSTEMS' },
  { id: 'experience', index: '05', label: 'Experience', tag: 'CAREER MILESTONES' },
  { id: 'contact', index: '06', label: 'Contact', tag: 'START COLLABORATION' },
];

export default function RightVerticalNav() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100))) : 0;
      setScrollProgress(progress);

      const scrollPos = window.scrollY + 250;
      for (const sec of sectionList) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Vertical Page Navigation"
      className="fixed right-4 sm:right-7 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3 select-none"
    >
      {/* Theme Toggle Capsule */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Theme"
        className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/80 dark:bg-space-900/90 backdrop-blur-xl border border-slate-300 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/50 text-slate-700 dark:text-cyan-400 hover:border-cyan-500 transition-colors mb-2"
        title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Sun className="w-4 h-4 text-amber-400" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Moon className="w-4 h-4 text-cyan-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Main Vertical Spine */}
      <div className="py-4 px-2.5 rounded-3xl bg-white/75 dark:bg-space-900/85 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/60 flex flex-col items-end gap-3 relative">
        {sectionList.map((sec) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-end group py-1"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip Badge on Hover or Active */}
              <AnimatePresence>
                {(isHovered || (isActive && hoveredSection === null)) && (
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-12 whitespace-nowrap pointer-events-none z-50 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 dark:bg-space-950/95 text-white backdrop-blur-xl border border-cyan-500/30 shadow-xl text-xs font-mono"
                  >
                    <span className="text-cyan-400 font-bold">{sec.index}</span>
                    <span className="font-semibold tracking-wider uppercase text-slate-200">{sec.label}</span>
                    <span className="text-[10px] text-slate-400 border-l border-white/20 pl-2 hidden lg:inline">
                      {sec.tag}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Clickable Line & Indicator */}
              <button
                onClick={() => scrollTo(sec.id)}
                aria-label={`Jump to ${sec.label}`}
                className="flex items-center gap-2 group p-1 focus:outline-none"
              >
                <span
                  className={`text-[10px] font-mono transition-all ${
                    isActive
                      ? 'text-cyan-500 dark:text-cyan-300 font-bold scale-110'
                      : 'text-slate-400 dark:text-slate-600 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                  }`}
                >
                  {sec.index}
                </span>

                <div className="relative flex items-center">
                  <div
                    className={`h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-7 sm:w-9 bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-sm shadow-cyan-400'
                        : isHovered
                        ? 'w-5 bg-slate-400 dark:bg-slate-500'
                        : 'w-3 bg-slate-300 dark:bg-slate-800'
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute right-0 w-2 h-2 rounded-full bg-cyan-400 shadow-md shadow-cyan-400"
                    />
                  )}
                </div>
              </button>
            </div>
          );
        })}

        {/* Vertical Scroll Progress Meter */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/10 w-full flex flex-col items-center gap-1.5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="text-[10px] font-mono text-slate-400 dark:text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span className="text-[9px] font-mono font-semibold text-cyan-600 dark:text-cyan-400">
            {scrollProgress}%
          </span>
        </div>
      </div>
    </nav>
  );
}
