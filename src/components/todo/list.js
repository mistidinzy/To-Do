import React from "react";

function List(props){
  
  console.log('List props', props);
  const { list, title } = props;
  
  return(
    <>
    <h3>{title}</h3>
    <div>
        <ul>
          {list.map(task => (
            <li key={task.id}>
              {task.name}
            </li>
          ))}         
        </ul>
    </div>
    </>
  )
}

export default List;