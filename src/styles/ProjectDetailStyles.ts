import styled from 'styled-components';

export const ProjectDetailContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Technologies = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  strong {
    font-weight: bold;
  }
`;

export const Tags = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  strong {
    font-weight: bold;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Links = styled.div`
  a {
    display: block;
    margin-bottom: 5px;
    color: #1b3a79;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
