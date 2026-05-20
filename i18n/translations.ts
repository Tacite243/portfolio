import { Translation } from '../types';

export const translations: Record<'fr' | 'en', any> = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      role: "Ingénieur Logiciel",
      slogan: "Concevoir des produits numériques fiables et évolutifs.",
      downloadCV: "Télécharger CV",
      githubLink: "Voir GitHub",
      whatsapp: "WhatsApp",
    },
    about: {
      title: "À propos",
      description: "Développeur polyvalent avec plus de 4 ans d'expérience dans la création d'applications performantes et intuitives. Spécialisé en front-end (React, Next.js) et doté de solides compétences en back-end (Express.js, NestJs, Python, bases de données, API). Passionné par l'innovation, autonome et orienté solution, je m'engage à concevoir des produits numériques fiables et évolutifs.",
    },
    skills: {
      title: "Compétences Techniques",
      frontend: "Frontend",
      backend: "Backend",
      database: "Bases de données",
      other: "Outils & Méthodes",
      languages: "Langues",
    },
    projects: {
      title: "Projets Personnels",
      subtitle: "Explorez mes dépôts GitHub et mes créations récentes.",
      viewAll: "Voir tous les dépôts",
    },
    experience: {
      title: "Expériences Professionnelles",
      present: "Aujourd'hui",
      items: [
        {
          company: 'Congo Developers Club',
          role: 'Initiateur & Développeur Principal',
          period: 'Depuis Mai 2026',
          description: [
            "Initiation et développement du site web officiel.",
            "Création d'une vitrine interactive valorisant les profils d'ingénieurs congolais.",
            "Soutien à la visibilité des compétences locales à l'international."
          ],
          link: 'https://github.com/Congo-Developers-Club'
        },
        {
          company: 'Surfsense',
          role: 'Contributeur Open Source',
          period: 'Depuis Mars 2026',
          description: [
            "Contributions techniques au projet d'envergure open-source Surfsense.",
            "Optimisation de modules de traitement et d'analyse.",
            "Collaboration avec des mainteneurs internationaux sur la résolution de problématiques de performance."
          ],
          link: 'https://github.com/surfsense/surfsense'
        },
        {
          company: 'Yupidoc',
          role: 'Développeur Software (Contributeur)',
          period: 'Fév 2026 - Avr 2026',
          description: [
            "Contributions au développement de la plateforme de documentation collaborative Yupidoc.",
            "Optimisation des interfaces utilisateur et des performances de navigation.",
            "Intégration de fonctionnalités interactives pour améliorer l'expérience utilisateur."
          ],
          link: 'https://yupidoc.com/'
        },
        {
          company: 'Marias Saas',
          role: 'Créateur & Développeur Lead (Projet Personnel)',
          period: 'Depuis Janvier 2026',
          description: [
            "Conception et développement d'un logiciel SaaS open-source de gestion d'officines pharmaceutiques.",
            "Amélioration des modules de gestion de stocks et d'analyse des ventes.",
            "Mise en place d'une architecture modulaire et sécurisée pour faciliter le déploiement."
          ],
          link: 'https://github.com/Tacite243/MariaSaas'
        },
        {
          company: 'GRECOM',
          role: 'Stagiaire Développeur',
          period: 'Nov 2024 - Fév 2025',
          description: [
            "Optimisation d'applications internes.",
            "Implémentation de correctifs techniques.",
            "Collaboration sur la refonte de leur site web."
          ],
          link: null
        },
        {
          company: 'Kali Academy',
          role: 'Stagiaire Développeur',
          period: 'Avr 2024 - Juin 2024',
          description: [
            "Création et maintenance de projets d'intérêt communautaire.",
            "Développement continu d'applications web dynamiques.",
            "Participation rigoureuse aux processus de revue de code."
          ],
          link: null
        },
        {
          company: 'Freelance',
          role: 'Développeur Fullstack',
          period: '2022 - 2024',
          description: [
            "Conception de l'application d'inventaire Electric COAST.",
            "Création de la suite logicielle Galaxy Soft (gestion de points de vente).",
            "Développement de sites vitrines (Fondation Elila, Tour Congo, DRC Homeland).",
            "Contributions techniques aux écosystèmes Starknet & Wikimedia."
          ],
          link: null
        }
      ]
    },
    education: {
      title: "Formation",
    },
    contact: {
      title: "Contact",
      subtitle: "Travaillons ensemble sur votre prochain projet.",
      email: "Email",
      linkedIn: "LinkedIn",
      phone: "Téléphone",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      role: "Software Engineer",
      slogan: "Designing reliable and scalable digital products.",
      downloadCV: "Download CV",
      githubLink: "View GitHub",
      whatsapp: "WhatsApp",
    },
    about: {
      title: "About Me",
      description: "Versatile developer with over 4 years of experience creating high-performance and intuitive applications. Specialized in front-end (React, Next.js) with solid skills in back-end (Express.js, NestJs, Python, databases, API). Passionate about innovation, autonomous, and solution-oriented, I am committed to designing reliable and scalable digital products.",
    },
    skills: {
      title: "Technical Skills",
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      other: "Tools & Methods",
      languages: "Languages",
    },
    projects: {
      title: "Personal Projects",
      subtitle: "Explore my GitHub repositories and recent creations.",
      viewAll: "View all repositories",
    },
    experience: {
      title: "Work Experience",
      present: "Present",
      items: [
        {
          company: 'Congo Developers Club',
          role: 'Initiator & Lead Developer',
          period: 'Since May 2026',
          description: [
            "Initiation and core development of the official website.",
            "Creation of an interactive showcase highlighting top Congolese developers.",
            "Promoting international visibility for local technical skills."
          ],
          link: 'https://github.com/Congo-Developers-Club'
        },
        {
          company: 'Surfsense',
          role: 'Open Source Contributor',
          period: 'Since March 2026',
          description: [
            "Technical contributions to the large-scale open-source project Surfsense.",
            "Optimization of data processing and analysis modules.",
            "Collaborating with global maintainers on key performance resolutions."
          ],
          link: 'https://github.com/surfsense/surfsense'
        },
        {
          company: 'Yupidoc',
          role: 'Software Developer (Contributor)',
          period: 'Feb 2026 - Apr 2026',
          description: [
            "Contributions to the development of the collaborative documentation platform Yupidoc.",
            "Optimizing user interfaces and performance for navigation.",
            "Integrating interactive features to improve user engagement."
          ],
          link: 'https://yupidoc.com/'
        },
        {
          company: 'Marias Saas',
          role: 'Creator & Lead Developer (Personal Project)',
          period: 'Since January 2026',
          description: [
            "Design and development of this open-source SaaS software for pharmacy management.",
            "Improved inventory tracking and sales reporting analytics.",
            "Built a modular and secure architecture for seamless deployment."
          ],
          link: 'https://github.com/Tacite243/MariaSaas'
        },
        {
          company: 'GRECOM',
          role: 'Intern Developer',
          period: 'Nov 2024 - Feb 2025',
          description: [
            "Optimization of internal applications.",
            "Implementation of technical fixes.",
            "Collaboration on the redesign of their website."
          ],
          link: null
        },
        {
          company: 'Kali Academy',
          role: 'Intern Developer',
          period: 'Apr 2024 - Jun 2024',
          description: [
            "Creation of community-oriented open source projects.",
            "Development of dynamic responsive web applications.",
            "Participation in team-wide code review procedures."
          ],
          link: null
        },
        {
          company: 'Freelance',
          role: 'Fullstack Developer',
          period: '2022 - 2024',
          description: [
            "Design of Electric COAST (Inventory application).",
            "Development of Galaxy Soft SaaS for store management.",
            "Created showcase websites (Fondation Elila, Tour Congo, DRC Homeland).",
            "Starknet & Wikimedia technical contributions."
          ],
          link: null
        }
      ]
    },
    education: {
      title: "Education",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together on your next project.",
      email: "Email",
      linkedIn: "LinkedIn",
      phone: "Phone",
    },
  },
};