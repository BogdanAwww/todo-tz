import {
  ADD_TODO,
  ADD_TASK_SUCCESS,
  SHOW_ALERT,
  TOGGLE_STATUS,
  DELETE_TASK,
  SHOW_MODAL,
  SELECT_TASK,
  EDIT_TASK,
} from './actionTypes';

export const addToDo = (data) => ({ type: ADD_TODO, payload: data });

export const addTaskSuccess = (data) => ({ type: ADD_TASK_SUCCESS, payload: data });

export const showAlert = (status) => ({ type: SHOW_ALERT, payload: status });

export const toggleStatus = (id) => ({ type: TOGGLE_STATUS, payload: id });

export const deleteTask = (id) => ({ type: DELETE_TASK, payload: id });

export const showModal = (status) => ({ type: SHOW_MODAL, payload: status });

export const selectTask = (id) => ({ type: SELECT_TASK, payload: id });

export const editTask = (data) => ({ type: EDIT_TASK, payload: data });
