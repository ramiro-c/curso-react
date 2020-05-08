import React, { useReducer } from "react";
import uuid from "uuid/dist/v4";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
} from "../../types";

const ProjectState = ({ children }) => {
  const projects = [
    { id: 1, name: "Project1" },
    { id: 2, name: "Project2" },
    { id: 3, name: "Project3" },
  ];

  const initialState = {
    project: null,
    projects: [],
    form: false,
    form_error: false,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({ type: PROJECT_FORM });
  };

  const showFormError = () => {
    dispatch({ type: VALIDATE_FORM });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuid();
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const actualProject = (project_id) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: project_id,
    });
  };

  return (
    <projectContext.Provider
      value={{
        project: state.project,
        projects: state.projects,
        form: state.form,
        form_error: state.form_error,
        showForm,
        showFormError,
        getProjects,
        addProject,
        actualProject,
      }}
    >
      {children}
    </projectContext.Provider>
  );
};

export default ProjectState;
