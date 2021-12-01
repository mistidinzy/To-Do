import {Nav, Navbar, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header(){
  return(
    <>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">To&middot;Do</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/About">About</Nav.Link>
              <Nav.Link as={NavLink} to="/List">To&middot;Do List</Nav.Link>
              <Nav.Link as={NavLink} to="/Form">Add New Task</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;