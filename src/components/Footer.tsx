'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '../../data/portfolio';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { personal, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-20">
        <div className="p-6 sm:p-8 rounded-[32px] liquid-glass flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <Link href="/#home" className="inline-flex items-center gap-2.5 group">
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {personal.firstName}{' '}
                <span className="font-serif italic font-normal text-sky-600 dark:text-sky-300">
                  {personal.lastName}
                </span>
              </span>
            </Link>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300">
            {navigation.map(link => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                className="hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full liquid-pill text-slate-700 dark:text-slate-200 hover:text-sky-500 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full liquid-pill text-slate-700 dark:text-slate-200 hover:text-sky-500 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.social.email}
              aria-label="Email"
              className="p-2.5 rounded-full liquid-pill text-slate-700 dark:text-slate-200 hover:text-sky-500 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              className="p-2.5 rounded-full liquid-button-primary text-white ml-1"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
