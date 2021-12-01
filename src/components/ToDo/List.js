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
            <div key={task.id}>
              <li>{task.name}</li>
              <li>{task.assignee}</li>
              <li>{task.difficulty}</li>
            </div>   
          ))}         
        </ul>
    </div>
    </>
  )
}

export default List;