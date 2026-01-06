
import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

interface EducationProps {
  locale: Locale;
  t: Translation;
}

const Education: React.FC<EducationProps> = ({ locale, t }) => {
  const educations = [
    {
      institution: 'KADEA ACADEMY',
      degree: locale === 'fr' ? 'Bac +2 en développement web et mobile' : 'Associate Degree in Web & Mobile Development',
      year: '2023 - 2024',
      location: 'Goma, DRC'
    },
    {
      institution: 'ULPGL',
      degree: locale === 'fr' ? 'Génie informatique' : 'Computer Engineering',
      year: '2020 - 2023',
      location: 'Goma, DRC'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{t.education.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educations.map((edu, i) => (
          <motion.div 
            key={edu.institution}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-emerald-500/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
              </div>
              <p className="text-emerald-400 font-medium mb-2">{edu.degree}</p>
              <div className="flex items-center text-slate-500 text-sm space-x-4">
                <div className="flex items-center space-x-1">
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
