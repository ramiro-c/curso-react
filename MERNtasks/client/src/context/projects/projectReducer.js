import {
  PROJECT_FORM,
  ACTUAL_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_ERROR_PROJECT_FORM,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true,
        form_error: false,
      };

    case SET_ERROR_PROJECT_FORM:
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
        projects: [action.payload, ...state.projects],
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
