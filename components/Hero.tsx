import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ChevronRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

interface HeroProps {
  locale: Locale;
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ locale, t }) => {
  const name = (t.hero as any).name || "Tacite Wakilongo";
  const role = t.hero.role;
  const slogan = t.hero.slogan;
  const presentation = (t.hero as any).presentation || "";

  // Séparer le nom pour l'animer mot par mot
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // Conteneur d'orchestration (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Animation pour le badge
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  // Animation de découpe (mask slide-up) pour le nom
  const wordMaskVariants = {
    hidden: { y: '120%' },
    visible: {
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1], // courbe de bézier "expoOut" très fluide
        duration: 0.9,
      }
    }
  };

  // Animation cinématographique pour le rôle (Lettre par lettre / Expansion)
  const roleVariants = {
    hidden: { opacity: 0, letterSpacing: '-0.02em', filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      letterSpacing: '0em',
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  // Révélation douce et floutée pour les paragraphes
  const textBlurVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  // Boutons et réseaux sociaux
  const actionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20 overflow-hidden">
      
      {/* Contenu textuel (Gauche) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1 z-10"
      >
        {/* Badge de disponibilité */}
        <motion.div 
          variants={badgeVariants}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>
            {locale === 'fr' 
              ? 'Disponible pour de nouvelles opportunités' 
              : 'Available for new opportunities'}
          </span>
        </motion.div>
        
        {/* Titre avec effet de découpe/slide-up 3D */}
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] flex flex-wrap justify-center lg:justify-start">
          <span className="relative overflow-hidden inline-block py-1 pr-3">
            <motion.span 
              variants={wordMaskVariants} 
              className="inline-block"
            >
              {firstName}
            </motion.span>
          </span>
          <span className="relative overflow-hidden inline-block py-1 text-emerald-600 dark:text-emerald-500">
            <motion.span 
              variants={wordMaskVariants} 
              className="inline-block"
            >
              {lastName}
            </motion.span>
          </span>
        </h1>
        
        {/* Rôle avec expansion fluide */}
        <motion.h2 
          variants={roleVariants}
          className="text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-400 font-mono tracking-tight"
        >
          {role}
        </motion.h2>
        
        {/* Phrase d'accroche floutée */}
        <motion.p 
          variants={textBlurVariants}
          className="text-lg text-slate-700 dark:text-slate-300 max-w-xl font-medium leading-relaxed mx-auto lg:mx-0"
        >
          {slogan}
        </motion.p>

        {/* Présentation complémentaire floutée */}
        {presentation && (
          <motion.p 
            variants={textBlurVariants}
            className="text-sm text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            {presentation}
          </motion.p>
        )}
        
        {/* Actions et Réseaux Sociaux */}
        <motion.div 
          variants={actionVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 pt-4"
        >
          {/* Bouton Contact */}
          <a 
            href="#contact" 
            className="group w-full sm:w-auto flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
          >
            <span>{t.nav.contact}</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Bouton Téléchargement CV */}
          <a 
            href="/cv-tacite-wakilongo.pdf" 
            download="CV_Tacite_Wakilongo.pdf"
            className="group w-full sm:w-auto flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 bg-slate-100/50 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 px-6 py-3.5 rounded-xl font-bold transition-all shadow-sm active:scale-95"
          >
            <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            <span>{t.hero.downloadCV}</span>
          </a>
          
          {/* Réseaux Sociaux */}
          <div className="flex gap-2.5 mt-2 sm:mt-0">
            <a 
              href="https://github.com/Tacite243" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 transition-all text-slate-700 dark:text-slate-300 hover:scale-105 active:scale-95 shadow-sm"
              title={t.hero.githubLink}
            >
              <Github className="w-5 h-5" />
            </a>

            <a 
              href="https://www.linkedin.com/in/tacite-wakilongo-571216262/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 transition-all text-blue-600 dark:text-blue-400 hover:scale-105 active:scale-95 shadow-sm"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a 
              href="https://wa.me/243971736244" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-green-500/20 dark:hover:border-green-500/20 transition-all text-green-600 dark:text-green-500 hover:scale-105 active:scale-95 shadow-sm"
              title={t.hero.whatsapp || "WhatsApp"}
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Colonne Photo (Droite) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex-1 lg:max-w-[480px] w-full order-1 lg:order-2"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl group"
        >
          <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
          
          <img
            src={profileImg}
            alt={`${name} Working`}
            className="w-full aspect-[4/3] object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-750 scale-105 group-hover:scale-100"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
            <p className="text-emerald-400 text-xs font-mono select-none">
              System.out.println("Building the future");
            </p>
          </div>
        </motion.div>
        
        {/* Glow Effects */}
        <div className="absolute -top-4 -right-4 w-28 h-28 bg-emerald-500/15 blur-3xl rounded-full -z-10" />
        <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-blue-500/10 blur-3xl rounded-full -z-10" />
      </motion.div>
    </div>
  );
};

export default Hero;