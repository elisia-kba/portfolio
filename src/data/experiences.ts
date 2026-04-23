import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    role: "Développeuse Full Stack",
    type: "Alternance",
    company: "Tomawatt",
    period: "Sept. 2025 – Août 2026",
    bullets: [
      "Conception et développement full stack d'une plateforme SaaS d'optimisation énergétique pour piloter des contrats électriques, simuler des scénarios tarifaires et analyser des données de consommation.",
      "Développement des APIs et de la logique métier avec Django, ainsi que de traitements asynchrones avec Celery et Redis pour le calcul tarifaire et le traitement de données.",
      "Développement d'interfaces en React et TypeScript pour la visualisation des données.",
    ],
    stack: ["Django", "Celery", "Redis", "PostgreSQL", "TimescaleDB", "React", "TypeScript", "TailwindCSS"],
  },
  {
    role: "Stagiaire Développeuse Full Stack",
    type: "Stage",
    company: "VNB-IT",
    period: "Mai 2025 – Août 2025",
    bullets: [
      "Développement d'une application web métier avec Django et React.",
      "Création d'APIs REST et gestion de la base de données PostgreSQL.",
      "Intégration de services (AWS S3, Firebase) et gestion de tâches asynchrones (Celery, Redis).",
      "Conteneurisation de l'application avec Docker et travail en équipe agile.",
    ],
    stack: ["Django", "React", "PostgreSQL", "Firebase", "AWS S3", "Redis", "Celery", "Docker"],
  },
  {
    role: "Stagiaire Informatique",
    type: "Stage",
    company: "Payroll Advice Corporate",
    period: "Mai – Juin 2024",
    bullets: [
      "Automatisation du téléchargement de pièces jointes via scripts Python (protocole IMAP).",
      "Documentation fonctionnelle du logiciel TransfertBanque ; gestion de données de facturation sous Excel.",
    ],
    stack: ["Python", "Excel"],
  },
];
