import React, { useState } from "react";
import TodoForm from "./TodoForm";

export default function TodoWrapper() {
  const [todo, setTodo] = useState("");
  return (
    <div className="TodoWrapper">
      <h1>You handy Todo app</h1>
      <TodoForm />
      <ul>
        <li>task 1</li>
        <li>task 2</li>
      </ul>
    </div>
  );
}
