'use client';
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`padding: 80px 20px; background-color: #1a1a2e; text-align: center; color: #e0e0e0;`;
const SectionTitle = styled.h2`font-size: 2.5rem; color: #ffffff; margin-bottom: 20px;`;
const ContactText = styled.p`font-size: 1.2rem; max-width: 600px; margin: 0 auto 40px auto; line-height: 1.6;`;
const EmailButton = styled.a`display: inline-block; background-color: transparent; color: #00d1cd; border: 2px solid #00d1cd; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 1.1rem; transition: all 0.3s ease; margin-bottom: 40px; &:hover {background-color: #00d1cd; color: #1a1a2e;}`;
const SocialLinks = styled.div`display: flex; justify-content: center; gap: 30px;`;
const SocialIcon = styled.a`color: #e0e0e0; font-size: 2rem; transition: color 0.3s ease, transform 0.3s ease; &:hover {color: #00d1cd; transform: translateY(-3px);}`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactText>My inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!</ContactText>
      <EmailButton href="mailto:chiar.abdi@powercoders.org">Say Hello</EmailButton>
      <SocialLinks>
        <SocialIcon href="https://github.com/chiarabdy" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/chiarabdi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;