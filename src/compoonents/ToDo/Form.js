import { Form, Button, Card } from 'react-bootstrap';

function TaskForm(props){

  const { onSave } = props;

  function handleSubmit(event){
    event.preventDefault();

    const form = event.target;
    const { name, assignee, difficulty} = form.elements;

    const formData = {
      name: name.value,
      assignee: assignee.value,
      difficulty: difficulty.value,
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
      <Card.Title><b>Add To Do Item</b></Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label className="formLabel">To Do Item</Form.Label>
            <Form.Control type="text" name="name" placeholder="Item Details"/>
          </Form.Group>

          <Form.Group>
          <Form.Label className="formLabel">Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assignee Name"/>
          </Form.Group>

          <Form.Group>
          <Form.Label className="formLabel">Difficulty</Form.Label>
          <Form.Range name="difficulty" min="1" max="5" />
          </Form.Group>

          <Form.Group>
            <Button type="submit">Add Item</Button>
          </Form.Group>
        </Form>
        </Card.Body>
      </Card>
    </>
  )
}

export default TaskForm;