import React from "react";

function List(props){

  console.log('List Props', props);
  const { listData, listTitle } = props;

  return(
    <>
    <h3>{listTitle}</h3>
    <div>
        <ul>
          {listData.map(task => (
            <div key={task.id}>
              <li>{task.name}</li>
              <li>{task.assignee}</li>
              <li>{task.difficulty}</li>
              <li>{task.isComplete}</li>
            </div>
          ))}
        </ul>
    </div>
    </>
  )
}


export default List;