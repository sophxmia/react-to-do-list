import React, { useState } from "react";

export default function TodoForm(props) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTodo(task);
    setTask("");
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <label>What needs to be done?</label>
      <div className="row my-2">
        <div className="col-sm-7">
          <input
            type="text"
            placeholder="Enter a task"
            autoFocus="on"
            value={task}
            className="form-control mb-3"
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-3 mb-1">
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
}
