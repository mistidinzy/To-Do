import React from 'react';



function Home(props){
  // console.log('Home props', poop);
  const { message } = props;
  
  return(
    <h1>{message} Welcome to the Home Page</h1>
  )
}

export default Home;
