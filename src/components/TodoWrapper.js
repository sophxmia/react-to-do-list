import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodo] = useState([]);

  function addTodo(todo) {
    setTodo([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  }
  return (
    <div className="TodoWrapper">
      <h1>You handy Todo app</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        <li>task 1</li>
        <li>task 2</li>
      </ul>
    </div>
  );
}
