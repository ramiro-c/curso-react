import React, { useContext, useEffect } from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/projectContext";

const ListOfProjects = () => {
  const { projects, getProjects } = useContext(ProjectContext);

  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return <p>No projects yet, add one!</p>;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListOfProjects;
