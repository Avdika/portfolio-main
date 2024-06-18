import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  links: { name: string; url: string }[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div>
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={project.title} />
        ))}
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default ProjectCard;
