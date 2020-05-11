import React, { Fragment, useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import NewProjectForm from "./NewProjectForm";

const NewProject = () => {
  const { form, showForm } = useContext(projectContext);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        New Project
      </button>
      {form ? <NewProjectForm /> : null}
    </Fragment>
  );
};

export default NewProject;
