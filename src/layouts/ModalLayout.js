import { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Modal from '../components/Modal'
import { showModal, editTask } from '../store/actions/actions'

const ModalLayout = ({ children }) => {
  const selectedTask = useSelector((store) => store.selectedTask, shallowEqual)
  const showModalStore = useSelector((store) => store.showModal)
  const dispatch = useDispatch()
  const [task, setTask] = useState('')

  useEffect(() => {
    setTask(selectedTask.text)
  }, [selectedTask])

  const handleModal = () => {
    dispatch(showModal(false))
  }
  const handleEdit = () => {
    dispatch(editTask({ 
      id: selectedTask.id,
      text: task
    }))
    dispatch(showModal(false))
  }

  const handleInput = (e) => {
    setTask(e.target.value)
  }
    return (
        <>
        {children}
        <Modal 
        handleModal={handleModal} 
        showModal={showModalStore}
        >
            <input onChange={handleInput} value={task}/>
            <button onClick={handleEdit}>Редактировать</button>
        </Modal>
        </>
    )
}

export { ModalLayout }
