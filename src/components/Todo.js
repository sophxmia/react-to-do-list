import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Todo(props) {
  return (
    <div className="Todo">
      <p
        className={`${props.task.completed ? "completed" : "incompleted"}`}
        onClick={() => props.toggleComplete(props.task.id)}
      >
        {props.task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPen} style={{ color: "#6e63ff" }} />
        <FontAwesomeIcon
          icon={faTrash}
          style={{ color: "#6e63ff" }}
          onClick={() => props.deleteTodo(props.task.id)}
        />
      </div>
    </div>
  );
}
