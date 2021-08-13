import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './ToDoApp';
import { Provider } from 'react-redux';
import Store from './store';

ReactDOM.render(
    <Provider store={Store}> 
      <ToDoApp />
    </Provider>,
  document.getElementById('root')
);
