import React, { Fragment, useContext } from "react";
import Task from "./Task";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const ListOfTasks = () => {
  const { project, deleteProject } = useContext(projectContext);
  const { project_tasks } = useContext(taskContext);

  if (!project) return <h2>Select a project</h2>;

  const [actual_project] = project;

  return (
    <Fragment>
      <h2>Project: {actual_project.name}</h2>
      <ul className="listado-tareas">
        {project_tasks.length === 0 ? (
          <li className="tarea">
            <p>No tasks yet</p>
          </li>
        ) : (
          <TransitionGroup>
            {project_tasks.map((task) => (
              <CSSTransition key={task.id} timeout={300} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        onClick={() => deleteProject(actual_project.id)}
        type="button"
        className="btn btn-eliminar"
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListOfTasks;
