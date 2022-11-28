import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegacion = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Catálogo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/FormularioLibro">Libros</Nav.Link>
          <Nav.Link href="/Mainlectores">Lectores</Nav.Link>
          <Nav.Link href="/lectores">Suscribite!</Nav.Link>
          <Nav.Link  eventKey="disabled" disabled href="#">Canjear</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;