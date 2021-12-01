import React from 'react';
import { Toast } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton'
import { useState } from 'react';
import { useEffect } from 'react';

function LoadingButton() {
  const [isCompleted, setLoading] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      setLoading(true);

    }
  }, [isCompleted]);

  const handleClick = () => setLoading(true);

  return (
    <ToggleButton
      size="sm"
      id="toggle-check"
      type="checkbox"
      variant={isCompleted ? 'danger' : 'success'}
      disabled={isCompleted}
      onClick={!isCompleted ? handleClick : null}>
      {isCompleted ? 'Complete' : 'Pending'}
    </ToggleButton>
  );
}

function Task(props){

  const { task, onDelete } = props;

  function handleDelete(clickEvent) {
    // console.log(clickEvent)
    onDelete(task);
  }

  return (
    <Toast className="Toast" key={task.id} onClose={handleDelete}>
      <Toast.Header>
       <LoadingButton/>
        <strong className="me-auto">{task.assignee}</strong>
      </Toast.Header>
      <Toast.Body>
        <p>{task.name}</p>
        </Toast.Body>
      <p id="difficulty" className="text-muted">Difficulty: {task.difficulty}</p>
    </Toast>
  )
}

export default Task;