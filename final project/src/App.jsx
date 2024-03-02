import React, { useState } from 'react';
import AddTask from './components/Addtask';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, done: false }]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="add-task-container">
          <AddTask onAddTask={addTask}/>
        </div>
      <div className='task-list-container'>
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleDone={toggleDone}
      />
      </div>
    </>
  );
}

export default App;
