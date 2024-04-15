import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
const LSKEY = 1997;

function App() {
  const contentTodo = [
    { id: uuidv4(), task: "Learn react", completed: false },
    { id: uuidv4(), task: "Be awesome", completed: true },
  ];

  const [todos, setTodos] = useState(contentTodo);

  useEffect(() => {
    const storedTodos = JSON.parse(
      window.localStorage.getItem(LSKEY + ".todos")
    );
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    contentTodo.push({ id: uuidv4(), task: newTodo, completed: false });
  };

  useEffect(() => {
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
