import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
    return (
        <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
            <Header />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
