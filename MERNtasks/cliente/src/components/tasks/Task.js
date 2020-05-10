import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  const { deleteTask, getTasks } = useContext(taskContext);
  const { project } = useContext(projectContext);

  const { name, done } = task;
  const [actual_project] = project;

  const handleOnClick = (task_id, project_id) => {
    deleteTask(task_id);
    getTasks(project_id);
  };

  return (
    <li className="tarea sombra">
      <p>{name}</p>
      <div className="estado">
        {done ? (
          <button type="button" className="completo">
            Done
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleOnClick(task.id, actual_project.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
