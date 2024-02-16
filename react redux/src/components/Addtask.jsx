import React, { useState } from 'react';
import "./Addtask.css";

const Addtask = () => {
  const [newItem, setNewItem] = useState(""); // State for managing the new task input
  const [items, setItems] = useState([]); // State for managing the list of tasks
  const [editedItem, setEditedItem] = useState(null); // State for managing the index of edited task

  const handleSubmit = () => {
    // Check if newItem is empty
    if (!newItem) { 
      alert('Nothing to confirm.');
      return;
    }

    const newTask = { text: newItem, checked: false }; // Create a new task object
    
    // If editing an existing task
    if (editedItem !== null) { 
      const updatedItems = [...items];
      updatedItems[editedItem] = newTask;
      setItems(updatedItems);
      setEditedItem(null);
    } else {
      setItems(prevItems => [...prevItems, newTask]); 
    }

    setNewItem("");
  }

  const handleEdit = (index) => {
    setNewItem(items[index].text); // Set the newItem state to the text of the task being edited
    setEditedItem(index); // Set the editedItem state to the index of the task being edited
  }

  const handleDone = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], checked: !updatedItems[index].checked }; // Toggle the checked state of the task
    setItems(updatedItems); // Update the tasks array with the modified task
  }  

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={newItem}
          onChange={(e) => { setNewItem(e.target.value) }}
          className="task-input"
        />
        <button onClick={handleSubmit} className="task-btn">
          {editedItem !== null ? 'Save' : 'Confirm'}
        </button>
      </div>

      <div>
        <ul className="task-list">
          {items.map((task, index) => {
            return (
              <li key={index} className="task-item">
                <input
                  type="checkbox"
                  checked={task.checked || false}
                  onChange={() => handleDone(index)}
                  className="task-checkbox"
                />
                <span style={{ marginRight: "10px", textDecoration: task.checked ? "line-through" : "none", color: "black" }} className="task-text">
                  {task.text}
                </span>
                <button onClick={() => handleEdit(index)} className="task-edit-btn">Edit</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Addtask;