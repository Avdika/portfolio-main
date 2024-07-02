import styled from 'styled-components';

interface SidebarContainerProps {
  $isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  width: ${props => (props.$isOpen ? '250px' : '50px')};
  transition: width 0.3s;
  overflow: hidden;
  background-color: #1b3a79;
  color: white;
`;

export const ToggleButton = styled.button`
  width: 100%;
  background-color: #1b3a79;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProjectItem = styled.li`
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #3a79b1;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
`;
