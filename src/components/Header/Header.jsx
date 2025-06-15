'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #1a1a2e;
  padding: 20px 5%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a2a4e;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #e0e0e0;
  font-size: 1.1rem;
  &:hover {
    color: #00d1cd;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link href="/">Chiar Abdi</Link>
      </Logo>
      <Nav>
        <NavLink href="/#about">About</NavLink>
        <NavLink href="/#projects">Projects</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;