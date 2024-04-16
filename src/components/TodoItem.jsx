import React from "react";

function TodoItem({ id, task, completed, handleToggleComplete, handleDelete }) {
  const handleChange = () => {
    handleToggleComplete(id);
  };

  const handleDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <div className={completed ? "todo-item completed" : "todo-item"}>
      <div>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <label>{task}</label>
      </div>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
