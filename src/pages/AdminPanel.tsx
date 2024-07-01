// import React, { useState } from "react";
// import { Project } from "../types";
// // import projectsData from "../data/projectsJS.json";
// import ProjectForm from "../components/ProjectForm";
// // import fs from "fs"; // Node.js file system module

// const AdminPanel: React.FC = () => {
//   // const [projects, setProjects] = useState<Project[]>(
//   //   projectsData as Project[]
//   // );
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentProject, setCurrentProject] = useState<Project | null>(null);

//   const handleSave = (project: Project) => {
//     let updatedProjects;
//     if (isEditing) {
//       updatedProjects = projects.map((p) =>
//         p.id === project.id ? project : p
//       );
//     } else {
//       // Assign a new id when creating a new project
//       const newId =
//         projects.length > 0 ? projects[projects.length - 1].id + 1 : 1;
//       project.id = newId;
//       updatedProjects = [...projects, project];
//     }
//     setProjects(updatedProjects);
//     setIsEditing(false);
//     setCurrentProject(null);

//     // Save the updated projects to the JSON file
//     // fs.writeFileSync(
//     //   "../data/projects.json",
//     //   JSON.stringify(updatedProjects, null, 2)
//     // );
//   };

//   const handleEdit = (project: Project) => {
//     setIsEditing(true);
//     setCurrentProject(project);
//   };

//   const handleDelete = (id: number) => {
//     const updatedProjects = projects.filter((project) => project.id !== id);
//     setProjects(updatedProjects);

//     // Save the updated projects to the JSON file
//     // fs.writeFileSync(
//     //   "../data/projects.json",
//     //   JSON.stringify(updatedProjects, null, 2)
//     // );
//   };

//   return (
//     <div>
//       <h1>Admin Panel</h1>
//       <ProjectForm onSave={handleSave} project={currentProject} />
//       <div>
//         {projects.map((project) => (
//           <div key={project.id}>
//             <h2>{project.title}</h2>
//             <button onClick={() => handleEdit(project)}>Edit</button>
//             <button onClick={() => handleDelete(project.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
