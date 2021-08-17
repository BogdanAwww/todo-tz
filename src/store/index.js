import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware),
);

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

sagaMiddleware.run(rootSaga);

export default store;
