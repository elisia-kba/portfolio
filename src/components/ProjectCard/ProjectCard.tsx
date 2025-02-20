import React from 'react';
import type { Project } from '../../types';
import './ProjectCard.css'; 

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl
}) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="img-container">
          <a href={liveUrl || githubUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt={title}
              className="project-card-img"
            />
          </a>
        </div>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-technologies">
          {technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card-links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              GitHub
              <span>→</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              Demo
              <span>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
