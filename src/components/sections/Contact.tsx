'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Check, Copy, MapPin, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../../data/portfolio';
import SpotlightCard from '../reactbits/SpotlightCard';
import { useTheme } from '../../context/ThemeContext';

export default function Contact() {
  const { personal } = portfolioData;
  const { isDark } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-space-950 transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Have a project in mind, an architectural challenge, or looking for an experienced full-stack engineer? Reach out directly.
          </motion.p>
        </div>

        {/* Centered Direct Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <SpotlightCard
            theme={isDark ? 'dark' : 'light'}
            spotlightColor={isDark ? 'rgba(34, 211, 238, 0.2)' : 'rgba(2, 132, 199, 0.15)'}
            className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-space-900/60 border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 backdrop-blur-xl"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  I typically respond within 24 hours. For urgent inquiries, direct email or phone is the fastest route.
                </p>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/90 dark:bg-space-950/80 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Direct Email</span>
                    <a
                      href={personal.social.email}
                      className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 truncate block transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy Email Address"
                    className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={personal.social.email}
                    aria-label="Send Email"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-mono font-semibold shadow-md shadow-cyan-500/20 transition-all"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Quick Info Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 block">Phone</span>
                    <a href={personal.social.phone} className="hover:text-cyan-600 dark:hover:text-cyan-400 font-mono font-medium transition-colors">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/5 flex items-center justify-center text-emerald-500 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-400 block">Status</span>
                    <span className="font-medium truncate block">{personal.availability}</span>
                  </div>
                </div>

                <div className="sm:col-span-2 p-4 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Connect on Professional Networks
              </span>
              <div className="flex gap-3">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 text-xs font-mono transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-indigo-500/10 border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-300 text-xs font-mono transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
