import { select, takeEvery, put } from "redux-saga/effects"
import { ADD_TODO } from "../actions/actionTypes"
import { addToDoSuccess, showAlert } from "../actions/actions"

function* workerAddItem(action) {
    const { payload } = action
    const { taskList } = yield select()
    let isDublication = taskList.some((item) => item.text === payload.text)
    if (payload.text && !isDublication) {
        yield put(addToDoSuccess(action.payload));
    } else {
        yield put(showAlert(true))
    }
    
}

export function* subscribeAddItem() {
    yield takeEvery(ADD_TODO, workerAddItem);
}
