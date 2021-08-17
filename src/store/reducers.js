import {
  ADD_TASK_SUCCESS,
  SHOW_ALERT,
  TOGGLE_STATUS,
  DELETE_TASK,
  SHOW_MODAL,
  SELECT_TASK,
  EDIT_TASK,
} from './actions/actionTypes';

const initialState = {
  taskList: [],
  selectedTask: {},
  showAlert: false,
  showModal: false,
};

const persistState = localStorage.getItem('store')
  ? JSON.parse(localStorage.getItem('store'))
  : initialState;

const reducer = (state = persistState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK_SUCCESS: {
      return {
        ...state,
        taskList: [...state.taskList, payload],
      };
    }
    case SHOW_ALERT: {
      return {
        ...state,
        showAlert: payload,
      };
    }
    case TOGGLE_STATUS: {
      return {
        ...state,
        taskList: state.taskList.map((item) => {
          if (item.id === payload) {
            return { ...item, completed: !item.completed };
          }
          return { ...item };
        }),
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        taskList: state.taskList.filter((item) => (
          item.id !== payload
        )),
      };
    }
    case SHOW_MODAL: {
      return {
        ...state,
        showModal: payload,
      };
    }
    case SELECT_TASK: {
      const selectedTask = state.taskList.find((task) => task.id === payload);
      return {
        ...state,
        selectedTask: { ...selectedTask },
      };
    }
    case EDIT_TASK: {
      return {
        ...state,
        taskList: state.taskList.map((task) => {
          if (task.id === payload.id) return { ...task, text: payload.text };
          return { ...task };
        }),
      };
    }
    default: return state;
  }
};

export default reducer;
