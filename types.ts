
export type Locale = 'fr' | 'en';

export interface Translation {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    role: string;
    slogan: string;
    downloadCV: string;
    githubLink: string;
    whatsapp: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    database: string;
    other: string;
    languages: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  experience: {
    title: string;
    present: string;
  };
  education: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedIn: string;
    phone: string;
  };
}
