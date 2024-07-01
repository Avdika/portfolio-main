import React, { useState } from "react";
import projectsData from "../data/projectsCS.json";
import ProjectDetail from "../components/ProjectDetail";
import Sidebar from "../components/Sidebar";
import { ProjectsContainer, Content } from "../styles/ProjectsStyles";
import { Project } from "../types/project";

const CSProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    projectsData[0] as Project
  );

  return (
    <ProjectsContainer>
      <Sidebar
        projectsData={projectsData}
        onSelectProject={setSelectedProject}
      />
      <Content>
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Content>
    </ProjectsContainer>
  );
};

export default CSProjects;
