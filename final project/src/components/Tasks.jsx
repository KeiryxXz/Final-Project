import React from 'react';
import './Tasks.css';

function Tasks({ task, index, onDeleteTask, onToggleDone }) {
  const handleDelete = () => {
    onDeleteTask(index);
  };

  const handleCheckDone = () => {
    onToggleDone(index);
  };

  return (
    <div className='task-container'>
    <div className="task">
      <span className="task-text" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <img src="/src/assets/check.png" className="task-check-button"onClick={handleCheckDone}/>
      <img src='/src/assets/close.png' className="task-delete-button" onClick={handleDelete}></img>
    </div>
    </div>
  );
}

export default Tasks;
