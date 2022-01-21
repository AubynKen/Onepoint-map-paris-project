import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LanguageContext from "../contexts/LanguageContext";

/*
This components renders the menu/navigation bar on top of the website, for users to navigate between different pages of the website.
It uses the navbar component of React-Bootstrap.
*/

const Header = () => {
  const { lang, setLang } = useContext(LanguageContext);

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
              <Nav.Link>
                {lang === "EN" ? "Trees in Paris" : "Les Arbres à Paris"}
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/emission-map">
              <Nav.Link>
                {lang === "EN" ? "Emission Map" : "Carte d’Émission"}
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/scientific-background">
              <Nav.Link>{lang === "EN" ? "Background" : "Context"}</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about-us">
              <Nav.Link>
                {lang === "EN" ? "About us" : "À propos de nous"}
              </Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="ms-auto">
            <NavDropdown
              className="me-auto"
              title={lang === "EN" ? "Language" : "Langue"}
              id="basic-nav-dropdown"
              on
            >
              <NavDropdown.Item
                onClick={() => {
                  setLang("EN");
                }}
              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setLang("FR");
                }}
              >
                Français
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
