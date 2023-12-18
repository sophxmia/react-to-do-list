import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodo([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  }

  function toggleComplete(id) {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    const editedTodo = prompt("What do you want to improve?");
    if (editedTodo !== null) {
      setTodo(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, task: editedTodo, isEditing: !todo.isEditing }
            : todo
        )
      );
    }
  }

  return (
    <div className="TodoWrapper">
      <h1>You handy Todo app</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(function (todo, index) {
        return (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}
