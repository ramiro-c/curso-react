import React from "react";
import Project from "./Project";

const ListOfProjects = () => {
  const projects = [
    { name: "Project1" },
    { name: "Project2" },
    { name: "Project3" },
  ];
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ListOfProjects;
