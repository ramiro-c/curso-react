import React, { useState, useContext, Fragment } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProjectForm = () => {
  const { form_error, showFormError, addProject } = useContext(projectContext);

  const [project, setProject] = useState({
    name: "",
  });
  const { name } = project;

  const handleOnChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      showFormError();
      return;
    }
    addProject(project);
  };

  return (
    <Fragment>
      <form onSubmit={handleOnSubmit} className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          id="name"
          name="name"
          value={name}
          placeholder="Project Name"
          onChange={handleOnChange}
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Add Project"
        />
      </form>
      {form_error && (
        <p className="mensaje error">Project name is obligatory</p>
      )}
    </Fragment>
  );
};

export default NewProjectForm;
