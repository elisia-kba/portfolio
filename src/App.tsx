import React, { useState } from 'react';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { projects } from './data/projects';
import { experiences } from './data/experiences';
import type { Section } from './types';
import './App.css';

const NAVIGATION_ITEMS: Section[] = ['accueil', 'CV'];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('accueil');

  const handleNavigation = (section: Section) => {
    if (section === 'CV') {
      window.location.href = '/cv_elisia_koumba.pdf';
    } else {
      setActiveSection(section);
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="App">
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

      <main>
        <section className="hero-section">
          <div className="hero-left">
            <span className="hero-badge">En recherche d'un CDI</span>
            <h1 className="hero-name">Elisia Koumba</h1>
            <p className="hero-title">Développeuse Full Stack</p>
            <p className="hero-subtitle">Master Ingénierie Logicielle · Université de Rennes</p>
            <div className="hero-roles">
              <span>Développeuse Full Stack</span>
              <span>Développeuse Back-End</span>
              <span>Développeuse Front-End</span>
            </div>
            <p className="hero-description">
              Expérience concrète en conception de plateformes SaaS B2B, développement d'APIs REST
              et intégration de systèmes tiers. À l'aise back-end comme front-end.
            </p>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/elisia-k-862316297/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                LinkedIn
              </a>
              <a href="https://github.com/elisia-kba" target="_blank" rel="noopener noreferrer" className="btn-outline">
                GitHub
              </a>
              <a href="/cv_elisia_koumba.pdf" className="btn-outline">
                Voir le CV
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="terminal-card">
              <div className="terminal-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-body">
                <p><span className="kw">const</span> <span className="var">elisia</span> <span className="op">=</span> {'{'}</p>
                <p className="indent"><span className="key">role</span><span className="op">:</span> <span className="str">"Full Stack Developer"</span><span className="op">,</span></p>
                <p className="indent"><span className="key">backend</span><span className="op">:</span> [<span className="str">"Django"</span>, <span className="str">"Node.js"</span>, <span className="str">"PostgreSQL"</span>]<span className="op">,</span></p>
                <p className="indent"><span className="key">frontend</span><span className="op">:</span> [<span className="str">"React"</span>, <span className="str">"TypeScript"</span>, <span className="str">"Tailwind"</span>]<span className="op">,</span></p>
                <p className="indent"><span className="key">devops</span><span className="op">:</span> [<span className="str">"Docker"</span>, <span className="str">"Git"</span>, <span className="str">"Redis"</span>]<span className="op">,</span></p>
                <p className="indent"><span className="key">location</span><span className="op">:</span> <span className="str">"Rennes · Île-de-France · Nantes"</span><span className="op">,</span></p>
                <p className="indent"><span className="key">status</span><span className="op">:</span> <span className="str open">"open to CDI"</span><span className="op">,</span></p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="experiences-section">
          <h2>Expériences</h2>
          <p className="section-subtitle">Mon parcours professionnel</p>
          <div className="experiences-list">
            {experiences.map((xp) => (
              <div key={xp.company + xp.period} className="experience-card">
                <div className="experience-header">
                  <div className="experience-left">
                    <span className="experience-role">{xp.role}</span>
                    <span className="experience-type-badge">{xp.type}</span>
                  </div>
                  <span className="experience-period">{xp.period}</span>
                </div>
                <p className="experience-company">{xp.company}</p>
                <ul className="experience-bullets">
                  {xp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="experience-stack">
                  {xp.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projets" className="projects-section">
          <h2>Projets</h2>
          <p className="section-subtitle">Une sélection de mes réalisations</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card-wrapper">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Elisia Koumba · <a href="https://www.linkedin.com/in/elisia-k-862316297/">LinkedIn</a> · <a href="https://github.com/elisia-kba">GitHub</a></p>
      </footer>
    </div>
  );
};

export default App;
