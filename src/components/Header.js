import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";


/*
This components renders the menu/navigation bar on top of the website, for users to navigate between different pages of the website.
It uses the navbar component of React-Bootstrap.
*/

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Green Paris</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/paris-trees">
              <Nav.Link>Trees in Paris</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/emission-map">
              <Nav.Link>Emission Map</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/scientific-background">
              <Nav.Link>Background</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-us">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
