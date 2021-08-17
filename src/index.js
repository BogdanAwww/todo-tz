import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ToDoApp from './ToDoApp';
import Store from './store';

ReactDOM.render(
  <Provider store={Store}>
    <ToDoApp />
  </Provider>,
  document.getElementById('root'),
);
