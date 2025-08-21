import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]); // Contain all to-do list items
  const [newTitle, setNewTitle] = useState(''); // To-do title input
  const [newDescription, setNewDescription] = useState(''); // To-do description input
  const [newPriority, setNewPriority] = useState(''); // To-do priority input
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(""); // For editing a todo item
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
      priority: newPriority,
    }

    let updatedTodoArr = [...allTodos]; // Create a copy of the current todos array
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);

    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr)); // Save to local storage
  }

  const handlePriorityChange = (e) => {
    setNewPriority(e.target.value);
  }

  const handleDeleteTodo = (index) => {
    let reducedTodos = [...allTodos];
    reducedTodos.splice(index, 1);

    localStorage.setItem('todolist', JSON.stringify(reducedTodos));
    setTodos(reducedTodos);
  }

  const handleCompletedTodo = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // January is 0
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedTime = `${dd}/${mm}/${yyyy}`;

    let filteredItem = {
      ...allTodos[index],
      completedTime: completedTime
    }

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  }

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodos = [...completedTodos];
    reducedTodos.splice(index, 1);

    localStorage.setItem('completedTodos', JSON.stringify(reducedTodos));
    setCompletedTodos(reducedTodos);
  }

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem('todolist'));
    let saveCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }

    if (saveCompletedTodos) {
      setCompletedTodos(saveCompletedTodos);
    }
  }, [])

  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  }

  const handleUpdateTitle = (value) => {

  }

  const handleUpdateDescription = (value) => {

  }

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
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Task's title" />
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="Task's description" />
          </div>

          <div className='todo-input-item'>
            <label>Priority</label>
              <select value={newPriority} onChange={handlePriorityChange}>
                <option value="">None</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
          </div>

          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add task</button>
          </div>
        </div>

        <div className='todo-output'>
          <div className='btn-area'>
            <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
            <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
          </div>

          <div className='todo-list'>
            {/* <div className='todo-list-item'>
              <div>
                <h3>Task 1</h3>
                <p>Description</p>
              </div>

              <div className='todo-list-item-icons'>
                <MdOutlineDeleteOutline className='delete-icon' />
                <FaCalendarCheck className='check-icon' />
              </div>
            </div> */}
            
            {isCompleteScreen === false && allTodos.map((item, index) => {
              if(currentEdit === index) {
                <div className = 'edit-wrapper'>
                  <input placeholder='Updated Title' 
                  onChange = {(e) => handleUpdateTitle(e.target.value)} 
                  value={currentEditedItem.title}/>
                  
                  <textarea placeholder='Updated Description' 
                  onChange = {(e) => handleUpdateDescription(e.target.value)} 
                  value={currentEditedItem.description}/>
                </div>
              } 
              else {
                return (
                <div className='todo-list-item' key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Priority: {item.priority}</p>
                  </div>

                  <div className='todo-list-item-icons'>
                    <MdOutlineDeleteOutline className='delete-icon' onClick={()=>handleDeleteTodo(index)} title = 'Delete'/>
                    <FaCalendarCheck className='check-icon' onClick={()=>handleCompletedTodo(index)} title = 'Complete'/>
                    <MdEdit className='edit-icon' onClick={() => handleEdit(index, item)} title = 'Edit'/>
                  </div>
                </div>
              )
              }
              
            }
            )}

            {isCompleteScreen === true && completedTodos.map((item, index) => {
              return (
                <div className='todo-list-item' key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Priority: {item.priority}</p>
                    <p><small>Completed on: {item.completedTime}</small></p>
                  </div>

                  <div className='todo-list-item-icons'>
                    <MdOutlineDeleteOutline className='delete-icon' onClick={()=>handleDeleteCompletedTodo(index)}/>
                  </div>
                </div>
              )
            }
            )}

          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
