import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json"; // Ensure this path is correct
import { Project } from "../types"; // Import the Project type

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter((project: Project) =>
    project.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h1>My Projects</h1>
      <input
        type="text"
        placeholder="Search by tags"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredProjects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
