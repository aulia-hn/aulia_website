import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { getProjects } from '../data/music';

const Projects: React.FC = () => {
  const projects = getProjects();

  return (
    <div className="py-6">
      <img 
        src="/src/assets/images/sections/projects.png" 
        alt="Projects"
        className="h-12 w-auto mb-10" 
      />
      
      <p className="text-gray-600 max-w-2xl mb-12">
        Explore my musical journey through these albums and EPs. Each project represents a unique chapter in my artistic evolution.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} type="project" />
        ))}
      </div>
    </div>
  );
};

export default Projects;