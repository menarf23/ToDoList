import React from "react";

function ToDoItem(props) {

  return (
    <div className="list-item" onClick={() => props.handleClick(props.id)}>
      <li style={{textDecoration: props.isDone ? "line-through" : "none"}}>{props.text}</li>
      <button 
        onClick={() => {
        props.onDelete(props.id);
        }}
      >
        <span>Delete</span>
      </button>
    </div>
  );
}

export default ToDoItem;
