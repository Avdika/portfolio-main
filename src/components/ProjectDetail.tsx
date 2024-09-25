import React from "react";
import SliderContainer from "./SliderContainer";
import DescriptionContainer from "./DescriptionContainer";
import { ProjectDetailWrapper } from "../styles/ProjectDetailStyles";
import { Project } from "../types/project";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const titleImage = `${project.imageInfo.folderPath}image-0.png`;
  const images = Array.from(
    { length: project.imageInfo.count },
    (_, index) => `${project.imageInfo.folderPath}image-${index + 1}.png`
  );

  return (
    <ProjectDetailWrapper>
      <SliderContainer images={images} />
      <DescriptionContainer
        titleImage={titleImage}
        description={project.description}
        tags={project.tags}
      />
    </ProjectDetailWrapper>
  );
};

export default ProjectDetail;
