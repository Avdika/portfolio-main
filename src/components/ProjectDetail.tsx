import React from "react";
import loadImages from "../utils/loadImages";
import { Project } from "../types/project";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const images = project.imageFolder ? loadImages(project.imageFolder) : [];

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </p>
      <p>
        <strong>Tags:</strong> {project.tags.join(", ")}
      </p>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            style={{ width: "100%", height: "auto", marginBottom: "10px" }}
          />
        ))}
      </div>
      <div>
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginBottom: "5px" }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
