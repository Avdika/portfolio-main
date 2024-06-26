import styled from 'styled-components';

export const ThemeSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  border: 2px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;
