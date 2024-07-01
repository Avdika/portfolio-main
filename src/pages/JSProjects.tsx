import React, { useState } from "react";
import projectsData from "../data/projectsJS.json";
import ProjectDetail from "../components/ProjectDetail";
import Sidebar from "../components/Sidebar";
import { ProjectsContainer, Content } from "../styles/ProjectsStyles";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  imageFolder?: string; // Make imageFolder optional
  links: { name: string; url: string }[];
}

const JSProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    projectsData[0]
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

export default JSProjects;
