import React from 'react';
import { Navbar, Container } from 'react-bootstrap';



function Home(props){
  console.log('Home props', props);
  const { message } = props;

  return(
    <>
    <h1>{message}</h1>

    <nav>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand> To&middot;Do List Manager </Navbar.Brand>
          </Container>
      </Navbar>
    </nav>
    </>
  )
}

export default Home;
