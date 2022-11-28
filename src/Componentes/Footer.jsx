
import React from "react";
import {Navbar,Nav,Container} from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className="">
            <Navbar bg="light" variant="light  p-1 d-flex">
                <Container>
                    <Navbar.Brand href="/">Catálogo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/FormularioLibro">Libros</Nav.Link>
                        <Nav.Link href="/Mainlectores">Lectores</Nav.Link>
                        <Nav.Link href="/lectores">Suscribite!</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled href="#">Canjear</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
}

export default Footer;