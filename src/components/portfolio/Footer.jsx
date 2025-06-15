'use client';
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #1a1a2e;
  color: #e0e0e0;
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid #2a2a4e;
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  color: #e0e0e0;
  font-size: 1.75rem;
  margin: 0 15px;
  transition: color 0.3s ease;
  &:hover {
    color: #00d1cd;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #a0a0a0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialLinks>
        <SocialIcon href="https://github.com/chiarabdy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/chiarabdi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
      </SocialLinks>
      <CopyrightText>
        © {new Date().getFullYear()} Chiar Abdi. All Rights Reserved.
      </CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;