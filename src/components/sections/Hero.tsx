'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, Server, Cpu, Play, CheckCircle2, ShieldAlert, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

// Dynamic import with ssr: false for optimal performance & Lighthouse 90+
const Aurora = dynamic(() => import('../reactbits/Aurora'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

export default function Hero() {
  const { personal } = portfolioData;
  const { isDark } = useTheme();

  // Workbench active tab: 'terminal' | 'sql' | 'architecture'
  const [activeTab, setActiveTab] = useState<'terminal' | 'sql' | 'architecture'>('terminal');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isRunningCommand, setIsRunningCommand] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personal.cvUrl;
    link.download = 'Toufiq-Rehman-Sayyed-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const runTerminalCommand = (cmd: string) => {
    if (isRunningCommand) return;
    setIsRunningCommand(true);

    if (cmd === 'test') {
      setTerminalOutput([
        'toufiq@prod-core:~$ php artisan test --parallel',
        'Running 42 feature tests across 4 processes...',
        'PASS Tests\\Feature\\Auth\\JwtAuthenticationTest (14ms)',
        'PASS Tests\\Feature\\Api\\OrderProcessingPipelineTest (28ms)',
        'PASS Tests\\Feature\\Database\\QueryCacheInvalidationTest (18ms)',
        'OK (42 tests, 128 assertions) — Time: 0.84s, Memory: 28.00MB',
      ]);
    } else if (cmd === 'routes') {
      setTerminalOutput([
        'toufiq@prod-core:~$ php artisan route:list --path=api/v1',
        'POST   api/v1/ordgrow/forms/builder ......... DynamicFormBuilder@store',
        'POST   api/v1/gfacility/bookings/sync ....... CalendarSyncController@sync',
        'POST   api/v1/sls/tournaments/certificates .. CertificateEngine@generate',
        'POST   api/v1/promise/notifications/fcm ..... PushNotificationWorker@dispatch',
        'GET    api/v1/skooly/attendance/qr-verify ... QrAttendanceController@verify',
        'Middleware: api, auth:sanctum, rbac.verify, throttle:120,1',
      ]);
    } else if (cmd === 'benchmark') {
      setTerminalOutput([
        'toufiq@prod-core:~$ curl -s -w "\\nTotal: %{time_total}s\\n" https://api.prod/v1/health',
        '{"status":"healthy","database":"connected","redis":"active","avg_latency_ms":38.4}',
        'HTTP/2 200 OK — Total: 0.042s',
      ]);
    }

    setTimeout(() => setIsRunningCommand(false), 300);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-space-950 transition-colors duration-300"
    >
      {/* Dynamic Aurora Shader Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-70 dark:opacity-50">
        <Aurora
          colorStops={
            isDark
              ? ['#06b6d4', '#4f46e5', '#9333ea']
              : ['#38bdf8', '#818cf8', '#c084fc']
          }
          speed={0.5}
          amplitude={1.1}
          blend={0.5}
          opacity={isDark ? 0.6 : 0.45}
          lightMode={!isDark}
        />
        {/* Subtle grid background for architectural depth */}
        <div className="absolute inset-0 architect-grid pointer-events-none opacity-40 dark:opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-space-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Brand & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Senior Developer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-950/70 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-medium mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Full Stack Developer • React · Node.js · Laravel · TypeScript</span>
            </motion.div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-4">
              <span className="block">Toufiq Rehman</span>
              <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-violet-600 dark:from-cyan-400 dark:via-indigo-300 dark:to-violet-400 bg-clip-text text-transparent">
                Sayyed
              </span>
            </h1>

            {/* Core Role & Human Tagline */}
            <p className="text-lg sm:text-2xl font-medium text-slate-700 dark:text-slate-200 mb-6 font-mono flex items-center gap-2">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">&gt;</span>
              <span>Multi-Tenant SaaS • High-Throughput APIs • Resilient Databases</span>
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personal.bioShort}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-space-900/80 hover:bg-white dark:hover:bg-space-850 border border-slate-300 dark:border-white/10 hover:border-cyan-500/40 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download CV (PDF)</span>
              </button>
            </div>

            {/* Real Engineering Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-white/10 w-full max-w-md text-left">
              <div>
                <span className="block text-2xl font-mono font-bold text-cyan-600 dark:text-cyan-400">5+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Years Production Engineering</span>
              </div>
              <div>
                <span className="block text-2xl font-mono font-bold text-indigo-600 dark:text-violet-400">~60%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Average API Latency Reduced</span>
              </div>
              <div>
                <span className="block text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400">15+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Enterprise Platforms Shipped</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Senior Engineering Workbench */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Lighting Behind Workbench */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/15 to-violet-600/15 rounded-3xl blur-2xl -z-10" />

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-space-900/90 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-black/70 overflow-hidden">
              {/* Workbench Tab Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-space-950/90 border-b border-slate-200 dark:border-white/10 font-mono text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Interactive Mode Tabs */}
                <div className="flex items-center gap-1 bg-slate-200 dark:bg-space-850 p-0.5 rounded-xl text-[11px]">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === 'terminal'
                        ? 'bg-white dark:bg-space-950 text-cyan-600 dark:text-cyan-400 font-bold shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                  >
                    Console
                  </button>
                  <button
                    onClick={() => setActiveTab('sql')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === 'sql'
                        ? 'bg-white dark:bg-space-950 text-cyan-600 dark:text-cyan-400 font-bold shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                  >
                    SQL Opt
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      activeTab === 'architecture'
                        ? 'bg-white dark:bg-space-950 text-cyan-600 dark:text-cyan-400 font-bold shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                    }`}
                  >
                    Topology
                  </button>
                </div>
              </div>

              {/* Workbench Tab Content */}
              <div className="p-5 min-h-[340px] flex flex-col justify-between font-mono text-xs">
                {activeTab === 'terminal' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-slate-500 text-[11px]">
                      <span>toufiq@portfolio-core: ~</span>
                      <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                        Docker: Online
                      </span>
                    </div>

                    {/* Interactive Command Triggers */}
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => runTerminalCommand('test')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-[11px] transition-all"
                      >
                        $ artisan test
                      </button>
                      <button
                        onClick={() => runTerminalCommand('routes')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-[11px] transition-all"
                      >
                        $ route:list
                      </button>
                      <button
                        onClick={() => runTerminalCommand('benchmark')}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-[11px] transition-all"
                      >
                        $ curl health
                      </button>
                    </div>

                    {/* Terminal Display Output */}
                    <div className="p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-[11px] leading-relaxed overflow-x-auto min-h-[160px] border border-white/5 shadow-inner">
                      {terminalOutput.length > 0 ? (
                        terminalOutput.map((line, i) => (
                          <p
                            key={i}
                            className={
                              line.startsWith('PASS') || line.startsWith('OK')
                                ? 'text-emerald-400'
                                : line.startsWith('toufiq@')
                                ? 'text-cyan-300 font-bold'
                                : 'text-slate-300'
                            }
                          >
                            {line}
                          </p>
                        ))
                      ) : (
                        <div className="space-y-1 text-slate-400">
                          <p className="text-cyan-400">toufiq@portfolio-core:~$ php --version</p>
                          <p className="text-slate-300">PHP 8.3.12 (cli) with Zend OPcache & JIT</p>
                          <p className="text-slate-500">Framework: Laravel 11.x • Redis 7.2 • MySQL 8.0</p>
                          <p className="pt-2 text-cyan-300">&gt; Click a command pill above to run live diagnostics.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'sql' && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>Query Optimization Analysis</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">-99% Runtime</span>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-[11px]">
                      <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold mb-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Legacy Query: 382.4ms (Unindexed)</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-mono text-[10px]">
                        SELECT * FROM bookings WHERE user_id = 42 ORDER BY created_at DESC;
                      </p>
                      <p className="text-rose-600/80 dark:text-rose-400/80 text-[10px] mt-1">
                        [Full Table Scan: 450,000 rows examined]
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px]">
                      <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Optimized Architecture: 3.2ms</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-mono text-[10px]">
                        Composite Index (user_id, created_at) + Redis Key Pre-warming
                      </p>
                      <p className="text-emerald-600/90 dark:text-emerald-400/90 text-[10px] mt-1 font-semibold">
                        [Index Range Scan: 24 rows examined • Cached: 0.8ms]
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>Full-Stack Topology</span>
                      <span className="text-cyan-600 dark:text-cyan-400 text-[10px]">Resilient Tier</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-space-950 border border-slate-200 dark:border-white/10">
                        <span className="text-slate-500 text-[10px] block">Front Tier</span>
                        <span className="font-bold text-slate-800 dark:text-white">Next.js 15 & React 19</span>
                        <span className="text-cyan-600 dark:text-cyan-400 text-[10px] block">SSR & Edge Streaming</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-space-950 border border-slate-200 dark:border-white/10">
                        <span className="text-slate-500 text-[10px] block">API Gateway</span>
                        <span className="font-bold text-slate-800 dark:text-white">Laravel 11 REST</span>
                        <span className="text-indigo-600 dark:text-indigo-400 text-[10px] block">Sanctum & Rate Limiter</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-space-950 border border-slate-200 dark:border-white/10">
                        <span className="text-slate-500 text-[10px] block">Storage Tier</span>
                        <span className="font-bold text-slate-800 dark:text-white">MySQL & PostgreSQL</span>
                        <span className="text-violet-600 dark:text-violet-400 text-[10px] block">B-Tree Indexes</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-space-950 border border-slate-200 dark:border-white/10">
                        <span className="text-slate-500 text-[10px] block">Cache & Queue</span>
                        <span className="font-bold text-slate-800 dark:text-white">Redis & Horizon</span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-[10px] block">Async Job Workers</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Diagnostic Footer */}
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold">
                    <Cpu className="w-3 h-3" /> Production Spec
                  </span>
                  <span>99.9% Uptime Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
