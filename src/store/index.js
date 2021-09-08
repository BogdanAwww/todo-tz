import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

sagaMiddleware.run(rootSaga);

export default store;
