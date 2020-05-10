import {
  GET_TASKS,
  ADD_TASK,
  SET_ERROR_TASK_FORM,
  DELETE_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ERROR_TASK_FORM:
      return {
        ...state,
        form_error: true,
      };

    case GET_TASKS:
      return {
        ...state,
        project_tasks: state.tasks.filter(
          (task) => task.project_id === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        form_error: false,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};
