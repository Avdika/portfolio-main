import React from "react";
import Sidebar from "../components/Sidebar";
import { ProjectsContainer, Content } from "../styles/ProjectsStyles";

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <Sidebar />
      <Content>
        <h1>Projects</h1>
        {/* Add project display content here */}
      </Content>
    </ProjectsContainer>
  );
};

export default Projects;
