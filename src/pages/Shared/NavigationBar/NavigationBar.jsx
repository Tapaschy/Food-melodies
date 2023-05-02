import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"  className='color-nav' variant="light">
                <Container>
                    <Navbar.Brand href="#home"><h2>Food Melodies</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;