import React from 'react';
import TodoItem from './TodoItem';
import EditForm from './EditForm'; // Assuming you have an EditForm component for editing todos

const TodoList = ({ todos, completedTodos, isCompleteScreen, handleDeleteTodo, handleCompletedTodo, handleDeleteCompletedTodo, handleEdit, currentEdit, currentEditedItem, handleUpdateTitle, handleUpdateDescription }) => {
  return (
    <div className='todo-list'>
      {isCompleteScreen === false && todos.map((item, index) => (
        currentEdit === index ? (
          <EditForm 
            key={index}
            item={currentEditedItem}
            handleUpdateTitle={handleUpdateTitle}
            handleUpdateDescription={handleUpdateDescription}
          />
        ) : (
          <TodoItem 
            key={index}
            item={item}
            index={index}
            handleDeleteTodo={handleDeleteTodo}
            handleCompletedTodo={handleCompletedTodo}
            handleEdit={handleEdit}
            isCompleted={false}
          />
        )
      ))}

      {isCompleteScreen === true && completedTodos.map((item, index) => (
        <TodoItem 
          key={index}
          item={item}
          index={index}
          handleDeleteCompletedTodo={handleDeleteCompletedTodo}
          isCompleted={true}
        />
      ))}
    </div>
  );
};

export default TodoList;