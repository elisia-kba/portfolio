import React, { useState } from 'react';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { projects } from './data/projects';
import type { Section } from './types';
import './App.css';

const NAVIGATION_ITEMS: Section[] = ['accueil', 'CV'];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('accueil');

  const handleNavigation = (section: Section) => {
    if (section === 'CV') {
      window.location.href = '/cv-elisia-koumba.pdf';
    } else {
      setActiveSection(section);
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo-container" onClick={handleLogoClick}>
            <img src="/icone.svg" alt="Logo" className="logo-image" />
          </div>
          <div className="nav-buttons">
            {NAVIGATION_ITEMS.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={activeSection === section ? 'active' : 'inactive'}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section className="presentation-section">
          <div className="intro-text">
            <span>Bienvenue sur mon portfolio !</span>
          </div>
          <p>
            Je m’appelle <b>Elisia Koumba</b>, et je suis actuellement en Master Ingénierie Logicielle à l'université de Rennes.
            Passionnée par le développement web et logiciel, j’aime concevoir des applications modernes et efficaces. 
            Ce site me permet de présenter mes projets, de partager mon CV et de centraliser mes informations professionnelles. 
            Vous pouvez retrouver mes liens LinkedIn et GitHub en bas de la page. 
            N’hésitez pas à explorer mon travail et à me contacter si besoin !
            Bonne visite ! 😊
          </p>
        </section>

        <section id="projets" className="projects-section">
          <div className="projects-header">
            <h2>Mes Projets</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card-wrapper">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>
      </main>

      

      <footer className="footer">
        <p>© {new Date().getFullYear()} Elisia KOUMBA | Contactez-moi via <a href="https://www.linkedin.com/in/elisia-k-862316297/">LinkedIn</a> ou <a href="https://github.com/elisia-kba">Github</a></p>
      </footer>
    </div>
  );
};

export default App;
