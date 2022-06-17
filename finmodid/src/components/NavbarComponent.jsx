import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavbarComponent.css";
export const NavbarComponent = () => {
  return (
    <Navbar
      bg="bg-white"
      expand="lg"
      style={{
        position: "fixed",
        zIndex: "2000",
        width: "inherit",
        boxShadow: "0 4px 10px -10px rgba(0,0,0,0.6)",
      }}
      className="main-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          Finmod.id
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="navbar-menu-button-container">
              <Nav.Link id="menu-item" href="#home">
                Home
              </Nav.Link>
            </div>
            <div className="navbar-menu-button-container">
              <Nav.Link id="menu-item" href="#about">
                About
              </Nav.Link>
            </div>
            <div className="navbar-menu-button-container">
              <Nav.Link id="menu-item" href="#pricing">
                Pricing
              </Nav.Link>
            </div>
            <div className="navbar-menu-button-container">
              <Nav.Link id="menu-item" href="#login">
                Login
              </Nav.Link>
            </div>
            <div className="navbar-menu-button-container">
              <Nav.Link
                id="menu-item"
                className="sign-in-button"
                href="#signin"
              >
                Sign In
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
