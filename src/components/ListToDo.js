import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { ItemToDo } from './ItemToDo'
import { deleteTask, selectTask, showAlert, showModal, toggleStatus } from '../store/actions/actions';

const ListToDo = () => {
    const store = useSelector(store => store, shallowEqual)
    const dispatch = useDispatch()
  
    useEffect(() => {
      if(store.showAlert){
        alert("Empty or duplicated string")
        dispatch(showAlert(false))
      }
    })
  
    const handleCheckbox = (id) => {
      dispatch(toggleStatus(id))
    }
  
    const handleDelete = (id) => {
      dispatch(deleteTask(id))
    }
  
    const handleEdit = (id) => {
      dispatch(selectTask(id))
      dispatch(showModal(true))
    }

    return (
        store.taskList.map((task) => (
            <ItemToDo 
                text={task.text} 
                id={task.id}
                completed={task.completed}
                handleCheckbox={handleCheckbox}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                key={task.id}
            />
        ))    
    )
}

export { ListToDo }
