'use client';

import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-space-950 border-t border-slate-200 dark:border-white/10 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-space-950 flex items-center justify-center">
                  <span className="font-mono text-[10px] font-bold text-cyan-600 dark:text-cyan-400">TR</span>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wider">
                {personal.name}
              </span>
            </a>
            <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              Architecting scalable backend ecosystems and modern web experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-600 dark:text-slate-400">
            {navigation.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.social.email}
              aria-label="Email"
              className="p-2.5 rounded-full bg-slate-200/80 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              className="p-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-600/20 hover:scale-105 active:scale-95 transition-all ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. Crafted with Next.js, TypeScript & React Bits.
          </p>
          <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
            Engineered for high performance, accessibility & SEO.
          </p>
        </div>
      </div>
    </footer>
  );
}
