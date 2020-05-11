import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  const {
    setActualTask,
    deleteTask,
    getTasks,
    changeDoneAttribute,
  } = useContext(taskContext);
  const { project } = useContext(projectContext);

  const { name, done } = task;
  const [actual_project] = project;

  const handleOnClickEditButton = (task) => {
    setActualTask(task);
  };

  const handleOnClickDeleteButton = (task_id, project_id) => {
    deleteTask(task_id);
    getTasks(project_id);
  };

  return (
    <li className="tarea sombra">
      <p>{name}</p>
      <div className="estado">
        {done ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeDoneAttribute(task.id)}
          >
            Done
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeDoneAttribute(task.id)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => handleOnClickEditButton(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleOnClickDeleteButton(task.id, actual_project.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
