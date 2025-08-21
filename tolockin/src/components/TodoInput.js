import React from 'react';

const TodoInput = ({ newTitle, setNewTitle, newDescription, setNewDescription, newPriority, setNewPriority, handleAddTodo, handlePriorityChange }) => {
  return (
    <div className='todo-input'>
      <div className='todo-input-item'>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Task's title" />
      </div>

      <div className='todo-input-item'>
        <label>Description</label>
        <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Task's description" />
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
  );
};

export default TodoInput;