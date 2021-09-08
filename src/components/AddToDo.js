import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../store/actions/actions';

const AddToDo = () => {
  const [task, setTask] = useState({
    text: '',
    completed: false,
    deadline: null,
    id: Date.now(),
  });
  const date = useRef();
  const dispatch = useDispatch();

  const handleСlick = () => {
    if (task.deadline !== null && task.deadline <= +new Date()) {
      alert('Введите корректную дату');
      return;
    }
    dispatch(addToDo(task));
    setTask({ ...task, text: '', id: Date.now() });
  };

  const handleInput = (e) => {
    setTask({ ...task, text: e.target.value });
  };

  const handleDateTime = ({ target: { value } }) => {
    setTask({ ...task, deadline: +new Date(value) });
  };

  return (
    <div className="AddToDo-wrapper">
      <div className="inputGroup">
        <input
          onChange={handleInput}
          value={task.text}
          placeholder="Enter the task"
        />
        <input type="datetime-local" onChange={handleDateTime} ref={date} />
      </div>
      <button onClick={handleСlick}>Add Task</button>
    </div>
  );
};

export { AddToDo };
