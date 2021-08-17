function ItemToDo({
  text,
  id,
  completed,
  handleCheckbox,
  handleDelete,
  handleEdit,
}) {
  return (
    <div className="listItem">
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
