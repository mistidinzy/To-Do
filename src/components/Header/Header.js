import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">To&middot;Do</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <Nav.Link as={Link} to="/List">To&middot;Do List</Nav.Link>
              <Nav.Link as={Link} to="/Form">Add New Task</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;