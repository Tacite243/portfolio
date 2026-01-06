
import React, { useState, useEffect } from 'react';
import { Locale, Translation } from '../types';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  locale: Locale;
  toggleLocale: () => void;
  t: Translation;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ locale, toggleLocale, t, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-500 tracking-tighter hover:opacity-80 transition-opacity">
          &lt;Tacite /&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors">
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-2 border-l border-slate-200 dark:border-slate-800 pl-6">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={toggleLocale}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold hover:border-emerald-500/50 transition-all"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{locale.toUpperCase()}</span>
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            onClick={toggleLocale}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-6 px-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 shadow-xl">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-500"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
