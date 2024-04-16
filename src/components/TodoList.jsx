import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleToggleComplete, handleDelete }) {
  return (
    <div className="div-todo">
      <h2>Todos</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          handleToggleComplete={handleToggleComplete}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
