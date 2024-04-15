import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <div className="div-todo">
      <h2>Todos</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} task={todo.task} completed={todo.completed} />
      ))}
    </div>
  );
}
export default TodoList;
