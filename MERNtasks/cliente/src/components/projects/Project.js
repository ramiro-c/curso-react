import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
  const { actualProject } = useContext(projectContext);
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
