import React from 'react';

const EditForm = ({ item, handleUpdateTitle, handleUpdateDescription, handleUpdateTodo, handleCancelUpdate }) => {
  return (
    <div className='edit-wrapper'>
      <input
        type="text"
        placeholder='Updated Title'
        onChange={(e) => handleUpdateTitle(e.target.value)}
        value={item.title}
      />
      <textarea
        placeholder='Updated Description'
        onChange={(e) => handleUpdateDescription(e.target.value)}
        value={item.description}
      />
      <div className='edit-buttons'>
        <button className='primaryBtn' onClick={handleUpdateTodo}>Save</button>
        <button className='secondaryBtn' onClick={handleCancelUpdate}>Cancel</button>
      </div>
    </div>
  );
};

export default EditForm;