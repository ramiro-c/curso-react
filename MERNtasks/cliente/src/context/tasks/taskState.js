import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import { SET_ERROR_TASK_FORM, GET_TASKS, ADD_TASK } from "../../types";

const TaskState = ({ children }) => {
  const initialState = {
    tasks: [
      { name: "Task1", done: true, project_id: 1 },
      { name: "Task1", done: true, project_id: 1 },
      { name: "Task1", done: true, project_id: 1 },
      { name: "Task2", done: false, project_id: 1 },
      { name: "Task2", done: false, project_id: 1 },
      { name: "Task4", done: true, project_id: 2 },
      { name: "Task4", done: true, project_id: 2 },
      { name: "Task4", done: true, project_id: 2 },
      { name: "Task3", done: false, project_id: 2 },
      { name: "Task3", done: false, project_id: 2 },
      { name: "Task3", done: false, project_id: 2 },
      { name: "Task5", done: false, project_id: 3 },
      { name: "Task5", done: false, project_id: 3 },
      { name: "Task5", done: false, project_id: 3 },
      { name: "Task5", done: false, project_id: 3 },
    ],
    project_tasks: null,
    form_error: false,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const setFormError = () => {
    dispatch({
      type: SET_ERROR_TASK_FORM,
    });
  };

  const getTasks = (project_id) => {
    dispatch({
      type: GET_TASKS,
      payload: project_id,
    });
  };

  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        project_tasks: state.project_tasks,
        form_error: state.form_error,
        setFormError,
        getTasks,
        addTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default TaskState;
