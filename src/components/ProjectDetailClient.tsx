'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Building2,
  Calendar,
  Trophy,
  Users,
  GraduationCap,
  Zap,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Sun,
  Moon,
} from 'lucide-react';
import { ProjectItem } from '../../data/portfolio';
import ClickSpark from './reactbits/ClickSpark';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

interface ProjectDetailClientProps {
  project: ProjectItem;
  prevProject: ProjectItem;
  nextProject: ProjectItem;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const { isDark, toggleTheme } = useTheme();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const gallery = project.gallery || [];

  const projectIcons: Record<string, React.ReactNode> = {
    '🏢': <Building2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
    '🗓️': <Calendar className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
    '🏆': <Trophy className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    '🤝': <Users className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
    '🎓': <GraduationCap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    '⚡': <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
  };

  const handlePrevSlide = useCallback(() => {
    setActiveSlideIndex(prev => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery.length]);

  const handleNextSlide = useCallback(() => {
    setActiveSlideIndex(prev => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  const handleLightboxPrev = useCallback(() => {
    setIsZoomed(false);
    setLightboxIndex(prev =>
      prev === null ? null : prev === 0 ? gallery.length - 1 : prev - 1
    );
  }, [gallery.length]);

  const handleLightboxNext = useCallback(() => {
    setIsZoomed(false);
    setLightboxIndex(prev =>
      prev === null ? null : prev === gallery.length - 1 ? 0 : prev + 1
    );
  }, [gallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        handleLightboxPrev();
      } else if (e.key === 'ArrowRight') {
        handleLightboxNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleLightboxPrev, handleLightboxNext]);

  const currentSlide = gallery[activeSlideIndex] || gallery[0];
  const currentLightboxItem = lightboxIndex !== null ? gallery[lightboxIndex] : null;

  return (
    <ClickSpark
      sparkColor={['#22d3ee', '#818cf8', '#c084fc']}
      sparkSize={12}
      sparkRadius={26}
      sparkCount={7}
      duration={400}
      extraScale={1}
      shape="streak"
    >
      <div className="min-h-screen flex flex-col relative bg-slate-50 dark:bg-space-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Ambient Glows */}
        <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

        {/* Sticky Top Bar */}
        <header className="sticky top-0 z-40 backdrop-blur-2xl bg-white/80 dark:bg-space-950/80 border-b border-slate-200 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-space-900 hover:bg-cyan-500/10 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2.5">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-space-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source</span>
                </a>
              )}

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-space-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-cyan-600" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 relative z-10 py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Concise Project Header */}
            <section className="space-y-5 max-w-4xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-space-900 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm shrink-0">
                  {projectIcons[project.icon] || <span className="text-2xl">{project.icon}</span>}
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                    {project.category}
                  </span>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                  </h1>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.metrics && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {project.metrics}
                  </span>
                )}

                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-space-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Gallery */}
            {currentSlide && (
              <section className="space-y-6">
                {/* Main Preview Stage */}
                <div className="rounded-3xl bg-white/90 dark:bg-space-900/80 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
                  {/* Top Bar */}
                  <div className="px-4 sm:px-6 py-3 bg-slate-100 dark:bg-space-950/90 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-600 dark:text-slate-300 font-semibold truncate">
                        {currentSlide.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        {currentSlide.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {activeSlideIndex + 1} / {gallery.length}
                      </span>
                      <button
                        onClick={() => setLightboxIndex(activeSlideIndex)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-white/5 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-200 hover:text-cyan-400 text-xs font-mono transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Expand</span>
                      </button>
                    </div>
                  </div>

                  {/* Active Image */}
                  <div className="relative group bg-space-950 aspect-[16/9] max-h-[540px] w-full overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide.id}
                        src={currentSlide.imageUrl}
                        alt={currentSlide.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setLightboxIndex(activeSlideIndex)}
                        className="w-full h-full object-contain cursor-zoom-in select-none"
                      />
                    </AnimatePresence>

                    {gallery.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevSlide}
                          aria-label="Previous image"
                          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-lg transition-all opacity-80 group-hover:opacity-100"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextSlide}
                          aria-label="Next image"
                          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-lg transition-all opacity-80 group-hover:opacity-100"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption */}
                  <div className="px-5 py-4 bg-white dark:bg-space-900 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {currentSlide.caption}
                    </p>
                    <button
                      onClick={() => setLightboxIndex(activeSlideIndex)}
                      className="self-start sm:self-center shrink-0 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Fullscreen</span>
                    </button>
                  </div>
                </div>

                {/* Gallery Thumbnail Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {gallery.map((item, idx) => {
                    const isCurrent = idx === activeSlideIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSlideIndex(idx)}
                        className={`group text-left rounded-2xl overflow-hidden border transition-all bg-white dark:bg-space-900 ${
                          isCurrent
                            ? 'border-cyan-500 ring-2 ring-cyan-500/25 shadow-md'
                            : 'border-slate-200 dark:border-white/10 opacity-75 hover:opacity-100 hover:border-cyan-500/40'
                        }`}
                      >
                        <div className="aspect-[16/10] bg-space-950 overflow-hidden">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-2.5">
                          <span className="block text-[10px] font-mono text-cyan-600 dark:text-cyan-400 truncate">
                            {item.tag}
                          </span>
                          <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                            {item.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Prev / Next Project Navigation */}
            <section className="pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 flex items-center gap-3.5 transition-all"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:-translate-x-1 transition-all shrink-0" />
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 block">Previous</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 truncate block">
                    {prevProject.title}
                  </span>
                </div>
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="group p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 flex items-center justify-end gap-3.5 text-right transition-all"
              >
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 block">Next</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 truncate block">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </section>
          </div>
        </main>

        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {currentLightboxItem && lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 select-none"
              onClick={() => {
                setLightboxIndex(null);
                setIsZoomed(false);
              }}
            >
              <div
                className="max-w-6xl w-full mx-auto flex items-center justify-between gap-4 z-10"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    {currentLightboxItem.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white truncate">
                    {currentLightboxItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(prev => !prev)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      setIsZoomed(false);
                    }}
                    className="p-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 border border-rose-500/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div
                className="relative flex-1 flex items-center justify-center my-4 overflow-auto"
                onClick={e => e.stopPropagation()}
              >
                <motion.img
                  key={currentLightboxItem.id}
                  src={currentLightboxItem.imageUrl}
                  alt={currentLightboxItem.title}
                  animate={{ scale: isZoomed ? 1.35 : 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsZoomed(prev => !prev)}
                  className={`max-h-[75vh] w-auto rounded-2xl border border-white/10 shadow-2xl ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                />

                <button
                  onClick={handleLightboxPrev}
                  aria-label="Previous image"
                  className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/90 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-xl"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleLightboxNext}
                  aria-label="Next image"
                  className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/90 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div
                className="max-w-3xl w-full mx-auto text-center z-10"
                onClick={e => e.stopPropagation()}
              >
                <p className="text-xs sm:text-sm text-slate-300">
                  {currentLightboxItem.caption}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </ClickSpark>
  );
}
