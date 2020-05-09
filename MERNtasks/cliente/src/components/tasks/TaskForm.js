import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const { project } = useContext(projectContext);
  const { form_error, getTasks, addTask, setFormError } = useContext(
    taskContext
  );

  const [task, setTask] = useState({ name: "" });

  if (!project) return null;

  const [actual_project] = project;
  const { name } = task;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    task.project_id = actual_project.id;
    task.done = false;

    // validate form
    if (name.trim() === "") {
      setFormError();
      return;
    }

    // add task and show all of them
    addTask(task);
    getTasks(actual_project.id);

    // reset form
    setTask({
      name: "",
    });
  };

  const handleOnChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleOnSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            name="name"
            value={name}
            onChange={handleOnChange}
            placeholder="Task name..."
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            placeholder="Add Task"
          />
        </div>
      </form>
      {form_error && <p className="mensaje error">The task can't be empty</p>}
    </div>
  );
};

export default TaskForm;
