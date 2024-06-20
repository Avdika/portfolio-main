import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1b3a79; // Default to blue theme background
`;

export const NavTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin: 0 1rem;
`;

export const NavLink = styled.a`
  font-size: 1.2rem;
  color: white;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
