import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  padding: 20px;
`;

export const TitleImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const DescriptionText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  span {
    background-color: #f1f1f1;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;
