import { 
    ADD_TODO, 
    ADD_TASK_SUCCESS, 
    SHOW_ALERT,
    TOGGLE_STATUS,
    DELETE_TASK,
    SHOW_MODAL,
    SELECT_TASK,
    EDIT_TASK
} from './actionTypes'

export const addToDo = (data) => {
    return { type: ADD_TODO, payload: data}
}

export const addTaskSuccess = (data) => {
    return { type: ADD_TASK_SUCCESS, payload: data}
}

export const showAlert = (status) => {
    return { type: SHOW_ALERT, payload: status }
}

export const toggleStatus = (id) => {
    return { type: TOGGLE_STATUS, payload: id }
}

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id}
}

export const showModal = (status) => {
    return { type: SHOW_MODAL, payload: status}
}

export const selectTask = (id) => {
    return { type: SELECT_TASK, payload: id }
}

export const editTask = (data) => {
    return { type: EDIT_TASK, payload: data }
}
