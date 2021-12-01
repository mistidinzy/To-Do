import React from 'react';
import { Toast } from 'react-bootstrap';


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
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small className="text-muted">just now</small>
      </Toast.Header>
      <Toast.Body>See? Just like this.</Toast.Body>
    </Toast>

    // <ul>
    //   <div key={task.id}>
    //     <li>{task.name}</li>
    //     <li>{task.assignee}</li>
    //     <li>{task.difficulty}</li>
    //     <li>{task.isComplete}</li>
    //   </div>
    // </ul>
  )
}

export default Task;