import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(prevValue => {
      return !prevValue;
    });
  }

  return (
    <div className="list-item" onClick={handleClick}>
      <li style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}</li>
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
