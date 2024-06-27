import React from "react";
import Sidebar from "../components/Sidebar";
import projectsData from "../data/projectsCS.json";
import { ProjectsContainer, Content } from "../styles/ProjectsStyles";

const CSProjects: React.FC = () => {
  return (
    <ProjectsContainer>
      <Sidebar projectsData={projectsData} />
      <Content>
        <h1>C# Projects</h1>
        {/* Add project display content here */}
      </Content>
    </ProjectsContainer>
  );
};

export default CSProjects;
