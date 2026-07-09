export const personalInfo = {
  firstName: "Ayoub",
  lastName: "Elmssellek",
  title: "Développeur Logiciel Full-Stack",
  email: "ayoubmssallak7@gmail.com",
  phone: "+212 636 409 233",
  birthDate: "19 juillet 2002",
  age: 23,
  location: "Dakhla, Hey Hassani",
  linkedin: "https://linkedin.com/in/ayoubelmssellek",
  github: "https://github.com/ayoubelmssellek",
  profileImage: "/profile-removebg-preview.png",
  // Replace with your CV: public/cv.pdf
  cvPath: "/cv.pdf",
};

export const profile = `Développeur full-stack diplômé en Développement Digital, spécialisé dans la conception d'applications web, mobiles et SaaS. Expérience concrète dans le développement de solutions performantes et utilisées en production. Rigoureux, autonome et orienté résultats, je maîtrise l'ensemble du cycle de développement et souhaite contribuer à des projets à fort impact.`;

export const experiences = [
  {
    id: "independent",
    title: "Développeur Web & Logiciel Full-Stack Indépendant",
    period: "Depuis 2023",
    type: "Freelance",
    highlights: [
      "Développement de plateformes web, mobiles et SaaS avec des technologies modernes.",
      "Conception d'applications de gestion, e-commerce et systèmes de réservation.",
      "Réalisation de solutions digitales destinées aux commerces, restaurants et services de livraison.",
      "Développement et maintenance d'applications performantes pour Android et iOS.",
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
];

export const projects = [
  {
    id: "uniqque",
    title: "Uniqque Delivery App",
    subtitle: "Projet Mobile – Commerce & Livraison",
    description:
      "Application mobile de commerce et de livraison utilisée en production.",
    highlights: [
      "Conception et développement d'une plateforme mobile complète pour la gestion des commandes et livraisons.",
      "Mise en place de fonctionnalités temps réel et optimisation des performances de l'application.",
      "Déploiement et maintenance d'une application Flutter utilisée par des utilisateurs réels.",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Laravel",
      "REST API",
      "Google Maps API",
    ],
  },
];

export const personalSkills = [
  "Travail d'équipe",
  "Gestion du temps",
  "Leadership",
  "Communication efficace",
  "Pensée critique",
];

export const technicalSkills = {
  languages: ["Laravel", "React.js", "Next.js", "Flutter"],
  databases: ["MySQL", "SQL", "MongoDB"],
  development: [
    "Front-end & Backend",
    "Conception d'interfaces UI/UX",
  ],
  tools: ["GitHub", "VS Code", "Postman"],
  other: [
    "Analyse des besoins",
    "Conception UML",
    "Gestion de projets",
    "Suite Microsoft Office",
  ],
};

export const education = [
  {
    id: "ista",
    degree: "Diplôme en Développement Digital",
    institution: "Institut Spécialisé de Technologie Appliquée (ISTA) Moyenne",
    period: "2023 - 2025",
    note: "Moyenne : 14.82",
  },
  {
    id: "pie",
    degree: "Attestation (PIE)",
    institution: "Formation axée sur l'entrepreneuriat, l'innovation et la création de projets",
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
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Anglais", level: "Niveau professionnel" },
  { name: "Français", level: "Niveau intermédiaire" },
];

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#profil", label: "Profil" },
  { href: "#experience", label: "Expérience" },
  { href: "#competences", label: "Compétences" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];
