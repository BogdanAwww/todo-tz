import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../store/actions/actions';

const AddToDo = () => {
  const [task, setTask] = useState({
    text: '',
    completed: false,
    id: Date.now(),
  });
  const dispatch = useDispatch();

  const handleСlick = () => {
    dispatch(addToDo(task));
    setTask({ ...task, text: '', id: Date.now() });
  };

  const handleInput = (e) => {
    setTask({ ...task, text: e.target.value });
  };

  return (
    <div className="AddToDo-wrapper">
      <input onChange={handleInput} value={task.text} />
      <button onClick={handleСlick}>Add Task</button>
    </div>
  );
};

export { AddToDo };
