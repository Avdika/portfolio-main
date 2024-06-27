import React from "react";
import Sidebar from "../components/Sidebar";
import projectsData from "../data/projectsJS.json";
import { ProjectsContainer, Content } from "../styles/ProjectsStyles";

const JSProjects: React.FC = () => {
  return (
    <ProjectsContainer>
      <Sidebar projectsData={projectsData} />
      <Content>
        <h1>JavaScript Projects</h1>
        {/* Add project display content here */}
      </Content>
    </ProjectsContainer>
  );
};

export default JSProjects;
