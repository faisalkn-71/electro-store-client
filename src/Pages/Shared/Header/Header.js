import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to="/">
                <h3 className='text-bold'>Electro Store</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/home#products">Products</Nav.Link>
                    <Nav.Link href="/home#reviews">Buyers Feedback</Nav.Link>

                </Nav>
                
                <Nav>
                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                      
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    

                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;