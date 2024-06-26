import styled from 'styled-components';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '250px' : '50px')};
  transition: width 0.3s;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  overflow: hidden;
`;

export const ToggleButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
  padding: 10px;
  text-align: left;
`;

export const ProjectList = styled.div`
  padding: 10px;
`;

export const ProjectItem = styled.div`
  padding: 5px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SearchInput = styled.input`
  width: calc(100% - 20px);
  padding: 5px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.text};
`;
