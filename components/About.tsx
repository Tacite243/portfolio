
import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { User, Code2, Zap } from 'lucide-react';

interface AboutProps {
  locale: Locale;
  t: Translation;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{t.about.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="text-lg text-slate-400 leading-relaxed">
            {t.about.description}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors group">
              <Zap className="w-8 h-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-200">Efficient</h3>
              <p className="text-sm text-slate-400">Optimizing performance is my priority.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors group">
              <Code2 className="w-8 h-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-200">Modern Stack</h3>
              <p className="text-sm text-slate-400">Using the latest tech for best UX.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-sm space-y-4 shadow-2xl overflow-hidden">
            <div className="flex space-x-2 border-b border-slate-800 pb-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500 ml-2">bio.ts</span>
            </div>
            <div className="space-y-1">
              <p><span className="text-emerald-500">const</span> developer = &#123;</p>
              <p className="pl-4"><span className="text-emerald-500">name</span>: <span className="text-amber-300">'Tacite Wakilongo'</span>,</p>
              <p className="pl-4"><span className="text-emerald-500">experience</span>: <span className="text-amber-300">'4+ years'</span>,</p>
              <p className="pl-4"><span className="text-emerald-500">traits</span>: [<span className="text-amber-300">'Autonomous'</span>, <span className="text-amber-300">'Resilient'</span>, <span className="text-amber-300">'Creative'</span>],</p>
              <p className="pl-4"><span className="text-emerald-500">location</span>: <span className="text-amber-300">'DR Congo'</span>,</p>
              <p className="pl-4"><span className="text-emerald-500">passion</span>: <span className="text-amber-300">'Innovation & Scalability'</span></p>
              <p>&#125;;</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
