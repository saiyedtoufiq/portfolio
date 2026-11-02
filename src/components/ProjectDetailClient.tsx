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
  Images,
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
    '🏢': <Building2 className="w-7 h-7 text-sky-500 dark:text-sky-300" />,
    '🗓️': <Calendar className="w-7 h-7 text-indigo-500 dark:text-indigo-300" />,
    '🏆': <Trophy className="w-7 h-7 text-amber-500 dark:text-amber-300" />,
    '🤝': <Users className="w-7 h-7 text-violet-500 dark:text-violet-300" />,
    '🎓': <GraduationCap className="w-7 h-7 text-emerald-500 dark:text-emerald-300" />,
    '⚡': <Zap className="w-7 h-7 text-sky-500 dark:text-sky-300" />,
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
      sparkColor={['#38bdf8', '#818cf8', '#c084fc']}
      sparkSize={12}
      sparkRadius={26}
      sparkCount={7}
      duration={400}
      extraScale={1}
      shape="streak"
    >
      <div className="min-h-screen w-full flex flex-col relative bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-500">
        {/* Soft Liquid Ambient Lighting */}
        <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed bottom-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Floating Liquid Glass Top Header */}
        <header className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl mx-auto h-14 px-4 sm:px-6 rounded-full liquid-glass flex items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>

            <div className="flex items-center gap-2.5">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full liquid-pill text-xs font-medium text-slate-600 dark:text-slate-300">
                <Images className="w-3.5 h-3.5 text-sky-500 dark:text-sky-300" />
                <span>{gallery.length} Screens</span>
              </span>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full liquid-button-primary text-white text-xs font-medium"
                >
                  <span>Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full liquid-pill text-slate-700 dark:text-slate-200 text-xs font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-full liquid-pill flex items-center justify-center text-slate-700 dark:text-sky-300 hover:scale-105 transition-transform"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full relative z-10 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Sculpted Liquid Glass Hero Card */}
            <section className="p-7 sm:p-10 rounded-3xl liquid-glass w-full">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="space-y-5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl liquid-pill flex items-center justify-center shrink-0">
                      {projectIcons[project.icon] || (
                        <span className="text-2xl">{project.icon}</span>
                      )}
                    </div>
                    <span className="px-3.5 py-1 rounded-full liquid-pill text-xs font-medium text-sky-700 dark:text-sky-300">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full liquid-pill text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{project.metrics}</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                      {project.title}
                    </h1>
                    {project.subtitle && (
                      <p className="font-serif italic text-xl sm:text-2xl text-sky-600 dark:text-sky-300 mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3.5 py-1.5 rounded-full liquid-pill text-slate-700 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Quick Action Box */}
                {currentSlide && (
                  <div className="flex flex-col items-start lg:items-end justify-between gap-4 shrink-0">
                    <button
                      onClick={() => setLightboxIndex(activeSlideIndex)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-button-primary text-white text-xs sm:text-sm font-medium"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Open Fullscreen Gallery</span>
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Interactive Showcase Viewer */}
            {currentSlide && (
              <section className="space-y-8 w-full">
                <div className="rounded-3xl liquid-glass overflow-hidden p-3 sm:p-4">
                  {/* Main Preview Frame */}
                  <div className="relative group rounded-2xl bg-slate-950 aspect-[16/9] max-h-[580px] w-full overflow-hidden flex items-center justify-center border border-white/10">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide.id}
                        src={currentSlide.imageUrl}
                        alt={currentSlide.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setLightboxIndex(activeSlideIndex)}
                        className="w-full h-full object-contain cursor-zoom-in select-none"
                      />
                    </AnimatePresence>

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-xl border border-white/15 text-sky-300 text-xs font-medium">
                        {currentSlide.tag}
                      </span>

                      <button
                        onClick={() => setLightboxIndex(activeSlideIndex)}
                        className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/75 hover:bg-slate-900 backdrop-blur-xl border border-white/15 text-white text-xs font-medium transition-all"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-sky-300" />
                        <span>Fullscreen ({activeSlideIndex + 1}/{gallery.length})</span>
                      </button>
                    </div>

                    {gallery.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevSlide}
                          aria-label="Previous image"
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/75 hover:bg-sky-500 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center shadow-xl transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextSlide}
                          aria-label="Next image"
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/75 hover:bg-sky-500 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center shadow-xl transition-all"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Active Image Caption & Filmstrip */}
                  <div className="pt-4 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {currentSlide.title}
                      </h2>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                        {currentSlide.caption}
                      </p>
                    </div>

                    {/* Mini Dots / Counter */}
                    <div className="flex items-center gap-2 shrink-0">
                      {gallery.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveSlideIndex(idx)}
                          aria-label={`View slide ${idx + 1}`}
                          className={`h-2 rounded-full transition-all ${
                            idx === activeSlideIndex
                              ? 'w-8 bg-sky-400'
                              : 'w-2 bg-slate-400/40 hover:bg-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gallery Grid Cards */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif italic text-2xl text-slate-800 dark:text-slate-200">
                      All Gallery Views
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Click any preview to focus or enlarge
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {gallery.map((item, idx) => {
                      const isCurrent = idx === activeSlideIndex;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setActiveSlideIndex(idx)}
                          className={`group cursor-pointer rounded-2xl p-2.5 transition-all liquid-glass-card flex flex-col justify-between ${
                            isCurrent
                              ? 'ring-2 ring-sky-400/80'
                              : 'opacity-80 hover:opacity-100'
                          }`}
                        >
                          <div className="relative aspect-[16/10] rounded-xl bg-slate-950 overflow-hidden border border-white/10">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <button
                              onClick={e => {
                                e.stopPropagation();
                                setLightboxIndex(idx);
                              }}
                              aria-label="Open in lightbox"
                              className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-950/75 hover:bg-sky-500 text-white border border-white/15 opacity-0 group-hover:opacity-100 transition-all"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="pt-3 px-1">
                            <span className="block text-[11px] font-medium text-sky-600 dark:text-sky-300 truncate">
                              {item.tag}
                            </span>
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate mt-0.5">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Previous / Next Project Navigation */}
            <section className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group p-6 rounded-3xl liquid-glass-card flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full liquid-pill flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:-translate-x-1 transition-transform shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="font-serif italic text-sm text-slate-500 dark:text-slate-400 block">
                    Previous project
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-300 truncate block transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="group p-6 rounded-3xl liquid-glass-card flex items-center justify-end gap-4 text-right"
              >
                <div className="min-w-0">
                  <span className="font-serif italic text-sm text-slate-500 dark:text-slate-400 block">
                    Next project
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-300 truncate block transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <div className="w-11 h-11 rounded-full liquid-pill flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:translate-x-1 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
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
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 select-none"
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
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-300 text-xs font-medium">
                    {currentLightboxItem.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                    {currentLightboxItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(prev => !prev)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
                  >
                    {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      setIsZoomed(false);
                    }}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-rose-500/30 border border-white/15 text-white transition-colors"
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
                  className={`max-h-[76vh] w-auto rounded-2xl border border-white/15 shadow-2xl ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                />

                <button
                  onClick={handleLightboxPrev}
                  aria-label="Previous image"
                  className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center shadow-xl transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleLightboxNext}
                  aria-label="Next image"
                  className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-xl text-white border border-white/20 flex items-center justify-center shadow-xl transition-all"
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
