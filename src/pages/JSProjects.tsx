import React, { useState } from "react";
import projectsData from "../data/projectsJS.json";
import ProjectDetail from "../components/ProjectDetail";
import Sidebar from "../components/Sidebar";
import { ProjectsContainer, Content } from "../styles/ProjectsStyles";
import { Project } from "../types/project";

const JSProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectsContainer>
      <Sidebar
        projectsData={projectsData}
        onSelectProject={setSelectedProject}
      />
      <Content>
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>
              Please choose a project for more details or use the search bar to
              find a specific one.
            </h2>
          </div>
        )}
      </Content>
    </ProjectsContainer>
  );
};

export default JSProjects;
