import {
  GET_TASKS,
  ADD_TASK,
  SET_ERROR_TASK_FORM,
  DELETE_TASK,
  CHANGE_DONE_ATTRIBUTE,
  ACTUAL_TASK,
  UPDATE_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ERROR_TASK_FORM:
      return {
        ...state,
        form_error: true,
      };

    case ACTUAL_TASK:
      return {
        ...state,
        actual_task: action.payload,
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

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        actual_task: null,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case CHANGE_DONE_ATTRIBUTE:
      return {
        ...state,
        task: state.project_tasks.forEach((task) => {
          if (task.id === action.payload) {
            task.done = !task.done;
          }
        }),
      };

    default:
      return state;
  }
};
