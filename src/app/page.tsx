'use client';

import React from 'react';
import RightVerticalNav from '../components/RightVerticalNav';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';
import ClickSpark from '../components/reactbits/ClickSpark';

export default function Home() {
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
      <div className="min-h-screen w-full flex flex-col relative bg-slate-50 dark:bg-space-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
        {/* Right-Side Vertical Navigation Rail */}
        <RightVerticalNav />

        {/* Full-bleed Main Content Area (no right margin cut-off) */}
        <main className="flex-1 w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </ClickSpark>
  );
}
