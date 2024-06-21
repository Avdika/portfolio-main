import styled from 'styled-components';

export const NavbarContainer = styled.nav<{ theme: any }>`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;
