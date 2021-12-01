import {Nav, Navbar, NavLink, Container} from 'react-bootstrap';

function Header(){
  return(
    <>
      <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/About">About</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;