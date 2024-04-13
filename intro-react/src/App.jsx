import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["Learn react", "Be awesome"]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

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
