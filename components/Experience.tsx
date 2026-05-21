import React, { useRef } from 'react';
import { Locale } from '../types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Briefcase } from 'lucide-react';

interface ExperienceProps {
  locale: Locale;
  t: any; 
}

const ExperienceCard: React.FC<{ exp: any; index: number; locale: Locale }> = ({ exp, index, locale }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 20, stiffness: 150 });
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 20, stiffness: 150 });
  const scaleSpring = useSpring(1, { damping: 15, stiffness: 200 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const relativeX = (event.clientX - rect.left) / width - 0.5;
    const relativeY = (event.clientY - rect.top) / height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
    scaleSpring.set(1.02);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    scaleSpring.set(1);
  };

  const scrollVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      rotateY: 360,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 45,
        damping: 14,
        mass: 1.1,
        delay: index * 0.12,
      },
    },
  };

  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      {/* Icone / Point central */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-emerald-600 dark:text-emerald-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-emerald-500/40">
        <Briefcase className="w-5 h-5 animate-pulse" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-80px' }}
        variants={scrollVariants}
        style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
            scale: scaleSpring,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
          className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 transition-all duration-300 shadow-xl backdrop-blur-sm cursor-pointer select-none"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2" style={{ transform: 'translateZ(20px)' }}>
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">{exp.company}</h3>
            <span className="self-start sm:self-auto text-xs font-mono text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded font-semibold">
              {exp.period}
            </span>
          </div>
          
          <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-4" style={{ transform: 'translateZ(15px)' }}>
            {exp.role}
          </div>
          
          <ul className="space-y-2 mb-4" style={{ transform: 'translateZ(10px)' }}>
            {exp.description.map((item: string, j: number) => (
              <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                <span className="text-emerald-600 dark:text-emerald-500 mr-2 mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {exp.link && (
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800/60 flex justify-end" style={{ transform: 'translateZ(15px)' }}>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <span>{locale === 'fr' ? 'Consulter' : 'View'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ locale, t }) => {
  const experiences = t.experience.items || [];

  return (
    <div className="space-y-12 py-10 w-full overflow-hidden no-scrollbar relative">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.experience.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="w-full px-1 overflow-x-clip py-4">
        <div 
          style={{ perspective: '1200px' }}
          className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-slate-200 dark:before:via-slate-800 before:to-slate-300 dark:before:to-slate-950"
        >
          {experiences.map((exp: any, i: number) => (
            <ExperienceCard 
              key={`${exp.company}-${i}`} 
              exp={exp} 
              index={i} 
              locale={locale} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;