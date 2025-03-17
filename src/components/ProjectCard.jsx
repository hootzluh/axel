// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (e) => {
    // Prevent triggering when clicking the close button.
    if (e.target.classList.contains('close-btn')) return;
    setIsOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div
      className={`grid-item ${isOpen ? 'flipped expanded' : ''}`}
      onClick={handleCardClick}
    >
      <div className="grid-item-inner">
        <div className="front">
          <img src={project.image} alt={project.title} />
          <div className="title-overlay">{project.title}</div>
        </div>
        <div className="back">
          <button className="close-btn" onClick={handleClose}>X</button>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="attributes">
            {project.attributes.map((attr, idx) => (
              <li key={idx}>{attr}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
