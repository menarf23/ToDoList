import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);

  function addItem(title) {
    if (title.length !== 0)
    setItems(prevItems => {
      return [...prevItems, {id: crypto.randomUUID(), title, isDone: false}];
    });
  }

  function deleteItem(itemID) {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== itemID);
    });
  }
  
  function toggleTodo(itemID) {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === itemID) {
          item.isDone = !item.isDone
        }
        return item
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.title}
              onDelete={deleteItem}
              handleClick={toggleTodo}
              isDone={todoItem.isDone}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
