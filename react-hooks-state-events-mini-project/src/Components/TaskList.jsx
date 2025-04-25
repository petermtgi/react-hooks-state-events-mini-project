import React from 'react'

function TaskList({ tasks }) {
    return (
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }  

export default TaskList