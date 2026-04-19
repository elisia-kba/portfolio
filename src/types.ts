export type Section = 'accueil' | 'CV' ;

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  type: string;
  company: string;
  period: string;
  bullets: string[];
  stack: string[];
}