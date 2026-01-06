
import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { Github, FolderGit2, ArrowUpRight, Star } from 'lucide-react';

interface ProjectsProps {
  locale: Locale;
  t: Translation;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  // Mock representative projects or featured ones
  const featuredRepos = [
    { name: 'Electric COAST', tech: 'React, Node, Express', stars: 12 },
    { name: 'Galaxy Soft SaaS', tech: 'Next.js, PostgreSQL', stars: 8 },
    { name: 'Fondation Elila', tech: 'Tailwind, HTML/JS', stars: 5 },
    { name: 'Tour Congo', tech: 'React, Framer Motion', stars: 10 }
  ];

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{t.projects.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="space-y-6">
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          {t.projects.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/Tacite243?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-500 shadow-sm border border-slate-100 dark:border-slate-700">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-2 text-slate-400 group-hover:text-emerald-500 transition-colors">
                  <span className="text-xs font-mono">{repo.stars} stars</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {repo.name}
              </h3>
              <p className="text-sm font-mono text-slate-500 dark:text-slate-500">
                Stack: {repo.tech}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Tacite243?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-bold transition-all shadow-xl"
          >
            <Github className="w-5 h-5" />
            <span>{t.projects.viewAll}</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
