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
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center select-none"
    >
      {/* Tall Architectural Navigation Spine */}
      <div className="h-[65vh] min-h-[520px] max-h-[700px] py-5 sm:py-7 px-2.5 sm:px-3.5 rounded-full sm:rounded-3xl bg-white/80 dark:bg-space-900/85 backdrop-blur-2xl border border-slate-200 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/70 flex flex-col justify-between items-center relative transition-colors duration-300">
        
        {/* Top: Theme Toggle Capsule */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle Theme"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-space-950/90 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-cyan-400 hover:border-cyan-500 transition-colors shadow-sm"
          title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-4 h-4 text-amber-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-4 h-4 text-cyan-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Middle: Section Items spaced along the tall rail */}
        <div className="flex-1 flex flex-col justify-around py-4 w-full relative items-center">
          {/* Subtle vertical spine track line */}
          <div className="absolute top-2 bottom-2 right-[7px] sm:right-[9px] w-[1px] bg-slate-200 dark:bg-white/5 pointer-events-none -z-0" />

          {sectionList.map((sec) => {
            const isActive = activeSection === sec.id;
            const isHovered = hoveredSection === sec.id;

            return (
              <div
                key={sec.id}
                className="relative flex items-center justify-end w-full group py-1.5 z-10"
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
                      className="absolute right-14 whitespace-nowrap pointer-events-none z-50 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/95 dark:bg-space-950/95 text-white backdrop-blur-xl border border-cyan-500/30 shadow-xl text-xs font-mono"
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
                    className={`text-[9px] sm:text-[10px] font-mono transition-all ${
                      isActive
                        ? 'text-cyan-600 dark:text-cyan-300 font-bold scale-110'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                    }`}
                  >
                    {sec.index}
                  </span>

                  <div className="relative flex items-center">
                    <div
                      className={`h-[2px] rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-7 sm:w-10 bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-sm shadow-cyan-400'
                          : isHovered
                          ? 'w-5 sm:w-6 bg-slate-400 dark:bg-slate-400'
                          : 'w-2.5 sm:w-3.5 bg-slate-300 dark:bg-slate-700'
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
        </div>

        {/* Bottom: Progress Counter & Return to Top */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/10 w-full flex flex-col items-center gap-1.5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="text-[10px] font-mono text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-1"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span className="text-[9px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
            {scrollProgress}%
          </span>
        </div>
      </div>
    </nav>
  );
}
