import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import rootReducer from './reducers'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store