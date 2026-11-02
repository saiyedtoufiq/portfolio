'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Sparkles,
  Building2,
  Calendar,
  Trophy,
  Users,
  GraduationCap,
  Zap,
  CheckCircle2,
  Layers,
  ShieldAlert,
  Cpu,
  Images,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  LayoutGrid,
  GalleryHorizontal,
  Sun,
  Moon,
  Clock,
  UserCheck,
  Activity,
} from 'lucide-react';
import { ProjectItem, ProjectGalleryItem } from '../../data/portfolio';
import SpotlightCard from './reactbits/SpotlightCard';
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

  // Gallery state
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [galleryLayout, setGalleryLayout] = useState<'bento' | 'grid'>('bento');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const gallery = project.gallery || [];

  const uniqueTags = ['All', ...Array.from(new Set(gallery.map(item => item.tag)))];

  const filteredGallery: ProjectGalleryItem[] =
    selectedTag === 'All'
      ? gallery
      : gallery.filter(item => item.tag === selectedTag);

  const projectIcons: Record<string, React.ReactNode> = {
    '🏢': <Building2 className="w-9 h-9 text-cyan-600 dark:text-cyan-400" />,
    '🗓️': <Calendar className="w-9 h-9 text-indigo-600 dark:text-indigo-400" />,
    '🏆': <Trophy className="w-9 h-9 text-amber-600 dark:text-amber-400" />,
    '🤝': <Users className="w-9 h-9 text-violet-600 dark:text-violet-400" />,
    '🎓': <GraduationCap className="w-9 h-9 text-emerald-600 dark:text-emerald-400" />,
    '⚡': <Zap className="w-9 h-9 text-cyan-600 dark:text-cyan-400" />,
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

  // Keyboard navigation for Lightbox
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
        {/* Ambient Background Glows */}
        <div className="fixed top-0 right-1/4 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="fixed bottom-0 left-1/4 w-[550px] h-[550px] bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="fixed inset-0 architect-grid pointer-events-none opacity-35 dark:opacity-20 -z-0" />

        {/* Sticky Top Navigation Bar */}
        <header className="sticky top-0 z-40 backdrop-blur-2xl bg-white/80 dark:bg-space-950/80 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-space-900 hover:bg-cyan-500/10 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold transition-all shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Projects</span>
              </Link>

              <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500 truncate">
                <span>/</span>
                <span className="text-slate-500 dark:text-slate-400">case-studies</span>
                <span>/</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold truncate">
                  {project.slug}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="#project-gallery"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-medium transition-all"
              >
                <Images className="w-3.5 h-3.5" />
                <span>Gallery ({gallery.length})</span>
              </a>

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

              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-space-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-cyan-400 hover:border-cyan-500 transition-colors"
                title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
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
        <main className="flex-1 relative z-10 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
            {/* 1. HERO CASE STUDY HEADER */}
            <section className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  {project.category}
                </span>

                {project.status && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {project.status}
                  </span>
                )}

                {project.timeline && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    {project.timeline}
                  </span>
                )}

                {project.role && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono">
                    <UserCheck className="w-3.5 h-3.5" />
                    {project.role}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-space-900 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-lg shrink-0 mt-1">
                      {projectIcons[project.icon] || (
                        <span className="text-3xl">{project.icon}</span>
                      )}
                    </div>
                    <div>
                      {project.subtitle && (
                        <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                          {project.subtitle}
                        </p>
                      )}
                      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        {project.title}
                      </h1>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {/* Technology Stack Pills */}
                  <div className="pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5">
                      Core Engineering Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white dark:bg-space-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Stats & Quick Links */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-6 rounded-3xl bg-white/80 dark:bg-space-900/80 border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-xl space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        System Benchmarks
                      </span>
                      <Activity className="w-4 h-4 text-cyan-500" />
                    </div>

                    {project.stats && (
                      <div className="grid grid-cols-2 gap-3">
                        {project.stats.map(stat => (
                          <div
                            key={stat.label}
                            className="p-3 rounded-2xl bg-slate-50 dark:bg-space-950/90 border border-slate-200/80 dark:border-white/5"
                          >
                            <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400">
                              {stat.label}
                            </span>
                            <span className="text-sm sm:text-base font-bold font-mono text-cyan-600 dark:text-cyan-400 mt-0.5 block">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.metrics && (
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-xs text-emerald-700 dark:text-emerald-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}

                    <div className="flex flex-col gap-2.5 pt-1">
                      <a
                        href="#project-gallery"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-mono font-semibold shadow-lg shadow-cyan-500/20 transition-all"
                      >
                        <Images className="w-4 h-4" />
                        <span>Explore Visual Gallery ({gallery.length} Mockups)</span>
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-mono font-semibold border border-slate-200 dark:border-white/10 transition-all"
                        >
                          <span>Launch Production App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-mono font-semibold border border-slate-200 dark:border-white/10 transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View Source Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. INTERACTIVE VISUAL GALLERY SECTION */}
            <section id="project-gallery" className="scroll-mt-24 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-3">
                    <Images className="w-3.5 h-3.5" />
                    <span>Interactive Interface &amp; Architecture Gallery</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    System Screens &amp;{' '}
                    <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
                      Visual Gallery
                    </span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
                    Preview interface wireframes, workflow builders, database telemetry, and architecture diagrams. Click any image to inspect in fullscreen.
                  </p>
                </div>

                {/* Layout Switcher */}
                <div className="flex items-center gap-2 self-start md:self-auto bg-white dark:bg-space-900 p-1 rounded-2xl border border-slate-200 dark:border-white/10">
                  <button
                    onClick={() => setGalleryLayout('bento')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      galleryLayout === 'bento'
                        ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-semibold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <GalleryHorizontal className="w-3.5 h-3.5" />
                    <span>Showcase + Bento</span>
                  </button>
                  <button
                    onClick={() => setGalleryLayout('grid')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      galleryLayout === 'grid'
                        ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-semibold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Uniform Grid</span>
                  </button>
                </div>
              </div>

              {/* Featured Interactive Stage Carousel */}
              {currentSlide && (
                <div className="rounded-3xl bg-white/90 dark:bg-space-900/80 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
                  {/* Top Window Bar */}
                  <div className="px-4 sm:px-6 py-3 bg-slate-100 dark:bg-space-950/90 border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400 truncate">
                        {currentSlide.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        {currentSlide.tag}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        0{activeSlideIndex + 1} / 0{gallery.length}
                      </span>
                      <button
                        onClick={() => setLightboxIndex(activeSlideIndex)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-white/5 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-200 hover:text-cyan-500 text-xs font-mono transition-colors"
                        title="Open Fullscreen Lightbox"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Fullscreen</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Preview Image */}
                  <div className="relative group bg-space-950 aspect-[16/10] max-h-[540px] w-full overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide.id}
                        src={currentSlide.imageUrl}
                        alt={currentSlide.title}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightboxIndex(activeSlideIndex)}
                        className="w-full h-full object-contain cursor-zoom-in select-none"
                      />
                    </AnimatePresence>

                    {/* Left / Right Carousel Arrows */}
                    <button
                      onClick={handlePrevSlide}
                      aria-label="Previous image"
                      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-lg transition-all opacity-80 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      aria-label="Next image"
                      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-lg transition-all opacity-80 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Caption + Filmstrip Thumbnails */}
                  <div className="p-5 sm:p-6 bg-white dark:bg-space-900 border-t border-slate-200 dark:border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {currentSlide.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                          {currentSlide.caption}
                        </p>
                      </div>
                      <button
                        onClick={() => setLightboxIndex(activeSlideIndex)}
                        className="self-start sm:self-center shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-xs font-mono font-semibold transition-all"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect High-Res</span>
                      </button>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-1">
                      {gallery.map((item, idx) => {
                        const isCurrent = idx === activeSlideIndex;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveSlideIndex(idx)}
                            className={`relative group rounded-xl overflow-hidden border-2 transition-all shrink-0 w-28 sm:w-36 aspect-[16/10] bg-space-950 ${
                              isCurrent
                                ? 'border-cyan-500 ring-2 ring-cyan-500/30 scale-[1.02]'
                                : 'border-slate-200 dark:border-white/10 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1.5 text-left">
                              <span className="block text-[9px] font-mono text-white truncate">
                                0{idx + 1}. {item.tag}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  {uniqueTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                        selectedTag === tag
                          ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-semibold shadow-md shadow-cyan-600/20'
                          : 'bg-white dark:bg-space-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Showing {filteredGallery.length} of {gallery.length} gallery views
                </span>
              </div>

              {/* Bento / Grid Gallery Cards */}
              <motion.div
                layout
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
              >
                <AnimatePresence>
                  {filteredGallery.map((item, idx) => {
                    const globalIndex = gallery.findIndex(g => g.id === item.id);
                    const isFeaturedBento =
                      galleryLayout === 'bento' && idx === 0 && filteredGallery.length >= 3;

                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                        className={
                          isFeaturedBento ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                        }
                      >
                        <div
                          onClick={() =>
                            setLightboxIndex(globalIndex >= 0 ? globalIndex : 0)
                          }
                          className="group cursor-pointer h-full rounded-3xl bg-white/80 dark:bg-space-900/75 border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/10 overflow-hidden flex flex-col justify-between transition-all"
                        >
                          {/* Image Container */}
                          <div className="relative bg-space-950 aspect-[16/10] w-full overflow-hidden border-b border-slate-200 dark:border-white/10">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Top Badge Overlay */}
                            <div className="absolute top-3 left-3 flex items-center gap-2">
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-950/85 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                                {item.tag}
                              </span>
                            </div>

                            {/* Hover Enlarge Pill */}
                            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-mono text-xs font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <Maximize2 className="w-3.5 h-3.5 text-cyan-600" />
                                <span>Open Lightbox</span>
                              </span>
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                                  FIG 0{globalIndex + 1}
                                </span>
                                <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-500 transition-colors">
                                  Click to zoom →
                                </span>
                              </div>
                              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                                {item.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </section>

            {/* 3. CHALLENGE & SOLUTION SPLIT */}
            {(project.challenge || project.solution) && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {project.challenge && (
                  <SpotlightCard
                    theme={isDark ? 'dark' : 'light'}
                    spotlightColor="rgba(244, 63, 94, 0.18)"
                    className="p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-mono font-semibold">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>The Engineering Challenge</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Problem Statement &amp; Bottlenecks
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </SpotlightCard>
                )}

                {project.solution && (
                  <SpotlightCard
                    theme={isDark ? 'dark' : 'light'}
                    spotlightColor="rgba(16, 185, 129, 0.2)"
                    className="p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 space-y-4"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>The Architectural Solution</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      System Design &amp; Execution
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </SpotlightCard>
                )}
              </section>
            )}

            {/* 4. KEY FEATURES & ARCHITECTURE HIGHLIGHTS */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Key Features List */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Key Capabilities &amp; Modules
                      </h3>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        Production-grade features delivered end-to-end
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {project.keyFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Highlights */}
              {project.architectureHighlights && project.architectureHighlights.length > 0 && (
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 px-1">
                    <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Under-the-Hood Architecture
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.architectureHighlights.map((arch, idx) => (
                      <SpotlightCard
                        key={arch.title}
                        theme={isDark ? 'dark' : 'light'}
                        spotlightColor={
                          idx % 2 === 0
                            ? 'rgba(34, 211, 238, 0.2)'
                            : 'rgba(168, 85, 247, 0.2)'
                        }
                        className="p-6 rounded-2xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 space-y-2"
                      >
                        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                          0{idx + 1} // MODULE
                        </span>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {arch.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {arch.detail}
                        </p>
                      </SpotlightCard>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* 5. PREVIOUS / NEXT PROJECT NAVIGATION */}
            <section className="pt-8 border-t border-slate-200 dark:border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group p-6 rounded-3xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-space-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-cyan-500 group-hover:-translate-x-1 transition-all shrink-0">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-mono text-slate-400 block">
                        Previous Case Study
                      </span>
                      <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate block">
                        {prevProject.title}
                      </span>
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group p-6 rounded-3xl bg-white/80 dark:bg-space-900/70 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 flex items-center justify-between gap-4 text-right transition-all"
                >
                  <div className="flex items-center justify-end gap-4 min-w-0 w-full">
                    <div className="min-w-0">
                      <span className="text-xs font-mono text-slate-400 block">
                        Next Case Study
                      </span>
                      <span className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate block">
                        {nextProject.title}
                      </span>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-space-950 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all shrink-0">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </main>

        {/* FULLSCREEN LIGHTBOX MODAL */}
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
              {/* Lightbox Top Bar */}
              <div
                className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4 z-10"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold shrink-0">
                    {currentLightboxItem.tag}
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold text-white truncate">
                    {currentLightboxItem.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 shrink-0">
                    ({lightboxIndex + 1} / {gallery.length})
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsZoomed(prev => !prev)}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title={isZoomed ? 'Zoom Out' : 'Zoom In'}
                  >
                    {isZoomed ? (
                      <ZoomOut className="w-4 h-4" />
                    ) : (
                      <ZoomIn className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      setIsZoomed(false);
                    }}
                    className="p-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 border border-rose-500/30 transition-colors"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lightbox Center Image */}
              <div
                className="relative flex-1 flex items-center justify-center my-4 overflow-auto"
                onClick={e => e.stopPropagation()}
              >
                <motion.img
                  key={currentLightboxItem.id}
                  src={currentLightboxItem.imageUrl}
                  alt={currentLightboxItem.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: isZoomed ? 1.35 : 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsZoomed(prev => !prev)}
                  className={`max-h-[70vh] w-auto rounded-2xl border border-white/10 shadow-2xl transition-transform ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                />

                <button
                  onClick={handleLightboxPrev}
                  aria-label="Previous image"
                  className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-xl transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleLightboxNext}
                  aria-label="Next image"
                  className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-cyan-600 text-white border border-white/15 flex items-center justify-center shadow-xl transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Bottom Caption & Thumbnails */}
              <div
                className="max-w-4xl w-full mx-auto space-y-3 text-center z-10"
                onClick={e => e.stopPropagation()}
              >
                <p className="text-xs sm:text-sm text-slate-300">
                  {currentLightboxItem.caption}
                </p>
                <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
                  {gallery.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIsZoomed(false);
                        setLightboxIndex(idx);
                      }}
                      className={`w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        idx === lightboxIndex
                          ? 'border-cyan-400 scale-105'
                          : 'border-white/15 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </ClickSpark>
  );
}

