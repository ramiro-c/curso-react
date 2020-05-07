import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { PROJECT_FORM } from "../../types";

const ProjectState = ({ children }) => {
  const initialState = {
    form: false,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({ type: PROJECT_FORM });
  };

  return (
    <projectContext.Provider value={{ form: state.form, showForm }}>
      {children}
    </projectContext.Provider>
  );
};

export default ProjectState;
