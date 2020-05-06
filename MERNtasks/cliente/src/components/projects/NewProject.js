import React, { Fragment, useState } from "react";

const NewProject = () => {
  const [project, setProject] = useState({
    name: "",
  });
  const { name } = project;

  const onChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>
      <form onSubmit={onSubmit} className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          id="name"
          name="name"
          value={name}
          placeholder="Project Name"
          onChange={onChange}
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Add Project"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
