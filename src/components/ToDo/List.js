import React from "react";
import Task from "./Task";

function List(props){

  console.log('List Props', props);
  const { data, onDelete, onUpdate } = props;

  return(
    <>
      {data.map(task => (
        <Task task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </>
  )
}

export default List;