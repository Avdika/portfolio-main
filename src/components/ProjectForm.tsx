import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Project } from "../types";

interface ProjectFormProps {
  onSave: (project: Project) => void;
  project: Project | null;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSave, project }) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    tags: "",
    images: "",
    links: "",
  });

  useEffect(() => {
    if (project) {
      setFormState({
        title: project.title,
        description: project.description,
        tags: project.tags.join(", "),
        images: project.images.join(", "),
        links: project.links
          .map((link) => `${link.name}|${link.url}`)
          .join(", "),
      });
    }
  }, [project]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedProject: Project = {
      id: project ? project.id : 0, // Ensure id is always defined
      title: formState.title,
      description: formState.description,
      tags: formState.tags.split(",").map((tag) => tag.trim()),
      images: formState.images.split(",").map((image) => image.trim()),
      links: formState.links.split(",").map((link) => {
        const [name, url] = link.split("|");
        return { name: name.trim(), url: url.trim() };
      }),
    };
    onSave(updatedProject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Tags (comma-separated):
        <input
          type="text"
          name="tags"
          value={formState.tags}
          onChange={handleChange}
        />
      </label>
      <label>
        Images (comma-separated URLs):
        <input
          type="text"
          name="images"
          value={formState.images}
          onChange={handleChange}
        />
      </label>
      <label>
        Links (format: name|url, comma-separated):
        <input
          type="text"
          name="links"
          value={formState.links}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save Project</button>
    </form>
  );
};

export default ProjectForm;
