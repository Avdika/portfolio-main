import React, { useState } from "react";
import {
  SidebarContainer,
  ToggleButton,
  ProjectList,
  ProjectItem,
  SearchInput,
} from "../styles/SidebarStyles";

interface SidebarProps {
  projectsData: {
    id: number;
    title: string;
    tags: string[];
    description: string;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ projectsData }) => {
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
