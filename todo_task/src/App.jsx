import React, { useState } from 'react';
import './App.scss'

function App() {
 const [tasks, setTasks] = useState([]);
 const [task, setTask] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
 };

 const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
 };

 return (
    <div className="container">
      <h1>You have {tasks.length} task{tasks.length !== 1 ? 's' : ''} to do</h1>
      <form onSubmit={handleSubmit}>
        <div className="task-container">
        <input
          type="text"
          placeholder="Enter item"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">Submit</button>
      </div>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-button" onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
      </div>
 );
}

export default App;