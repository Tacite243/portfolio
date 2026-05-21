import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { Mail, Github, Phone, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  locale: Locale;
  t: Translation;
}

const Contact: React.FC<ContactProps> = ({ locale, t }) => {
  const contactLinks = [
    {
      label: t.contact.email,
      value: 'taciteiragi@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:taciteiragi@gmail.com'
    },
    {
      label: 'GitHub',
      value: '@Tacite243',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/Tacite243'
    },
    {
      label: t.contact.phone,
      value: '+243-971-736-244',
      icon: <Phone className="w-5 h-5" />,
      href: 'tel:+243971736244'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t.contact.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {t.contact.subtitle}
          </h3>
          {/* Traduction dynamique du paragraphe de description */}
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md">
            {locale === 'fr'
              ? 'Je suis actuellement à la recherche de nouvelles opportunités. N\'hésitez pas à me contacter par e-mail ou sur mes réseaux sociaux.'
              : 'I\'m currently looking for new opportunities. Feel free to reach out via email or any social platform.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 hover:bg-slate-100/80 dark:hover:bg-slate-900/80 transition-all group shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-950 text-emerald-600 dark:text-emerald-500 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{link.label}</div>
                  <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{link.value}</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;