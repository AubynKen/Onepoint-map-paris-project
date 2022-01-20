import React from "react";
import { Container, Row, Col } from "react-bootstrap";

/*
This component is the footer component.
*/

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-4">GreenParisMaps 2021</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
