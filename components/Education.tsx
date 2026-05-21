import React, { useRef } from 'react';
import { Locale } from '../types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';

interface EducationProps {
  locale: Locale;
  t: any;
}

const EducationCard: React.FC<{ edu: any; index: number }> = ({ edu, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 150 });
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 150 });
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
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 45,
        damping: 14,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-50px' }}
      variants={scrollVariants}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      className="h-full"
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
        className="p-8 h-full rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-colors duration-300 flex flex-col justify-between shadow-xl backdrop-blur-sm cursor-pointer select-none relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

        <div>
          {/* Header */}
          <div className="flex items-center space-x-3 mb-4" style={{ transform: 'translateZ(20px)' }}>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/15">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{edu.institution}</h3>
          </div>

          {/* Degree & detail */}
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1" style={{ transform: 'translateZ(15px)' }}>{edu.degree}</p>
          {edu.detail && (
            <div className="flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 mb-4" style={{ transform: 'translateZ(10px)' }}>
              <Award className="w-3.5 h-3.5 text-indigo-500/80" />
              <span>{edu.detail}</span>
            </div>
          )}
        </div>

        {/* Info footer */}
        <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs space-x-4 pt-4 border-t border-slate-200 dark:border-slate-800/40" style={{ transform: 'translateZ(10px)' }}>
          <div className="flex items-center">
            <span>{edu.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
            <span>{edu.location}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Education: React.FC<EducationProps> = ({ locale, t }) => {
  const educations = t.education.items || [];

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

      {/* Title */}
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.education.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* Cards Grid */}
      <div className="w-full px-1 overflow-x-clip py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((edu: any, i: number) => (
            <EducationCard
              key={`${edu.institution}-${i}`}
              edu={edu}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;