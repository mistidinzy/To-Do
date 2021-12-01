import { Form, Button, Card } from 'react-bootstrap';

function TaskForm(props){

  const { onSave } = props;

  function handleSubmit(event){
    event.preventDefault();

    const form = event.target;
    const { name, assignee, difficulty, isComplete } = form.elements;

    const formData = {
      name: name.value,
      assignee: assignee.value,
      difficulty: difficulty.value,
      isComplete: isComplete.value,
    };

    console.log('formData = ', formData);
    onSave(formData);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return(
    <>
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label>To-Do</Form.Label>
            <Form.Control as="textarea" name="name" placeholder="Task"/>
          </Form.Group>

          <Form.Group>
          <Form.Label>Difficulty Level</Form.Label>
          <Form.Range name="difficulty" min="1" max="5" />
          </Form.Group>

          <Form.Group>
            <Button type="submit">Save</Button>
            <Button type="reset">Clear</Button>
          </Form.Group>
        </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default TaskForm;