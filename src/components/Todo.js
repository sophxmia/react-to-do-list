import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Todo(props) {
  const [editedTask, setEditedTask] = useState(props.task.task);
  function handleInputChange(event) {
    setEditedTask(event.target.value);
  }
  function handleEditSubmit() {
    props.editTodo(props.task.id, editedTask);
  }
  return (
    <div className="Todo">
      {props.task.isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={handleInputChange}
          onBlur={handleEditSubmit}
          autoFocus
        />
      ) : (
        <label
          className={`${props.task.completed ? "completed" : "incompleted"}`}
          onClick={() => props.toggleComplete(props.task.id)}
        >
          {props.task.task}
        </label>
      )}

      <div>
        <FontAwesomeIcon
          icon={faPen}
          style={{ color: "#6e63ff" }}
          onClick={() => props.editTodo(props.task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: "#6e63ff" }}
          onClick={() => props.deleteTodo(props.task.id)}
        />
      </div>
    </div>
  );
}
