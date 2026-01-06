
import React from 'react';
import { Translation, Locale } from '../types';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  locale: Locale;
  t: Translation;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
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
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">{t.contact.title}</h2>
        <div className="h-[1px] flex-1 bg-slate-800" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-4xl font-extrabold text-white leading-tight">
            {t.contact.subtitle}
          </h3>
          <p className="text-lg text-slate-400 max-w-md">
            I'm currently looking for new opportunities. Feel free to reach out via email or any social platform.
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
              className="flex items-center justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-slate-950 text-emerald-500 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{link.label}</div>
                  <div className="text-lg font-bold text-slate-200">{link.value}</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
