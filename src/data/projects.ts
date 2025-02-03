import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Todo App",
    description: "Todo List App est une application Vue.js permettant de créer, gérer et filtrer des tâches. Vous pouvez ajouter des tâches avec une description et une date, les marquer comme terminées, les modifier, ou les supprimer. (En cours de développement)",
    technologies: ["Vue.js", "TypeScript", "CSS"],
    imageUrl: "/todos-list-app.png",
    githubUrl: "https://github.com/elisia-kba/ToDoList",
    liveUrl: "https://todo.elisiakoumba.fr"
  },
  {
    title: "Advanced Wars",
    description: "Ce projet est la reproduction du jeu Advance Wars, il a été réalisé en Java avec l'interface graphique Swing.",
    technologies: ["Java", "Swing"],
    imageUrl: "/advanced-wars-app.png",
    githubUrl: "https://github.com/elisia-kba/projet_AW"
  },
  {
    title: "Pokédemo",
    description: "PokéDemo est une application web interactive créée avec Angular qui permet de découvrir et d'explorer des informations sur les Pokémon.",
    technologies: ["Angular", "TypeScript", "CSS"],
    imageUrl: "/pokedemo-app.png",
    githubUrl:"https://github.com/elisia-kba/pokedemo",
    liveUrl: "https://pokedemo.elisiakoumba.fr",
  },
  {
    title: "Film list",
    description: "Film List App est une petite application React qui permet de créer et gérer une liste de films. Elle contient également une page 'À propos' pour afficher des informations sur l'auteur. (En cours de développement)",
    technologies: ["React", "TypeScript", "HTML", "CSS"],
    imageUrl: "/film-app.png",
    githubUrl:"https://github.com/elisia-kba/film-list-app",
    liveUrl: "https://film-app.elisiakoumba.fr",
  },
];