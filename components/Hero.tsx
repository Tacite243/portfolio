
import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ChevronRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

interface HeroProps {
  locale: Locale;
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for new opportunities</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Tacite <span className="text-emerald-600 dark:text-emerald-500">Wakilongo</span>
        </h1>
        
        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-400 font-mono">
          {t.hero.role}
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
          {t.hero.slogan}
        </p>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
          <a 
            href="#contact" 
            className="group flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20"
          >
            <span>{t.nav.contact}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-2">
            <a 
              href="https://github.com/Tacite243" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all text-slate-700 dark:text-slate-300"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a 
              href="https://www.linkedin.com/in/tacite-wakilongo-571216262/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all text-blue-600 dark:text-blue-400"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a 
              href="https://wa.me/243971736244" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all text-green-600 dark:text-green-500"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-1 lg:max-w-[500px] w-full order-1 lg:order-2"
      >
        <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl group">
          <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src={profileImg}
            alt="Tacite Wakilongo Working"
            className="w-full aspect-[4/3] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-20">
            <p className="text-white/80 text-xs font-mono">System.out.println("Building the future");</p>
          </div>
        </div>
        
        {/* Tech decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 blur-3xl rounded-full -z-10" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -z-10" />
      </motion.div>
    </div>
  );
};

export default Hero;
