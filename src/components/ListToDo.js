import { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { ItemToDo } from './ItemToDo';
import {
  deleteTask, selectTask, showAlert, showModal, toggleStatus,
} from '../store/actions/actions';

const ListToDo = () => {
  const taskList = useSelector((store) => store.taskList, shallowEqual);
  const showAlertStore = useSelector((store) => store.showAlert);

  const dispatch = useDispatch();

  useEffect(() => {
    if (showAlertStore) {
      alert('Empty or duplicated string');
      dispatch(showAlert(false));
    }
  });

  const handleCheckbox = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    dispatch(selectTask(id));
    dispatch(showModal(true));
  };

  return (
    <>
      { taskList.map((task) => (
        <ItemToDo
          text={task.text}
          id={task.id}
          completed={task.completed}
          handleCheckbox={handleCheckbox}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          key={task.id}
          deadline={task.deadline}
        />
      )) }
    </>

  );
};

export { ListToDo };
