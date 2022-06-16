import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavbarComponent.css";
export const NavbarComponent = () => {
  return (
    <Navbar bg="bg-white" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          Finmod.id
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id="menu-item" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="menu-item" href="#about">
              About
            </Nav.Link>
            <Nav.Link id="menu-item" href="#pricing">
              Pricing
            </Nav.Link>
            <Nav.Link id="menu-item" href="#login">
              Login
            </Nav.Link>
            <Nav.Link id="menu-item" className="sign-in-button" href="#signin">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
