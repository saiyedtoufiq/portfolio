'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, ArrowUp } from 'lucide-react';

const sectionList = [
  { id: 'home', index: '01', label: 'Intro' },
  { id: 'about', index: '02', label: 'About' },
  { id: 'skills', index: '03', label: 'Stack' },
  { id: 'projects', index: '04', label: 'Projects' },
  { id: 'experience', index: '05', label: 'Experience' },
  { id: 'contact', index: '06', label: 'Contact' },
];

export default function RightVerticalNav() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0
          ? Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)))
          : 0;
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
      {/* Tall Liquid Glass Navigation Spine */}
      <div className="h-[68vh] min-h-[520px] max-h-[720px] py-6 px-3 sm:px-3.5 rounded-full liquid-glass flex flex-col justify-between items-center relative transition-all duration-300">
        {/* Top: Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Toggle Theme"
          className="w-9 h-9 rounded-full liquid-pill flex items-center justify-center text-slate-700 dark:text-sky-300 hover:border-sky-400/50 transition-colors"
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
                <Sun className="w-4 h-4 text-amber-300" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-4 h-4 text-slate-700" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Middle: Tall Spaced Section Indicators */}
        <div className="flex-1 flex flex-col justify-around py-6 w-full relative items-center">
          {/* Subtle vertical connecting track */}
          <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-slate-300/60 dark:bg-white/10 pointer-events-none -z-0" />

          {sectionList.map(sec => {
            const isActive = activeSection === sec.id;
            const isHovered = hoveredSection === sec.id;

            return (
              <div
                key={sec.id}
                className="relative flex items-center justify-center w-full py-1.5 z-10"
                onMouseEnter={() => setHoveredSection(sec.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Floating Glass Label on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 10, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-12 whitespace-nowrap pointer-events-none z-50 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass text-xs font-medium text-slate-800 dark:text-white shadow-xl"
                    >
                      <span className="font-serif italic text-sky-500 dark:text-sky-300">
                        {sec.index}
                      </span>
                      <span>{sec.label}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => scrollTo(sec.id)}
                  aria-label={`Jump to ${sec.label}`}
                  className="p-1.5 focus:outline-none flex items-center justify-center"
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-3 h-7 bg-gradient-to-b from-sky-400 to-indigo-500 shadow-[0_0_14px_rgba(56,189,248,0.65)]'
                        : isHovered
                        ? 'w-2.5 h-3.5 bg-sky-400'
                        : 'w-2 h-2 bg-slate-400 dark:bg-slate-600'
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom: Return to Top & Progress */}
        <div className="pt-3 border-t border-slate-200/70 dark:border-white/10 w-full flex flex-col items-center gap-1.5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full liquid-pill flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] font-medium text-sky-600 dark:text-sky-400">
            {scrollProgress}%
          </span>
        </div>
      </div>
    </nav>
  );
}
