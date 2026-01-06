
import React, { useState, useEffect } from 'react';
import { translations } from './i18n/translations';
import { Locale } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  // Initialize state from localStorage for better UX
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('tacite-portfolio-locale');
    return (saved === 'fr' || saved === 'en') ? saved as Locale : 'fr';
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('tacite-portfolio-theme');
    return (saved === 'dark' || saved === 'light') ? saved as 'dark' | 'light' : 'dark';
  });

  const t = translations[locale];

  // Update theme class and persistence
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('tacite-portfolio-theme', theme);
  }, [theme]);

  // Update locale persistence
  useEffect(() => {
    localStorage.setItem('tacite-portfolio-locale', locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-emerald-500/30 transition-colors duration-300">
      <Navbar 
        locale={locale} 
        toggleLocale={toggleLocale} 
        t={t} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12 space-y-32">
        <section id="hero">
          <Hero locale={locale} t={t} />
        </section>

        <section id="about" className="scroll-mt-24">
          <About locale={locale} t={t} />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills locale={locale} t={t} />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience locale={locale} t={t} />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects locale={locale} t={t} />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education locale={locale} t={t} />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact locale={locale} t={t} />
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-900 py-12 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Tacite Wakilongo. All rights reserved.</p>
        <p className="mt-2 font-mono">Built with React, Tailwind & Gemini</p>
      </footer>
    </div>
  );
};

export default App;
