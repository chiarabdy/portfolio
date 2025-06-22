'use client';
import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

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
  align-items: center;
  gap: 20px;
  margin-top: auto;
`;
    
const PrimaryButton = styled.a`
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
`;

const IconLink = styled.a`
  color: #333;
  font-size: 1.75rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #007bff;
    transform: translateY(-2px);
  }
`;
    
const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, repoUrl } = project;
  return (
    <Card>
      <CardImage src={image.src} alt={`${title} screenshot`} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <TagContainer>{tags.map((tag) => (<Tag key={tag}>{tag}</Tag>))}</TagContainer>
        <LinkContainer>
          <PrimaryButton href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </PrimaryButton>
          <IconLink href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Source Code">
            <FaGithub />
          </IconLink>
        </LinkContainer>
      </CardContent>
    </Card>
  );
};
    
export default ProjectCard;