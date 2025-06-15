'use client';
import React from 'react';
import styled from 'styled-components';
import { projectsData } from '../../data/projectsData';
import ProjectCard from './ProjectCard';

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: #f4f5f7;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  color: #1a1a2e;
  margin-bottom: 50px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  perspective: 1000px;
`;

const Projects = ({ onViewProject }) => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>My Work</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onViewProject={onViewProject} 
          />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;