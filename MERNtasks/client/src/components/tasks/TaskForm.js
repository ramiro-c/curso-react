import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const { project } = useContext(projectContext);
  const {
    form_error,
    actual_task,
    getTasks,
    addTask,
    updateTask,
    setFormError,
  } = useContext(taskContext);

  const [task, setTask] = useState({ name: "" });

  useEffect(() => {
    if (actual_task !== null) {
      setTask(actual_task);
    } else {
      setTask({ name: "" });
    }
  }, [actual_task]);

  if (!project) return null;

  const [actual_project] = project;
  const { name } = task;

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // validate form
    if (name.trim() === "") {
      setFormError();
      return;
    }

    if (actual_task === null) {
      task.project_id = actual_project.id;
      task.done = false;
      // add task
      addTask(task);
    } else {
      updateTask(task);
    }
    // show tasks
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
            value={actual_task ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>
      {form_error && <p className="mensaje error">The task can't be empty</p>}
    </div>
  );
};

export default TaskForm;
