import { all } from 'redux-saga/effects'
import { subscribeAddItem } from './AddItemSaga'

export default function* rootSaga() {
  yield all([
    subscribeAddItem(),
  ])
}
