function TaskForm(props){

  const { onSave } = props;

  function handleSubmit(event){
    event.preventDefault();

    const form = event.target;
    const { name, assignee, difficulty } = form.elements;

    const formData = {
      name: name.value,
      assignee: assignee.value,
      difficulty: difficulty.value,
      // isComplete: isComplete.value,
    };

    console.log(formData);
    onSave(formData);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Task To Do"/>
      <input type="text" name="assignee" placeholder="Assigned To"/>
      <input type="text" name="difficulty" placeholder="Difficulty Level (1-5)"/>
      <button type="Submit">Save</button>
    </form>
  )
}

export default TaskForm;