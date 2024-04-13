import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim() !== "") {
      onAddTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <div className="div-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
