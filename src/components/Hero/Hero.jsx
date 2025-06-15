'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 81px); 
  text-align: center;
  padding: 0 20px;
  background-color: #1a1a2e;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  margin: 0;
  color: #ffffff;
  animation: ${fadeIn} 1s ease-out;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: clamp(1.2rem, 4vw, 1.75rem);
  margin: 10px 0;
  color: #00d1cd;
  font-weight: 400;
  animation: ${fadeIn} 1s ease-out 0.5s;
  animation-fill-mode: backwards;
`;

const Introduction = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  max-width: 600px;
  margin: 20px 0 30px 0;
  line-height: 1.6;
  color: #e0e0e0;
  animation: ${fadeIn} 1s ease-out 1s;
  animation-fill-mode: backwards;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  animation: ${fadeIn} 1s ease-out 1.5s;
  animation-fill-mode: backwards;
`;

const StyledButton = styled.a`
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: #00d1cd;
    color: #1a1a2e;
  }
  
  &.secondary {
    background-color: transparent;
    color: #00d1cd;
    border: 2px solid #00d1cd;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Name>CHIAR ABDI</Name>
      <Title>Software Developer</Title>
      <Introduction>
        A passionate developer with hands-on experience building robust applications and Software Development Kits at companies like Adobe. I transform complex problems into clean, efficient, and user-friendly digital experiences.
      </Introduction>
      <ButtonContainer>
        <StyledButton href="#projects" className="primary">View My Work</StyledButton>
        <StyledButton href="#contact" className="secondary">Get In Touch</StyledButton>
      </ButtonContainer>
    </HeroSection>
  );
};

export default Hero;