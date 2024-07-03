import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5em;
  color: #333;
`;

export const CardDescription = styled.p`
  margin: 0 0 10px 0;
  color: #666;
`;

export const CardTags = styled.div`
  margin: 10px 0;
  span {
    background-color: #eee;
    color: #333;
    border-radius: 3px;
    padding: 5px;
    margin-right: 5px;
  }
`;

export const CardLink = styled.a`
  color: #1b3a79;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
