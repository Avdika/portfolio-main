import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectDetail from "../components/ProjectDetail";
import projectsData from "../data/projectsCS.json";
import { Project } from "../types/project";
import {
  ProjectsContainer,
  MainContent,
  SidebarContainer,
  Disclaimer,
} from "../styles/ProjectsStyles";

const CSProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectsContainer>
      <SidebarContainer>
        <Sidebar
          projectsData={projectsData as Project[]}
          onSelectProject={setSelectedProject}
        />
      </SidebarContainer>
      <MainContent>
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <Disclaimer>
            Please choose a project for more details or use the search bar to
            find a specific one.
          </Disclaimer>
        )}
      </MainContent>
    </ProjectsContainer>
  );
};

export default CSProjects;
