import React, { useState } from "react";
import projectsData from "../data/projects.json";
import {
  SidebarContainer,
  ToggleButton,
  ProjectList,
  ProjectItem,
  SearchInput,
} from "../styles/SidebarStyles";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<<" : ">>"}
      </ToggleButton>
      {isOpen && (
        <>
          <SearchInput
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ProjectList>
            {filteredProjects.map((project) => (
              <ProjectItem key={project.id}>{project.title}</ProjectItem>
            ))}
          </ProjectList>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
