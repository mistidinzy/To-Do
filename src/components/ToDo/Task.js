import React from 'react';


function Task(props){

  const { task } = props;

  // onDelete, onUpdate

  // function deleteTask() {
  //   onDelete(task);
  // }

  // function updateTask() {
  //   onUpdate(task);
  // }

  return(
    <ul>
      <div key={task.id}>
        <li>{task.name}</li>
        <li>{task.assignee}</li>
        <li>{task.difficulty}</li>
        <li>{task.isComplete}</li>
      </div>
    </ul>
  )
}

export default Task;