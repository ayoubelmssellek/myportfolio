export type ShowcaseProject = {
  id: string;
  name: string;
  url: string | null;
  github: string | null;
  description: { en: string; fr: string };
  technologies: string[];
  highlights: { en: string[]; fr: string[] };
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "uniqque",
    name: "Uniqque Delivery App",
    url: "https://uniqque.online/",
    github: null,
    description: {
      en: "Mobile commerce and delivery application used in production for real customers.",
      fr: "Application mobile de commerce et de livraison utilisée en production par de vrais clients.",
    },
    technologies: ["Flutter", "Firebase", "Laravel", "REST API", "Google Maps API"],
    highlights: {
      en: [
        "Full mobile platform for orders and deliveries",
        "Real-time features and performance optimization",
        "Deployed and maintained for real users",
      ],
      fr: [
        "Plateforme mobile complète pour commandes et livraisons",
        "Fonctionnalités temps réel et optimisation des performances",
        "Déployée et maintenue pour des utilisateurs réels",
      ],
    },
  },
  {
    id: "streamnova",
    name: "StreamNova",
    url: "https://stream-nova-sigma.vercel.app",
    github: "https://github.com/ayoubelmssellek/StreamNova",
    description: {
      en: "Premium IPTV marketing site for live TV, on-demand streaming, channels, and device guides.",
      fr: "Site marketing IPTV premium pour TV en direct, VOD, chaînes et guides d'appareils.",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: {
      en: [
        "Conversion-focused landing with plans, catalog, and FAQ",
        "Responsive cinematic UI for sports and multi-device use",
        "WhatsApp CTA for lead conversion",
      ],
      fr: [
        "Landing orientée conversion avec offres, catalogue et FAQ",
        "UI responsive pour sport et multi-appareils",
        "CTA WhatsApp pour la conversion",
      ],
    },
  },
  {
    id: "ecom-libya-store",
    name: "Libya Shop",
    url: "https://ecom-libya-store.vercel.app",
    github: null,
    description: {
      en: "Arabic e-commerce storefront for Libya with nationwide delivery and cash-on-delivery.",
      fr: "Boutique e-commerce arabe pour la Libye avec livraison nationale et paiement à la livraison.",
    },
    technologies: ["React", "Vite", "Tailwind CSS"],
    highlights: {
      en: [
        "Arabic storefront experience for the Libyan market",
        "Cash-on-delivery and delivery-focused UX",
        "Product catalog deployed on Vercel",
      ],
      fr: [
        "Vitrine arabe pour le marché libyen",
        "UX axée COD et livraison",
        "Catalogue produit déployé sur Vercel",
      ],
    },
  },
  {
    id: "medconnect",
    name: "MedConnect",
    url: "https://medconnectmaroc.vercel.app",
    github: "https://github.com/ayoubelmssellek/MedConnect",
    description: {
      en: "Medical SaaS connecting patients and healthcare providers for booking and practice management.",
      fr: "SaaS médical connectant patients et professionnels pour la prise de rendez-vous et la gestion de cabinet.",
    },
    technologies: ["React", "Vite", "React Router", "Tailwind CSS"],
    highlights: {
      en: [
        "Patient booking and provider dashboard",
        "Appointments, availability, and patient records",
        "Morocco-oriented multi-language experience",
      ],
      fr: [
        "Réservation patient et tableau de bord praticien",
        "RDV, disponibilités et dossiers patients",
        "Expérience multilingue orientée Maroc",
      ],
    },
  },
  {
    id: "gym-management",
    name: "FitClub Pro",
    url: "https://gym-managment-system-psi.vercel.app",
    github: "https://github.com/ayoubelmssellek/gym_managment_system",
    description: {
      en: "RTL Arabic gym admin dashboard for members, coaches, subscriptions, and payments.",
      fr: "Tableau de bord RTL arabe pour gym : membres, coachs, abonnements et paiements.",
    },
    technologies: ["React", "Vite", "Redux", "Tailwind CSS"],
    highlights: {
      en: [
        "Dashboard KPIs for members, revenue, and attendance",
        "Coaches, workout plans, and subscriptions modules",
        "Arabic RTL interface for local businesses",
      ],
      fr: [
        "KPI membres, revenus et présence",
        "Modules coachs, programmes et abonnements",
        "Interface RTL arabe pour entreprises locales",
      ],
    },
  },
  {
    id: "hotel-management",
    name: "Karam Hotel Management",
    url: "https://hotel-managment-nine.vercel.app",
    github: "https://github.com/ayoubelmssellek/hotel_managment",
    description: {
      en: "Hotel operations system with room planner, guests, staff, inventory, and housekeeping.",
      fr: "Système de gestion hôtelière : planning des chambres, clients, staff, stock et ménage.",
    },
    technologies: ["React", "Vite", "Redux", "Tailwind CSS"],
    highlights: {
      en: [
        "Visual room planner with booking statuses",
        "Employees, clients, inventory, and reports",
        "Occupancy and revenue-focused dashboard",
      ],
      fr: [
        "Planning visuel des chambres avec statuts",
        "Employés, clients, inventaire et rapports",
        "Dashboard occupation et revenus",
      ],
    },
  },
  {
    id: "jawbli",
    name: "JawbLi",
    url: "https://jawbli.vercel.app",
    github: "https://github.com/ayoubelmssellek/smartreplayapp",
    description: {
      en: "AI assistant that suggests natural Moroccan Darija replies from text or screenshots (OCR).",
      fr: "Assistant IA qui propose des réponses en darija marocaine à partir de texte ou de captures (OCR).",
    },
    technologies: ["React", "Vite", "Tailwind CSS", "Tesseract.js", "Gemini API"],
    highlights: {
      en: [
        "Text or image input with OCR",
        "Darija-focused reply suggestions",
        "Chat-style mobile-friendly UX",
      ],
      fr: [
        "Saisie texte ou image avec OCR",
        "Suggestions de réponses en darija",
        "UX type chat adaptée mobile",
      ],
    },
  },
  {
    id: "gusto-dakhla",
    name: "Gusto Dakhla",
    url: null,
    github: "https://github.com/ayoubelmssellek/test_frontend",
    description: {
      en: "Full restaurant ordering platform with customer storefront and admin back office.",
      fr: "Plateforme de commande restaurant complète : vitrine client et back-office admin.",
    },
    technologies: ["React", "Vite", "Redux", "React Query", "i18next", "PWA"],
    highlights: {
      en: [
        "Menu, cart, orders, reviews, and account flows",
        "Admin for products, employees, offers, and sales",
        "Role-based dashboards with charts and i18n",
      ],
      fr: [
        "Menu, panier, commandes, avis et compte",
        "Admin produits, employés, offres et ventes",
        "Tableaux de bord par rôle avec graphiques et i18n",
      ],
    },
  },
  {
    id: "oramadev",
    name: "OramaDev",
    url: "https://www.oramadev.com",
    github: "https://github.com/ayoubelmssellek/sitelik",
    description: {
      en: "Agency marketing site for a Moroccan web development team — services, stack, and projects.",
      fr: "Site d'agence pour une équipe marocaine de développement web — services, stack et projets.",
    },
    technologies: ["React", "Vite", "Tailwind CSS", "EmailJS"],
    highlights: {
      en: [
        "Team portfolio with services and tech showcase",
        "Contact flow for client inquiries",
        "Positioned for business websites and product builds",
      ],
      fr: [
        "Portfolio d'équipe avec services et stack",
        "Parcours contact pour prospects",
        "Positionné pour sites business et produits",
      ],
    },
  },
  {
    id: "ratemesaas",
    name: "RateMe SaaS",
    url: null,
    github: "https://github.com/ayoubelmssellek/ratemesaas",
    description: {
      en: "SaaS for restaurants to collect customer reviews via QR codes, with analytics and admin tools.",
      fr: "SaaS pour restaurants collectant les avis clients via QR codes, avec analytics et admin.",
    },
    technologies: ["Laravel", "React", "JWT", "Tailwind CSS", "QR Code"],
    highlights: {
      en: [
        "QR-based review collection",
        "Laravel API + React admin dashboard",
        "Analytics and social reputation tooling",
      ],
      fr: [
        "Collecte d'avis par QR",
        "API Laravel + admin React",
        "Analytics et outils de réputation",
      ],
    },
  },
  {
    id: "branclick",
    name: "Branclick / StyleDrop",
    url: "https://branclick.vercel.app",
    github: "https://github.com/ayoubelmssellek/branclick",
    description: {
      en: "Social commerce front end with store feed, drops, messaging, cart, and buyer profiles.",
      fr: "Front de social commerce avec fil magasins, drops, messagerie, panier et profils.",
    },
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    highlights: {
      en: [
        "Instagram-like product feed with social interactions",
        "Store profiles, limited drops, and in-app messaging",
        "Auth-gated shopping experience",
      ],
      fr: [
        "Fil produits type Instagram avec interactions",
        "Profils magasins, drops et messagerie",
        "Expérience shopping avec authentification",
      ],
    },
  },
  {
    id: "marselle-style",
    name: "Marselle Style",
    url: "https://marselle-style.vercel.app",
    github: null,
    description: {
      en: "Fashion e-commerce for clothes, watches, fragrances, and shoes with WhatsApp checkout.",
      fr: "E-commerce mode (vêtements, montres, parfums, chaussures) avec checkout WhatsApp.",
    },
    technologies: ["React", "Vite", "Tailwind CSS"],
    highlights: {
      en: [
        "Multi-category catalog priced in MAD",
        "Cart and WhatsApp-based checkout",
        "Includes admin panel for store management",
      ],
      fr: [
        "Catalogue multi-catégories en MAD",
        "Panier et commande via WhatsApp",
        "Panneau admin pour la gestion boutique",
      ],
    },
  },
  {
    id: "gestion-stock-narc",
    name: "Gestion de Stock NARC",
    url: "https://gestion-de-stock-narc.vercel.app",
    github: "https://github.com/ayoubelmssellek/Gestion_de_Stock_NARC",
    description: {
      en: "Stock and beneficiary management for NARC centers — inventory, distributions, and exports.",
      fr: "Gestion de stock et de bénéficiaires pour centres NARC — inventaire, distributions et exports.",
    },
    technologies: ["React", "Vite", "Recharts", "jsPDF", "SheetJS"],
    highlights: {
      en: [
        "Dashboard for stock, beneficiaries, and low stock alerts",
        "CRUD tied to centers and delivery notes",
        "PDF and Excel exports for operations",
      ],
      fr: [
        "Dashboard stocks, bénéficiaires et alertes",
        "CRUD lié aux centres et bons de livraison",
        "Exports PDF et Excel pour les opérations",
      ],
    },
  },
  {
    id: "bella-vista",
    name: "Bella Vista",
    url: "https://resturantblog.vercel.app",
    github: "https://github.com/ayoubelmssellek/resturantblog",
    description: {
      en: "Multilingual restaurant showcase site with menu, gallery, about, contact, and PWA support.",
      fr: "Site vitrine restaurant multilingue avec menu, galerie, à propos, contact et PWA.",
    },
    technologies: ["React", "Vite", "i18next", "Tailwind CSS", "PWA"],
    highlights: {
      en: [
        "Italian cuisine marketing site with EN/AR support",
        "Mobile bottom navigation and RTL layouts",
        "PWA install for home-screen access",
      ],
      fr: [
        "Vitrine cuisine italienne EN/AR",
        "Navigation mobile et layouts RTL",
        "Installation PWA sur l'écran d'accueil",
      ],
    },
  },
];
