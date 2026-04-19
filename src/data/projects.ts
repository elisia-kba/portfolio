import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "BingoLive",
    description: "Application web de loto en ligne avec gestion de parties en temps réel.",
    technologies: ["TypeScript", "React", "Next.js", "MySQL", "Docker"],
  },
  {
    title: "Mastermind Web",
    description: "Reproduction web du célèbre jeu Mastermind avec interface moderne et back-end Flask.",
    technologies: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    imageUrl: "/mastermind-app.png",
    githubUrl: "https://github.com/elisia-kba/mastermind",
    liveUrl: "https://mastermind.elisiakoumba.fr/",
  },
  {
    title: "Chatbot Avatar",
    description: "Assistant multilangue fournissant des adresses de lieux à Rennes via une interface conversationnelle.",
    technologies: ["Scala", "HTML", "CSS"],
  },
];
