import React, { useState } from "react";

function TodoItem({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        name="todo"
        value={label}
        checked={isChecked}
        onChange={handleOnChange}
      />
      {label}
    </div>
  );
}

export default TodoItem;
