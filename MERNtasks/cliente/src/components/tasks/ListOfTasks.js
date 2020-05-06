import React, { Fragment } from "react";
import Task from "./Task";

const ListOfTasks = () => {
  const tasks = [
    { name: "Task1", done: true },
    { name: "Task2", done: false },
    { name: "Task3", done: false },
    { name: "Task4", done: true },
    { name: "Task5", done: false },
  ];

  return (
    <Fragment>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListOfTasks;
