import React from 'react';
import { MdOutlineDeleteOutline, MdEdit } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";

const TodoItem = ({ item, index, handleDeleteTodo, handleCompletedTodo, handleEdit, handleDeleteCompletedTodo, isCompleted }) => {
  return (
    <div className='todo-list-item'>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Priority: {item.priority}</p>
        {isCompleted && <p><small>Completed on: {item.completedTime}</small></p>}
      </div>
      <div className='todo-list-item-icons'>
        {!isCompleted && (
          <>
            <MdOutlineDeleteOutline className='delete-icon' onClick={() => handleDeleteTodo(index)} title='Delete' />
            <FaCalendarCheck className='check-icon' onClick={() => handleCompletedTodo(index)} title='Complete' />
            <MdEdit className='edit-icon' onClick={() => handleEdit(index, item)} title='Edit' />
          </>
        )}
        {isCompleted && (
          <MdOutlineDeleteOutline className='delete-icon' onClick={() => handleDeleteCompletedTodo(index)} title='Delete' />
        )}
      </div>
    </div>
  );
};

export default TodoItem;