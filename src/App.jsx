import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-background text-accent font-sans antialiased selection:bg-white selection:text-black">
      {/* Fixed Header Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-background/30 border-b border-white/5">
        <div className="text-sm font-semibold tracking-widest uppercase">Portfolio • 2026</div>
        <div className="flex gap-8 text-xs tracking-widest uppercase font-medium text-muted">
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;

