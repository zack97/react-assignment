import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 for generating unique IDs

const LSKEY = 1997; // Define a key for local storage

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Load todos from local storage on initial render
    const storedTodos = JSON.parse(
      window.localStorage.getItem(LSKEY + ".todos")
    );
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
  };

  useEffect(() => {
    // Update local storage when todos change
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section>
      <Header />
      <div className="main-div">
        <TodoForm onAddTodo={addTodo} />
        <div className="hr"></div>
        <TodoList todos={todos} />
      </div>
    </section>
  );
}

export default App;
