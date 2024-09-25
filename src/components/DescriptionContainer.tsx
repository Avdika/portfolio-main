import React from "react";
import {
  DescriptionWrapper,
  TitleImage,
  DescriptionText,
  TagsWrapper,
} from "../styles/DescriptionStyles";

interface DescriptionContainerProps {
  titleImage: string;
  description: string;
  tags: string[];
}

const DescriptionContainer: React.FC<DescriptionContainerProps> = ({
  titleImage,
  description,
  tags,
}) => {
  return (
    <DescriptionWrapper>
      <TitleImage src={titleImage} alt="Title Image" />
      <DescriptionText>{description}</DescriptionText>
      <TagsWrapper>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </TagsWrapper>
    </DescriptionWrapper>
  );
};

export default DescriptionContainer;
