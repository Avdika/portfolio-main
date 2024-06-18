import React, { useState } from "react";
import projectsData from "../data/projects.json";
import ProjectForm from "../components/ProjectForm";
import fs from "fs"; // Node.js file system module

const AdminPanel: React.FC = () => {
  const [projects, setProjects] = useState(projectsData);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleSave = (project) => {
    let updatedProjects;
    if (isEditing) {
      updatedProjects = projects.map((p) =>
        p.id === project.id ? project : p
      );
    } else {
      project.id = projects.length + 1;
      updatedProjects = [...projects, project];
    }
    setProjects(updatedProjects);
    setIsEditing(false);
    setCurrentProject(null);

    // Save the updated projects to the JSON file
    fs.writeFileSync(
      "../data/projects.json",
      JSON.stringify(updatedProjects, null, 2)
    );
  };

  const handleEdit = (project) => {
    setIsEditing(true);
    setCurrentProject(project);
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);

    // Save the updated projects to the JSON file
    fs.writeFileSync(
      "../data/projects.json",
      JSON.stringify(updatedProjects, null, 2)
    );
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ProjectForm onSave={handleSave} project={currentProject} />
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <button onClick={() => handleEdit(project)}>Edit</button>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
