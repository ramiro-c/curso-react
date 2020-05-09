import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const ListOfTasks = () => {
  const { project, deleteProject } = useContext(projectContext);
  const { project_tasks } = useContext(taskContext);

  if (!project) return <h2>Select a project</h2>;

  const [actualProject] = project;

  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {project_tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          project_tasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button
        onClick={() => deleteProject(actualProject.id)}
        type="button"
        className="btn btn-eliminar"
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListOfTasks;
