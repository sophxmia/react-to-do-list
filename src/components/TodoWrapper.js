import React from "react";

export default function TodoWrapper() {
  return (
    <div className="TodoWrapper">
      <h1>You handy Todo app</h1>
      <form>
        <input type="text" placeholder="Enter a task"></input>
        <button>Add Todo</button>
      </form>
      <ul>
        <li>task 1</li>
        <li>task 2</li>
      </ul>
    </div>
  );
}
