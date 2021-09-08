import Timer from './Timer';

function ItemToDo({
  text,
  id,
  completed,
  deadline,
  handleCheckbox,
  handleDelete,
  handleEdit,
}) {
  return (
    <div className="listItem">
      {deadline && (
      <Timer
        deadline={deadline}
        id={id}
        completed={completed}
      />
      )}
      <input
        type="checkbox"
        checked={completed}
        id={text}
        onChange={() => handleCheckbox(id)}
      />
      <label
        htmlFor={text}
        className={completed ? 'completedText' : ''}
      >
        {text}
      </label>
      <div>
        <button onClick={() => handleEdit(id)}>Ред.</button>
        <button onClick={() => handleDelete(id)}>Удалить</button>
      </div>
    </div>
  );
}

export { ItemToDo };
