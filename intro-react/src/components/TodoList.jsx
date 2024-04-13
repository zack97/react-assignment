import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <div className="div-todo">
      <h2>Todos</h2>
      {todos.map((todo) => (
        <TodoItem label={todo} />
      ))}
    </div>
  );
}

export default TodoList;
