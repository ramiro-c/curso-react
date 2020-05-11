import React, { useReducer } from "react";
import uuid from "uuid/dist/v4";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  SET_ERROR_TASK_FORM,
  ACTUAL_TASK,
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CHANGE_DONE_ATTRIBUTE,
  UPDATE_TASK,
} from "../../types";

const TaskState = ({ children }) => {
  const initialState = {
    actual_task: null,
    tasks: [
      { id: 1, name: "Task1", done: true, project_id: 1 },
      { id: 2, name: "Task3", done: false, project_id: 2 },
      { id: 3, name: "Task3", done: false, project_id: 2 },
      { id: 4, name: "Task3", done: false, project_id: 2 },
      { id: 5, name: "Task5", done: false, project_id: 3 },
      { id: 6, name: "Task5", done: false, project_id: 3 },
      { id: 7, name: "Task5", done: false, project_id: 3 },
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

  const setActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    });
  };

  const getTasks = (project_id) => {
    dispatch({
      type: GET_TASKS,
      payload: project_id,
    });
  };

  const addTask = (task) => {
    task.id = uuid();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  const deleteTask = (task_id) => {
    dispatch({
      type: DELETE_TASK,
      payload: task_id,
    });
  };

  const changeDoneAttribute = (task_id) => {
    dispatch({
      type: CHANGE_DONE_ATTRIBUTE,
      payload: task_id,
    });
  };

  return (
    <taskContext.Provider
      value={{
        actual_task: state.actual_task,
        tasks: state.tasks,
        project_tasks: state.project_tasks,
        form_error: state.form_error,
        setFormError,
        setActualTask,
        getTasks,
        addTask,
        updateTask,
        deleteTask,
        changeDoneAttribute,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default TaskState;
