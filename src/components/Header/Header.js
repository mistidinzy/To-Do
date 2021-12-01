import {Nav, Navbar, Container} from 'react-bootstrap';

function Header(){
  return(
    <>
      <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              {/* <Nav.Link href="/List">To&middot;Do List</Nav.Link>
              <Nav.Link href="/Form">Manage Tasks</Nav.Link> */}
            </Nav>
          </Container>
      </Navbar>
    </>
  )
}

export default Header;