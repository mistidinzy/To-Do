import React from "react";

function List(props){
  
  console.log('List props', props);
  const { listData, title } = props;
  
  return(
    <>
    <h3>{title}</h3>
    <div>
        <ul>
          {listData.map(task => (
            <>
            <li key={task.id}>
            {task.name}
            </li>

            <li key={task.id}>
            {task.assignee}
            </li>

            <li key={task.id}>
            {task.difficulty}
            </li>
            </>
            
          ))}         
        </ul>
    </div>
    </>
  )
}

export default List;