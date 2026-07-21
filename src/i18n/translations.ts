export type Locale = "en" | "fr";

export const defaultLocale: Locale = "en";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

const en = {
  meta: {
    title: "Ayoub Elmssellek | Full-Stack Developer",
    description:
      "Portfolio of Ayoub Elmssellek - Full-Stack Software Developer specialized in web, mobile and SaaS applications. Laravel, React, Next.js, Flutter.",
  },
  nav: [
    { href: "#accueil", label: "Home" },
    { href: "#profil", label: "Profile" },
    { href: "#experience", label: "Experience" },
    { href: "#projets", label: "Projects" },
    { href: "#competences", label: "Skills" },
    { href: "#formation", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    greeting: "Hello, I'm",
    title: "Full-Stack Software Developer",
    tagline:
      "I design and build high-performance web, mobile and SaaS applications — and grow them with SEO and Meta Ads.",
    contactMe: "Contact me",
    downloadCv: "Download CV",
    discover: "Discover",
    yearsExperience: "years of experience",
    imageBadge: "Software Developer",
  },
  about: {
    title: "Profile",
    subtitle: "Who I am and what I do",
    role: "Full-Stack Developer",
    roleTags: "Web · Mobile · SaaS · SEO · Meta Ads",
    profile:
      "Full-stack developer with a degree in Digital Development, specialized in designing web, mobile and SaaS applications. Hands-on experience building performant solutions used in production. I also master SEO to rank websites on the first page of search results, and Meta Ads (Facebook & Instagram) to acquire customers. Rigorous, autonomous and results-driven, I master the full development and growth cycle.",
    highlights: [
      "Production-ready applications",
      "SEO & first-page rankings",
      "Meta Ads campaigns",
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Selected products and applications I've built and shipped",
    viewLive: "View live",
    showMore: "See more projects",
    showLess: "Show less",
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey and concrete achievements",
    experienceLabel: "Experience",
    projectsLabel: "Projects",
    items: [
      {
        id: "independent",
        title: "Independent Full-Stack Web & Software Developer",
        period: "Since 2023",
        type: "Freelance",
        highlights: [
          "Development of web, mobile and SaaS platforms with modern technologies.",
          "Design of management apps, e-commerce, booking and car rental systems.",
          "SEO optimization to rank websites on the first page of Google.",
          "Meta Ads (Facebook & Instagram) campaigns to drive traffic and conversions.",
        ],
      },
      {
        id: "stage-cren",
        title: "Internship – Regional Coordination of National Mutual Aid",
        location: "Dakhla-Oued Eddahab",
        period: "2025",
        duration: "30 days",
        type: "Internship",
        highlights: [
          "Contributed to developing a stock management application used to optimize equipment tracking and distribution.",
          "Requirements analysis and system design.",
          "Built a functional stock management application.",
          "Processed and organized data from multiple files while ensuring accuracy and quality.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Personal and technical expertise",
    personalLabel: "Personal",
    technicalLabel: "Technical",
    personal: [
      "Teamwork",
      "Time management",
      "Leadership",
      "Effective communication",
      "Critical thinking",
    ],
    categories: {
      languages: "Languages & Frameworks",
      databases: "Databases",
      development: "Development",
      growth: "SEO & Ads",
      tools: "Tools",
      other: "Other",
    },
    technical: {
      languages: ["Laravel", "React.js", "Next.js", "Flutter"],
      databases: ["MySQL", "SQL", "MongoDB"],
      development: ["Front-end & Backend", "UI/UX interface design"],
      growth: [
        "SEO (first-page rankings)",
        "Technical SEO",
        "Meta Ads (Facebook & Instagram)",
        "Conversion-focused campaigns",
      ],
      tools: ["GitHub", "VS Code", "Postman"],
      other: [
        "Requirements analysis",
        "UML design",
        "Project management",
        "Microsoft Office Suite",
      ],
    },
  },
  education: {
    title: "Education & Languages",
    subtitle: "Academic background and language skills",
    educationLabel: "Education",
    languagesLabel: "Spoken languages",
    items: [
      {
        id: "ista",
        degree: "Diploma in Digital Development",
        institution:
          "Specialized Institute of Applied Technology (ISTA) Mohammedia",
        period: "2023 - 2025",
        note: "GPA: 14.82",
      },
      {
        id: "pie",
        degree: "Certificate (PIE)",
        institution:
          "Training focused on entrepreneurship, innovation and project creation",
        period: "2023 - 2025",
      },
      {
        id: "biology",
        degree: "One year of Biology studies",
        institution: "Chouaïb Doukkali University, El Jadida",
        period: "2022 - 2023",
      },
      {
        id: "bac",
        degree: "Baccalaureate in Life and Earth Sciences",
        institution: "Chouaïb Doukkali High School, El Jadida",
        period: "2021 - 2022",
      },
    ],
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Professional" },
      { name: "French", level: "Intermediate" },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Let's discuss your next project",
    email: "Email",
    phone: "Phone",
    location: "Location",
    ctaTitle: "Let's work together",
    ctaText:
      "Have a web, mobile, SaaS, SEO or Meta Ads project? I'd be happy to discuss it and help bring it to life.",
    sendMessage: "Send a message",
    downloadCv: "Download my CV",
    emailSubject: "Contact - Portfolio",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with",
  },
};

const fr = {
  meta: {
    title: "Ayoub Elmssellek | Développeur Full-Stack",
    description:
      "Portfolio de Ayoub Elmssellek - Développeur Logiciel Full-Stack spécialisé en applications web, mobiles et SaaS. Laravel, React, Next.js, Flutter.",
  },
  nav: [
    { href: "#accueil", label: "Accueil" },
    { href: "#profil", label: "Profil" },
    { href: "#experience", label: "Expérience" },
    { href: "#projets", label: "Projets" },
    { href: "#competences", label: "Compétences" },
    { href: "#formation", label: "Formation" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    greeting: "Bonjour, je suis",
    title: "Développeur Logiciel Full-Stack",
    tagline:
      "Je conçois et développe des applications web, mobiles et SaaS performantes — et je les fais croître avec le SEO et Meta Ads.",
    contactMe: "Me contacter",
    downloadCv: "Télécharger CV",
    discover: "Découvrir",
    yearsExperience: "ans d'expérience",
    imageBadge: "Software Developer",
  },
  about: {
    title: "Profil",
    subtitle: "Qui je suis et ce que je fais",
    role: "Développeur Full-Stack",
    roleTags: "Web · Mobile · SaaS · SEO · Meta Ads",
    profile:
      "Développeur full-stack diplômé en Développement Digital, spécialisé dans la conception d'applications web, mobiles et SaaS. Expérience concrète dans le développement de solutions performantes et utilisées en production. Je maîtrise aussi le SEO pour positionner des sites en première page Google, et Meta Ads (Facebook & Instagram) pour acquérir des clients. Rigoureux, autonome et orienté résultats, je maîtrise l'ensemble du cycle de développement et de croissance.",
    highlights: [
      "Applications en production",
      "SEO & première page Google",
      "Campagnes Meta Ads",
    ],
  },
  projects: {
    title: "Projets",
    subtitle: "Produits et applications que j'ai conçus et déployés",
    viewLive: "Voir en ligne",
    showMore: "Voir plus de projets",
    showLess: "Voir moins",
  },
  experience: {
    title: "Expérience",
    subtitle: "Mon parcours professionnel et réalisations concrètes",
    experienceLabel: "Expérience",
    projectsLabel: "Projets",
    items: [
      {
        id: "independent",
        title: "Développeur Web & Logiciel Full-Stack Indépendant",
        period: "Depuis 2023",
        type: "Freelance",
        highlights: [
          "Développement de plateformes web, mobiles et SaaS avec des technologies modernes.",
          "Conception d'applications de gestion, e-commerce, réservation et location de voitures.",
          "Optimisation SEO pour positionner des sites en première page Google.",
          "Campagnes Meta Ads (Facebook & Instagram) pour générer trafic et conversions.",
        ],
      },
      {
        id: "stage-cren",
        title: "Stage – Coordination Régionale de l'Entraide Nationale",
        location: "Dakhla-Oued Eddahab",
        period: "2025",
        duration: "30 jours",
        type: "Stage",
        highlights: [
          "Contribution au développement d'une application de gestion de stock utilisée pour optimiser le suivi et la distribution du matériel.",
          "Analyse des besoins et conception du système.",
          "Développement d'une application fonctionnelle de gestion de stock.",
          "Traitement et organisation des données à partir de plusieurs fichiers tout en garantissant leur exactitude et leur qualité.",
        ],
      },
    ],
  },
  skills: {
    title: "Compétences",
    subtitle: "Savoir-faire personnel et technique",
    personalLabel: "Personnelles",
    technicalLabel: "Techniques",
    personal: [
      "Travail d'équipe",
      "Gestion du temps",
      "Leadership",
      "Communication efficace",
      "Pensée critique",
    ],
    categories: {
      languages: "Langages & Frameworks",
      databases: "Bases de données",
      development: "Développement",
      growth: "SEO & Ads",
      tools: "Outils",
      other: "Autres",
    },
    technical: {
      languages: ["Laravel", "React.js", "Next.js", "Flutter"],
      databases: ["MySQL", "SQL", "MongoDB"],
      development: ["Front-end & Backend", "Conception d'interfaces UI/UX"],
      growth: [
        "SEO (première page Google)",
        "SEO technique",
        "Meta Ads (Facebook & Instagram)",
        "Campagnes orientées conversion",
      ],
      tools: ["GitHub", "VS Code", "Postman"],
      other: [
        "Analyse des besoins",
        "Conception UML",
        "Gestion de projets",
        "Suite Microsoft Office",
      ],
    },
  },
  education: {
    title: "Formation & Langues",
    subtitle: "Parcours académique et compétences linguistiques",
    educationLabel: "Formations",
    languagesLabel: "Langues parlées",
    items: [
      {
        id: "ista",
        degree: "Diplôme en Développement Digital",
        institution:
          "Institut Spécialisé de Technologie Appliquée (ISTA) Mohammedia",
        period: "2023 - 2025",
        note: "Moyenne : 14.82",
      },
      {
        id: "pie",
        degree: "Attestation (PIE)",
        institution:
          "Formation axée sur l'entrepreneuriat, l'innovation et la création de projets",
        period: "2023 - 2025",
      },
      {
        id: "biology",
        degree: "Une année de formation en Biologie",
        institution: "Université Chouaïb Doukkali, El Jadida",
        period: "2022 - 2023",
      },
      {
        id: "bac",
        degree: "Baccalauréat en Sciences de la Vie et de la Terre",
        institution: "Lycée Chouaïb Doukkali, El Jadida",
        period: "2021 - 2022",
      },
    ],
    languages: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Anglais", level: "Niveau professionnel" },
      { name: "Français", level: "Niveau intermédiaire" },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Discutons de votre prochain projet",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    ctaTitle: "Travaillons ensemble",
    ctaText:
      "Vous avez un projet web, mobile, SaaS, SEO ou Meta Ads ? Je serais ravi d'en discuter et de contribuer à sa réalisation.",
    sendMessage: "Envoyer un message",
    downloadCv: "Télécharger mon CV",
    emailSubject: "Prise de contact - Portfolio",
  },
  footer: {
    rights: "Tous droits réservés.",
    builtWith: "Développé avec",
  },
};

export const translations = { en, fr } as const;

export type Translation = (typeof translations)[Locale];
