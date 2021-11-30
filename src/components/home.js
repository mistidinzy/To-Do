import React from 'react';

// class HomeClass extends React.Component{
//   render(){
//     return(
//       <h1></h1>
//     )
//   }
// }

// export default HomeClass;

function Home(poop){
  console.log('Home props', poop);
  const { message } = poop;
  
  return(
    <h1>{message} from Function Component</h1>
  )
}

export default Home;
