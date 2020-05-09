import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  const { setActualProject } = useContext(projectContext);
  const { getTasks } = useContext(taskContext);

  const { id, name } = project;

  const handleOnClick = (id) => {
    setActualProject(id);
    getTasks(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => handleOnClick(id)}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
