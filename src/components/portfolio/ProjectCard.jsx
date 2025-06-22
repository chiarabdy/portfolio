'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Confetti from 'react-confetti';

const matrixChars = 'アァカサタナハマヤャラワガザダバパイキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01'.split('');

const drawMatrixChar = (ctx) => {
  const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
  ctx.font = '20px monospace';
  ctx.fillStyle = '#00d1cd'; 
  ctx.fillText(char, 0, 0);
};

const CardImage = styled.img`
  width: 100%;
  display: block;
`;
    
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 25px 0 rgba(135, 206, 235, 0.9);
  }
`;
    
const CardContent = styled.div`
  padding: 25px;
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
  margin-bottom: 20px;
`;
    
const TagContainer = styled.div`
  padding-top: 10px;
  margin-bottom: 25px;
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
    
const PrimaryButton = styled(Link)`
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
  const [isHovered, setIsHovered] = useState(false);
  const { id, title, description, image, tags, liveUrl, repoUrl } = project;
  
  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && 
        <Confetti 
          width={320} 
          height={500} 
          numberOfPieces={80}
          gravity={0.05}
          recycle={false}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}
          drawShape={drawMatrixChar}
          colors={['#00d1cd', '#aaffaa', '#ffffff', '#87ceeb']}
        />
      }
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