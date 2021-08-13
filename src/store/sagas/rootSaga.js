import { all } from 'redux-saga/effects'
import { subscribeAddTask } from './AddTaskSaga'

export default function* rootSaga() {
  yield all([
    subscribeAddTask(),
  ])
}
