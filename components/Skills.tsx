
import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';

interface SkillsProps {
  locale: Locale;
  t: Translation;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  const skillGroups = [
    {
      name: t.skills.frontend,
      skills: ['React', 'Next.js', 'TypeScript', 'React Native', 'Redux', 'Tailwind CSS']
    },
    {
      name: t.skills.backend,
      skills: ['Express.js', 'NestJs', 'Python', 'Node.js', 'Prisma', 'REST API']
    },
    {
      name: t.skills.database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      name: t.skills.other,
      skills: ['Git', 'Docker', 'Agile/Scrum', 'Open Source', 'Vercel']
    }
  ];

  const languages = [
    { name: 'Français', level: '100%' },
    { name: 'Swahili', level: '100%' },
    { name: 'English', level: '65%' }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{t.skills.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div 
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-slate-950 border border-slate-900 shadow-xl group hover:border-emerald-500/30 transition-all"
          >
            <h3 className="text-emerald-500 font-bold mb-4 font-mono text-sm tracking-wider uppercase">
              // {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-2.5 py-1 rounded bg-slate-900 text-xs font-medium text-slate-400 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          {t.skills.languages}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <div key={lang.name} className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-300">{lang.name}</span>
                <span className="text-emerald-500">{lang.level}</span>
              </div>
              <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: lang.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-emerald-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
