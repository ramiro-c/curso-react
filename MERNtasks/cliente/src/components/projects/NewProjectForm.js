import React, { useState } from "react";

const NewProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
  });
  const { name } = project;

  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
  );
};

export default NewProjectForm;
