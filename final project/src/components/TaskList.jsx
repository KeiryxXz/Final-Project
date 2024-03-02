import React from 'react';
import Tasks from './Tasks';
import './TaskList.css';

function TaskList({ tasks, onDeleteTask, onToggleDone }) {

  return (
  <div className='list'>
    <h2>Task List</h2>
    <div className="task-list">
      {tasks.map((task, index) => (
        <Tasks
          key={index}
          index={index}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleDone={onToggleDone}
        />
      ))}
    </div>
  </div>
  );
}

export default TaskList;
