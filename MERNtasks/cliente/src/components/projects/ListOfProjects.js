import React, { useContext, useEffect } from "react";
import Project from "./Project";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import projectContext from "../../context/projects/projectContext";

const ListOfProjects = () => {
  const { projects, getProjects } = useContext(projectContext);

  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return <p>No projects yet, add one!</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={300} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListOfProjects;
