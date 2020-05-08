import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListOfTasks = () => {
  const { project, deleteProject } = useContext(projectContext);

  if (!project) return <h2>Select a project</h2>;

  const [actualProject] = project;

  const tasks = [
    { name: "Task1", done: true },
    { name: "Task2", done: false },
    { name: "Task3", done: false },
    { name: "Task4", done: true },
    { name: "Task5", done: false },
  ];

  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          tasks.map((task) => <Task task={task} />)
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
