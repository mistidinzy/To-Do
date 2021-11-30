import {Nav, Navbar, Container} from 'react-bootstrap';

function Header(){
  return(
    <>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">To&middot;Do</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/"></Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;