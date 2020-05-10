import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  SET_ERROR_TASK_FORM,
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
} from "../../types";

const TaskState = ({ children }) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Task1", done: true, project_id: 1 },
      { id: 2, name: "Task1", done: true, project_id: 1 },
      { id: 3, name: "Task1", done: true, project_id: 1 },
      { id: 4, name: "Task2", done: false, project_id: 1 },
      { id: 5, name: "Task2", done: false, project_id: 1 },
      { id: 6, name: "Task4", done: true, project_id: 2 },
      { id: 7, name: "Task4", done: true, project_id: 2 },
      { id: 8, name: "Task4", done: true, project_id: 2 },
      { id: 9, name: "Task3", done: false, project_id: 2 },
      { id: 10, name: "Task3", done: false, project_id: 2 },
      { id: 11, name: "Task3", done: false, project_id: 2 },
      { id: 12, name: "Task5", done: false, project_id: 3 },
      { id: 13, name: "Task5", done: false, project_id: 3 },
      { id: 14, name: "Task5", done: false, project_id: 3 },
      { id: 15, name: "Task5", done: false, project_id: 3 },
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

  const deleteTask = (task_id) => {
    dispatch({
      type: DELETE_TASK,
      payload: task_id,
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
        deleteTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default TaskState;
