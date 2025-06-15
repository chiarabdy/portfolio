'use client';
import React from 'react';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform-style: preserve-3d;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    transform: rotateY(-10deg) rotateX(5deg) scale(1.05);
  }
`;
    
const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  color: #333;
`;
    
const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin: 0 0 10px 0;
`;
    
const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;
    
const TagContainer = styled.div`
  padding-top: 10px;
  margin-bottom: 20px;
`;
    
const Tag = styled.span`
  display: inline-block;
  background-color: #e3f2fd;
  color: #0d47a1;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 5px 5px 0;
  font-size: 0.85rem;
  font-weight: 500;
`;
    
const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: auto;
`;
    
const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-decoration: none;
  color: #0079bf;
  font-weight: bold;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover { color: #00d1cd; }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #0079bf;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover { color: #00d1cd; }
`;
    
const ProjectCard = ({ project, onViewProject }) => {
  const { id, title, description, image, tags, repoUrl } = project;
  return (
    <Card>
      <CardImage src={image.src} alt={`${title} screenshot`} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <TagContainer>{tags.map((tag) => (<Tag key={tag}>{tag}</Tag>))}</TagContainer>
        <LinkContainer>
          <ActionButton onClick={() => onViewProject(id)}>
            View Project
          </ActionButton>
          <ExternalLink href={repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code
          </ExternalLink>
        </LinkContainer>
      </CardContent>
    </Card>
  );
};
    
export default ProjectCard;