'use client';
import React from 'react';
import styled from 'styled-components';
import WeatherApp from '@/components/projects/WeatherApp';
import KanbanApp from '@/components/projects/KanbanApp';
import BrickBreaker from '@/components/projects/BrickBreaker';

const ProjectPageWrapper = styled.div`
  width: 100%;
`;

export default function ProjectPage({ params }) {
  const { slug } = params;

  const renderProject = () => {
    switch (slug) {
      case 'weather-dashboard':
        return <WeatherApp />;
      case 'kanban-tracker':
        return <KanbanApp />;
      case 'brick-breaker':
        return <BrickBreaker />;
      default:
        return <div>Project '{slug}' coming soon!</div>;
    }
  };

  return (
    <ProjectPageWrapper>
      {renderProject()}
    </ProjectPageWrapper>
  );
}