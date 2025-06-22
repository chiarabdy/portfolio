'use client';
import React from 'react';
import WeatherApp from '@/components/Projects/WeatherApp';
import KanbanApp from '@/components/Projects/KanbanApp';
import BrickBreaker from '@/components/Projects/BrickBreaker';

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
    <div>
      {renderProject()}
    </div>
  );
}