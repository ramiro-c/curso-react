import {
  PROJECT_FORM,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true,
        form_error: false,
      };

    case VALIDATE_FORM:
      return {
        ...state,
        form_error: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null,
      };

    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload
        ),
      };

    default:
      return state;
  }
};