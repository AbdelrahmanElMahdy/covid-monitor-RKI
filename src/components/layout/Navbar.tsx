import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export interface navbarProps {}

export default function NavbarC(props: navbarProps) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/monitor">Monitor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/monitor/munich">Munich</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
