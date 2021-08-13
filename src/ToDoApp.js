import { useState, useEffect } from 'react'
import { shallowEqual } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { AddToDo } from './components/AddToDo'
import { ListToDo } from './components/ListToDo'
import Modal from './components/Modal'
import { editTask, showModal } from './store/actions/actions';

function ToDoApp() {
  const store = useSelector((store) => store, shallowEqual)
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  useEffect(() => {
    setTask(store.selectedTask.text)
  }, [store.selectedTask])

  const handleModal = () => {
    dispatch(showModal(false))
  }
  const handleEdit = () => {
    dispatch(editTask({ 
      id: store.selectedTask.id,
      text: task
    }))
  }

  const handleInput = (e) => {
    setTask(e.target.value)
  }
  return (
    <>
      <AddToDo />
      <ListToDo />
      <Modal 
        handleModal={handleModal} 
        showModal={store.showModal}
      >
            <input onChange={handleInput} value={task}/>
            <button onClick={handleEdit}>Редактировать</button>
      </Modal>
    </>
  );
}

export default ToDoApp;
