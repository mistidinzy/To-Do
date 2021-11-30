function TaskForm(props){
  const { onSave } = props;

  function handleSubmit(e){
    e.preventDefault();

    const form = e.target;
    const { name } = form.elements;

    const formData = {
      name: name.value
    };

    onSave(formData);

    e.target.reset();
    e.target.elements.name.focus();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Task Name"/>
      <button type="submit">Save</button>
    </form>
  )
}

export default TaskForm;