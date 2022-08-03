import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Toolbar() {
  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} bg="none" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/"><img class="logo"src={require("../assets/img/blue-logo.png")} alt="heyauntie-logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img class="logo"src={require("../assets/img/pink-logo.png")} alt="heyauntie-logo"/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/login">Login </Nav.Link>
                  <Nav.Link href="/survey">Sign Up </Nav.Link>
                  <Nav.Link href="/profilemain">Profile</Nav.Link>
                  <Nav.Link href="/profilemain">Donate</Nav.Link>
                  
                  <NavDropdown
                    title="Comunity Lounge"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action5">
                      Text goes here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                  <Button variant="outline-success">Search</Button>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Toolbar;