'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Check, Copy, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../../data/portfolio';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-transparent transition-colors duration-500">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-serif italic text-xl sm:text-2xl text-sky-600 dark:text-sky-300 mb-2"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Let&apos;s Build Something{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-300 dark:to-indigo-300 bg-clip-text text-transparent pr-1">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Have a project in mind or looking for an experienced full-stack engineer? Reach out directly anytime.
          </motion.p>
        </div>

        {/* Centered Liquid Glass Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 sm:p-10 rounded-[32px] liquid-glass space-y-7">
            {/* Direct Email Pill */}
            <div className="p-4 sm:p-5 rounded-2xl liquid-pill flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-500 dark:text-sky-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-serif italic text-sm text-slate-500 dark:text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={personal.social.email}
                    className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-300 truncate block transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  className="p-2.5 rounded-full liquid-pill text-slate-700 dark:text-slate-200 hover:text-sky-500 transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={personal.social.email}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full liquid-button-primary text-white text-xs font-medium"
                >
                  <span>Say Hello</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl liquid-pill flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <Phone className="w-4 h-4 text-sky-500 dark:text-sky-300 shrink-0" />
                <a href={personal.social.phone} className="hover:text-sky-500 transition-colors">
                  {personal.phone}
                </a>
              </div>

              <div className="p-4 rounded-2xl liquid-pill flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] shrink-0" />
                <span className="truncate">{personal.availability}</span>
              </div>

              <div className="sm:col-span-2 p-4 rounded-2xl liquid-pill flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                <MapPin className="w-4 h-4 text-sky-500 dark:text-sky-300 shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-5 border-t border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-serif italic text-base text-slate-500 dark:text-slate-400">
                Elsewhere on the web
              </span>
              <div className="flex gap-3">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full liquid-pill text-slate-700 dark:text-slate-200 hover:text-sky-500 text-xs font-medium transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full liquid-pill text-slate-700 dark:text-slate-200 hover:text-sky-500 text-xs font-medium transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
