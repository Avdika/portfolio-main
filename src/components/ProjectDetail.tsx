import React, { useEffect, useState } from "react";
import { Project } from "../types/project";
import loadImages from "../utils/loadImages";
import {
  ProjectDetailContainer,
  Title,
  Description,
  Technologies,
  Tags,
  ImageGallery,
  Image,
  Links,
} from "../styles/ProjectDetailStyles";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (project.imageInfo) {
      const loadedImages = loadImages(
        project.imageInfo.folderPath,
        project.imageInfo.count
      );
      setImages(loadedImages);
    }
  }, [project]);

  return (
    <ProjectDetailContainer>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      {project.technologies && (
        <Technologies>
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </Technologies>
      )}
      <Tags>
        <strong>Tags:</strong> {project.tags.join(", ")}
      </Tags>
      <ImageGallery>
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
            />
          ))
        ) : (
          <p>No images found</p>
        )}
      </ImageGallery>
      {project.links && (
        <Links>
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </Links>
      )}
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
