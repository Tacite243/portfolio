import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Layers3,
  Server,
  Smartphone,
  GitBranch,
  Rocket,
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';

interface SkillsProps {
  locale: Locale;
  t: Translation;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  const skillGroups = [
    {
      name: t.skills.frontend,
      icon: <Layers3 size={18} />,
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript ES6+',
        'React Native',
        'Redux Toolkit',
        'Tailwind CSS',
        'Framer Motion',
        'Vite',
        'Responsive Design',
        'UI/UX Integration',
        'i18n',
      ],
    },
    {
      name: t.skills.backend,
      icon: <Server size={18} />,
      skills: [
        'Node.js',
        'NestJS',
        'Express.js',
        'REST API',
        'Prisma ORM',
        'Authentication',
        'JWT',
        'WebSocket',
        'Python',
        'API Architecture',
        'Microservices Basics',
      ],
    },
    {
      name: t.skills.database,
      icon: <Database size={18} />,
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Firebase',
        'Supabase',
        'Database Design',
        'Query Optimization',
      ],
    },
    {
      name: t.skills.other,
      icon: <Rocket size={18} />,
      skills: [
        'Git & GitHub',
        'Docker',
        'Linux / Ubuntu',
        'Agile / Scrum',
        'Open Source',
        'Vercel',
        'CI/CD Basics',
        'Performance Optimization',
        'SEO Fundamentals',
        'Debugging',
        'System Architecture',
      ],
    },
  ];

  const highlights = [
    {
      icon: <Smartphone size={18} />,
      title: 'Modern Applications',
      desc: 'Building scalable and responsive web & mobile experiences.',
    },
    {
      icon: <BrainCircuit size={18} />,
      title: 'Problem Solving',
      desc: 'Transforming complex ideas into intuitive digital products.',
    },
    {
      icon: <GitBranch size={18} />,
      title: 'Open Source',
      desc: 'Passionate about collaboration and community-driven software.',
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'Code Quality',
      desc: 'Focused on maintainability, performance and clean architecture.',
    },
  ];

  const languages = [
    { name: 'Français', level: '100%' },
    { name: 'Swahili', level: '100%' },
    { name: 'English', level: '65%' },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{t.skills.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-800" />
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60, rotateY: 180 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              type: 'spring',
            }}
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-5 hover:border-emerald-500/30 transition-all"
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{
              opacity: 0,
              y: 80,
              rotateY: 360,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateY: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: i * 0.15,
              type: 'spring',
            }}
            className="relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-900 shadow-2xl p-6 group hover:border-emerald-500/30 transition-all"
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1200,
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="text-emerald-400">
                  {group.icon}
                </div>

                <h3 className="text-emerald-500 font-bold font-mono text-sm tracking-wider uppercase">
                  // {group.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.03,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-medium text-slate-400 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <div className="pt-4">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
          <Globe size={20} className="text-emerald-400" />
          {t.skills.languages}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="space-y-3 rounded-2xl border border-slate-900 bg-slate-950 p-5"
            >
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-300">{lang.name}</span>
                <span className="text-emerald-500">{lang.level}</span>
              </div>

              <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: lang.level }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.4,
                  }}
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;