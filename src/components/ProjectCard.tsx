import React from "react";
import { Project } from "../types/project";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardTags,
  CardLink,
} from "../styles/ProjectCardStyles";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <CardTags>
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </CardTags>
        <CardLink
          href={project.links[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.links[0].name}
        </CardLink>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
