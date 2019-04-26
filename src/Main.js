import React, { useState } from "react";
import "./App.css";

// ****** I can do this in diferent  way  ***************
//  const Main = () => {
// }
// ***********  OR **************************************
// function Main() {
// }

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-throught" : "" }}
      className="todo"
    >
      {todo.text}
      <span />
      <div>
        <button onClick={() => completeTodo(index)}>Complet</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add Todo..."
      />
    </form>
  );
}

const Main = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isComplet: false
    },
    {
      text: "Meet friend for lunch",
      isComplet: false
    },
    {
      text: "build really cool too app",
      isComplet: false
    }
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default Main;
