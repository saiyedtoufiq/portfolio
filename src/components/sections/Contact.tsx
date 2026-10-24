'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Check, Copy, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { portfolioData } from '../../../data/portfolio';
import SpotlightCard from '../reactbits/SpotlightCard';
import { useTheme } from '../../context/ThemeContext';

export default function Contact() {
  const { personal } = portfolioData;
  const { isDark } = useTheme();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const formData = new FormData();
      formData.append('access_key', personal.contactFormKey);
      formData.append('name', formValues.name);
      formData.append('email', formValues.email);
      formData.append('subject', formValues.subject || 'Portfolio Inquiry');
      formData.append('message', formValues.message);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been received successfully. I will get back to you shortly.',
        });
        setFormValues({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage({
          type: 'error',
          text: data.message || 'Submission failed. Please try again or reach out directly via email.',
        });
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatusMessage({
        type: 'error',
        text: 'Network error occurred. Please try again or email me directly at saiyedtoufiq@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-slate-50 dark:bg-space-950 transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
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
            Let's Build Something{' '}
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
            Have a project in mind, an architectural challenge, or looking for an experienced full-stack engineer? Drop a line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-space-900/60 border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/40 backdrop-blur-xl"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Get In Touch</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  I typically respond within 24 hours. For urgent inquiries, direct email is the fastest route.
                </p>
              </div>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-space-950/80 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 group hover:border-cyan-500/30 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Direct Email</span>
                    <a
                      href={personal.social.email}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 truncate block transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy Email Address"
                  className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Quick Info Points */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-200/70 dark:bg-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Location: {personal.location} (Remote / Global)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-slate-200/70 dark:bg-white/5 flex items-center justify-center text-emerald-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span>Availability: {personal.availability}</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-8 border-t border-slate-200 dark:border-white/10 mt-8">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-3">Connect on Professional Networks</span>
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
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              theme={isDark ? 'dark' : 'light'}
              spotlightColor={isDark ? 'rgba(34, 211, 238, 0.2)' : 'rgba(2, 132, 199, 0.15)'}
              className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-space-900/80 border border-slate-200 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2">
                      Your Full Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-space-950/90 border border-slate-300 dark:border-white/10 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2">
                      Your Email Address <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-space-950/90 border border-slate-300 dark:border-white/10 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack System Redesign / Contract Role"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-space-950/90 border border-slate-300 dark:border-white/10 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-2">
                    Project Details & Scope <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your application requirements, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100/90 dark:bg-space-950/90 border border-slate-300 dark:border-white/10 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Status Message Alert */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-start gap-3 text-sm ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                        : 'bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300'
                    }`}
                  >
                    {statusMessage.type === 'success' ? (
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                    )}
                    <span>{statusMessage.text}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 hover:from-cyan-500 hover:via-indigo-500 hover:to-violet-500 shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
