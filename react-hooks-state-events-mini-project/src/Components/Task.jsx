import React from 'react'

function Task({ task, onDelete }) {
    return (
      <div>
        <span>{task.text} ({task.category})</span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    );
  }
  
export default Task