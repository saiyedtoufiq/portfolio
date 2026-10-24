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
      sparkColor={['#22d3ee', '#818cf8', '#c084fc']}
      sparkSize={12}
      sparkRadius={26}
      sparkCount={7}
      duration={400}
      extraScale={1}
      shape="streak"
    >
      <div className="min-h-screen flex flex-col relative bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Right-Side Vertical Navigation Rail with Theme Switcher & Progress */}
        <RightVerticalNav />

        {/* Main Content Area */}
        <main className="flex-1 pr-8 sm:pr-12 md:pr-16 lg:pr-20">
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
