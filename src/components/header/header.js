import {Nav, Navbar, Container} from 'react-bootstrap';


function Header(){
  return(
    <>
    <Navbar bg="dark" variant="dark" fixed="top">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    <p>Poop</p>
    </>
  )

}

export default Header;