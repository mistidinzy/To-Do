import React from 'react';
import { Toast, Button } from 'react-bootstrap';
import { useState } from 'react';
// import { useEffect } from 'react';


// function simulateNetworkRequest() {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }

function LoadingButton() {
  const [isCompleted, setLoading] = useState(false);

  // useEffect(() => {
  //   if (isCompleted) {
  //     setLoading(false);
  //   }
  // }, [isCompleted]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      size="sm"
      variant="secondary"
      disabled={isCompleted}
      onClick={!isCompleted ? handleClick : null}
    >
      {isCompleted ? 'Complete' : 'Pending'}
    </Button>
  );
}

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
    <Toast className="Toast" key={task.id}>
      <Toast.Header>
       <LoadingButton/>
        <strong className="me-auto">{task.assignee}</strong>
      </Toast.Header>
      <Toast.Body>{task.name}</Toast.Body>
      <p id="difficulty" className="text-muted">Difficulty: {task.difficulty}</p>
    </Toast>

  )
}

export default Task;