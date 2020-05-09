import { GET_TASKS, ADD_TASK, SET_ERROR_TASK_FORM } from "../../types";

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
        tasks: [...state.tasks, action.payload],
        form_error: false,
      };

    default:
      return state;
  }
};
