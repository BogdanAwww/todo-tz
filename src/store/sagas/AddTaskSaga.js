import { select, takeEvery, put } from "redux-saga/effects"
import { ADD_TODO } from "../actions/actionTypes"
import { addTaskSuccess, showAlert } from "../actions/actions"

function* workerAddTask(action) {
    const { payload } = action
    const { taskList } = yield select()
    let isDublication = taskList.some((item) => item.text === payload.text)
    if (payload.text && !isDublication) {
        yield put(addTaskSuccess(action.payload));
    } else {
        yield put(showAlert(true))
    }
    
}

export function* subscribeAddTask() {
    yield takeEvery(ADD_TODO, workerAddTask);
}
