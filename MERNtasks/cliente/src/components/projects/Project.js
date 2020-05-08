import React, { useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
  const { actualProject } = useContext(ProjectContext);
  const { id, name } = project;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => actualProject(id)}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
