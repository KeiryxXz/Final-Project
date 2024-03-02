import React, { useState } from 'react';
import './AddTask.css';

function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      alert('It is empty')
      return
    };
    onAddTask(task);
    setTask('');
  };

  return (
    <div className='main'>
    <h2>Add a Task</h2>
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
    </div>
  );
}

export default AddTask;
