// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  // Dummy project data—replace with your own as needed.
  const projects = [
    {
      id: 1,
      title: 'Project One',
      image: '/preview.jpg',
      description: 'Detailed description of Project One.',
      attributes: ['Attribute 1', 'Attribute 2'],
    },
    {
      id: 2,
      title: 'Project Two',
      image: '/preview2.jpg',
      description: 'Detailed description for Project Two.',
      attributes: ['Attribute A', 'Attribute B'],
    },
    {
      id: 3,
      title: 'Project Three',
      image: '/preview3.jpg',
      description: 'Detailed description for Project Three.',
      attributes: ['Attribute X', 'Attribute Y'],
    },
    // Add more projects if needed.
  ];

  return (
    <div className="projects-content">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
