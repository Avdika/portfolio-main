import React, { useState } from "react";
import {
  SidebarContainer,
  ToggleButton,
  ProjectList,
  ProjectItem,
  SearchInput,
} from "../styles/SidebarStyles";
import { Project } from "../types/project";

interface SidebarProps {
  projectsData: Project[];
  onSelectProject: (project: Project) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ projectsData, onSelectProject }) => {
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
    <SidebarContainer $isOpen={isOpen}>
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
              <ProjectItem
                key={project.id}
                onClick={() => onSelectProject(project)}
              >
                {project.title}
              </ProjectItem>
            ))}
          </ProjectList>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
