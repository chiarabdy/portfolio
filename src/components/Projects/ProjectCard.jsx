'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'; 

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0079bf;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #00d1cd;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #0079bf;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #00d1cd;
  }
`;

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, repoUrl } = project;
  return (
    <Card>
      <CardImage src={image.src} alt={`${title} screenshot`} />
      <CardContent>
        <LinkContainer>
          <StyledLink href={liveUrl}>
            Live Demo
          </StyledLink>
          <ExternalLink href={repoUrl} target="_blank" rel="noopener noreferrer">
            Source Code
          </ExternalLink>
        </LinkContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;