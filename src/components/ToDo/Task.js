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

  const { task } = props;

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