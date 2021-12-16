import React from "react";
import { Container, Navbar, Nav, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const MainPageNavbar = () => {
    return(
        <Navbar>
                <Container>
                    <Navbar.Brand>Thacker Mail</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ButtonToolbar aria-label="Toolbar for main navigation buttons">
                                <ButtonGroup className="me-2" aria-label="Main Page button">
                                    <Link to="/mainpage">
                                        <Button variant="primary">Main Page</Button>
                                    </Link>
                                </ButtonGroup>
                                <ButtonGroup className="me-2" aria-label="Send Mail button">
                                    <Link to="/send-mail">
                                        <Button variant="primary">Send Mail</Button>
                                    </Link>
                                </ButtonGroup>
                                <ButtonGroup className="me-2" aria-label="Remove Mail button">
                                    <Link to="/remove-mail">
                                        <Button variant="primary">Remove Mail</Button>
                                    </Link>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
};
