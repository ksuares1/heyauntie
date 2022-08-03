
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Dashboard() {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Auntie House Rules</Nav.Link>
            <Nav.Link href="/profilemain">Auntie Group</Nav.Link>
            <Nav.Link href="#">Community Lounge</Nav.Link>
            <Nav.Link href="/messages">Inbox</Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>
   
      <div class="dashboard-bkg">
      
            <div class="ladies">
                 <img class="ladies-working" src={require('../assets/img/ladies-discuss.png')} alt="ladies-conversation" /> 
                </div>
            </div>
       
    </>
  );
}

export default Dashboard;

