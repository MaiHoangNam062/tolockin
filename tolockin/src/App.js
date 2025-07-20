import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isCompleteScreeen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}

      <h1>ToLockIn</h1>

      {/* To-do input items */}
      <div className='todo-wrapper'>
        
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" placeholder="Task's title" />
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" placeholder="Task's description" />
          </div>

          <div className='todo-input-item'>
            <label>Priority</label>
              <select>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
          </div>

          <div className='todo-input-item'>
            <button type='button' className='primaryBtn'>Add task</button>
          </div>
        </div>

        <div className='todo-output'>
          <div className='btn-area'>
            <button className={`secondaryBtn ${isCompleteScreeen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
            <button className={`secondaryBtn ${isCompleteScreeen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
          </div>

          <div>
            <h2>Task 1</h2>
            <label>Description</label>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
