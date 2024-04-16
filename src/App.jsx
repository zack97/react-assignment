import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
const LSKEY = 1997;

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(
      window.localStorage.getItem(LSKEY + ".todos")
    );
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (newTodo) => {
    const updatedTodos = [
      ...todos,
      { id: uuidv4(), task: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(updatedTodos));
  };

  return (
    <section>
      <Header />
      <div className="main-div">
        <TodoForm onAddTodo={addTodo} />
        <div className="hr"></div>
        <TodoList
          todos={todos}
          handleToggleComplete={toggleComplete}
          handleDelete={deleteTodo}
        />
      </div>
    </section>
  );
}

export default App;
