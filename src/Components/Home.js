import React from 'react';
import TaskForm from './ToDo/Form';
import List from './ToDo/List';
import { Navbar, Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const data = [
  { id: 1, name: 'Declutter', assignee: 'Misti', difficulty: 1, isComplete: false },
  { id: 2, name: 'Sweep', assignee: 'Misti', difficulty: 1, isComplete: true },
  { id: 3, name: 'Vacuum', assignee: 'Misti', difficulty: 1, isComplete: false },
  { id: 4, name: 'Mop', assignee: 'Misti', difficulty: 1, isComplete: false },
];

let nextId = 5;

function Home()
{
  const [tasks, setTasks] = useState(data);

  function handleSave(formData)
  {
    const newTask = {
      ...formData,
      id: nextId++,
    };

    const newTasks = [
      ...tasks,
      newTask,
    ]

    setTasks(newTasks);
    console.log('New Tasks = ', newTasks);
  }

  function handleDelete(task)
  {
    const updatedTasks = tasks.filter(t =>
      t !== task)
    setTasks(updatedTasks);
    console.log('Updated Tasks = ', updatedTasks);
  }

  return(
    <div className="todoMgmt">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand id="mainNavbarHeader">To Do List Manager</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <TaskForm onSave={handleSave} />
          </Col>
          <Col>
            <List data={tasks} onDelete={handleDelete} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
