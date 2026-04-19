import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    role: "Développeuse Full Stack",
    type: "Alternance",
    company: "EcoFacto (Tomawatt)",
    period: "Sept. 2025 – Août 2026",
    bullets: [
      "Conception et développement d'une plateforme SaaS B2B d'optimisation énergétique pour bureaux d'études.",
      "Intégration SOAP de l'API Enedis : collecte de courbes de charge, gestion du cycle de vie des mandats.",
      "Architecture multi-services Docker ; calculs tarifaires TURPE avec pandas.",
    ],
    stack: ["Django", "DRF", "React", "TypeScript", "TailwindCSS", "Celery", "Redis", "TimescaleDB", "Docker"],
  },
  {
    role: "Stagiaire Développeuse Back-End",
    type: "Stage",
    company: "VNB-IT",
    period: "Mai 2025 – Août 2025",
    bullets: [
      "Développement d'APIs REST avec Node.js (Express) et gestion de bases PostgreSQL en production.",
      "Intégration de services tiers, collaboration avec les équipes front-end et DevOps.",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
  },
  {
    role: "Stagiaire Informatique",
    type: "Stage",
    company: "Payroll Advice Corporate",
    period: "Mai – Juin 2024",
    bullets: [
      "Automatisation du téléchargement de pièces jointes via scripts Python (protocole IMAP).",
      "Documentation fonctionnelle du logiciel TransfertBanque.",
    ],
    stack: ["Python"],
  },
];
