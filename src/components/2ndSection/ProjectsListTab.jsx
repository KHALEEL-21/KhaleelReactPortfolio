import React from 'react';
import './ProjectsListTab.scss';

const projects = [
  {
    title: 'Advanced PowerBI-like React Data Visualization (Ongoing)',
    description:
      'A full-stack product with dashboard creation, resizable charts, sidebar config, and drag-drop grid layout. Developed full UI in React.',
    tech: ['React.js', 'MUI', 'Nivo', 'Echarts', 'Chart.js', 'Bootstrap', 'Mobile Responsive', 'Firebase', 'Client Presentation', 'Unit-Testing',  'Advanced Features - AI ChatBOT', 'API Integration', 'Agents Development (with Kafka - Producer, Consumer, AgentsPooling)' ],
    year: '2025'
  },
  {
    title: 'Tomato - Food Ordering Web (MERN stack)',
    description:
      'Multi-page application (MPA) using for Food Ordering to delivery addressing and payments.',
    tech: ['React.js', 'MongoDB', 'scss', 'Node.js', 'Express.js', 'REST API', 'JWT Authentication', 'Socket.IO'],
    year: '2025'
  },
  {
    title: 'Personal Portfolio (Dynamic Web)',
    description:
      'Portfolio site with React, JavaScript showcasing projects and skills with responsive layout and interactivity with theme support.',
    tech: ['React.js', 'HTML', 'SCSS', 'JavaScript'],
    year: '2023'
  },
  {
    title: 'Hospital Management System',
    description:
      'Multi-page application (MPA) using PHP and MySQL for hospital data, appointments, and patient records.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    year: '2022'
  },
  {
    title: 'Blood Bank Management (UI Fixes)',
    description:
      'Contributed to a .NET-based final year project by fixing frontend bugs and improving layout.',
    tech: ['.NET', 'UI Debugging'],
    year: '2021'
  }
];

const ProjectsListTab = () => {
  return (
    <div className="projects-tab-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-year">{project.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsListTab;
