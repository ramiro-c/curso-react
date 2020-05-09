import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const TaskForm = () => {
  const { project } = useContext(projectContext);

  if (!project) return null;

  const [actualProject] = project;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            name="name"
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
    </div>
  );
};

export default TaskForm;