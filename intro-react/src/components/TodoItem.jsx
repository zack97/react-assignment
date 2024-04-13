import React, { useState } from "react";

function TodoItem({ id, task, completed }) {
  const [isChecked, setIsChecked] = useState(completed);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <label>{task}</label>
    </div>
  );
}

export default TodoItem;
