
import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Briefcase } from 'lucide-react';

interface ExperienceProps {
  locale: Locale;
  t: Translation;
}

const Experience: React.FC<ExperienceProps> = ({ locale, t }) => {
  const experiences = [
    {
      company: 'GRECOM',
      role: locale === 'fr' ? 'Stagiaire Développeur' : 'Intern Developer',
      period: 'Nov 2024 - Feb 2025',
      description: locale === 'fr' 
        ? ['Optimisation d\'applications internes.', 'Implémentation de correctifs techniques.', 'Collaboration sur la refonte de leur site web.']
        : ['Optimization of internal applications.', 'Implementation of technical fixes.', 'Collaboration on the redesign of their website.']
    },
    {
      company: 'Kali Academy',
      role: locale === 'fr' ? 'Stagiaire Développeur' : 'Intern Developer',
      period: 'Mar 2024 - May 2024',
      description: locale === 'fr'
        ? ['Création de projets open source.', 'Développement d\'applications web.', 'Participation aux revues de code.']
        : ['Creation of open source projects.', 'Web application development.', 'Participation in code reviews.']
    },
    {
      company: 'Freelance',
      role: 'Fullstack Developer',
      period: '2022 - 2024',
      description: locale === 'fr'
        ? [
            'Conception de Electric COAST (Inventaire).',
            'SaaS "Galaxy Soft" pour la gestion des boutiques.',
            'Sites vitrines (Fondation Elila, Tour Congo, DRC Homeland).',
            'Contributions Starknet & Wikimedia.'
          ]
        : [
            'Design of Electric COAST (Inventory).',
            'SaaS "Galaxy Soft" for store management.',
            'Showcase sites (Fondation Elila, Tour Congo, DRC Homeland).',
            'Starknet & Wikimedia contributions.'
          ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{t.experience.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-800" />
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-slate-800 before:to-slate-900">
        {experiences.map((exp, i) => (
          <motion.div 
            key={`${exp.company}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon/Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="w-5 h-5" />
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/20 transition-all shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg text-white">{exp.company}</h3>
                <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              <div className="text-emerald-400 font-medium text-sm mb-4">{exp.role}</div>
              <ul className="space-y-2">
                {exp.description.map((item, j) => (
                  <li key={j} className="text-sm text-slate-400 flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1.5 h-1 w-1 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
