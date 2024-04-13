import React from "react";

function TodoItem({ id, task, completed, onToggleCompleted }) {
  const handleChange = () => {
    onToggleCompleted(id);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <label>{task}</label>
    </div>
  );
}

export default TodoItem;
