import React, { Fragment, useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";
import NewProjectForm from "./NewProjectForm";

const NewProject = () => {
  const { form, showForm } = useContext(ProjectContext);
  const handleOnClick = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={handleOnClick}
      >
        New Project
      </button>
      {form ? <NewProjectForm /> : null}
    </Fragment>
  );
};

export default NewProject;
