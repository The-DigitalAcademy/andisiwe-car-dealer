import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom";



function BasicExample() {
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkkmrUNLGwbxwYTHPGd9ETaqVBw6c4Upo8PqGMN3-CC8Oplk1tBToaVx6vo_7EeYi0jo&usqp=CAU" alt=""  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <nav>
          <Link to="/">Home</Link>
      </nav>
      <br></br>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <br></br>
      <nav>
        <Link to="/contact">Contact</Link>
      </nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
