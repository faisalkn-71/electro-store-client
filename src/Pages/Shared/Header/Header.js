import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3 className='text-bold '><span className='bg-white text-primary p-1'>Electro</span><span className='bg-dark p-1'>Store</span></h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home#products">Products</Nav.Link>
                        <Nav.Link href="/home#reviews">Buyers Feedback</Nav.Link>

                    </Nav>

                    <Nav>

                        {
                            user && <>
                                <Nav.Link as={Link} to="/products">Manage Product</Nav.Link>
                                <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link>
                                <Nav.Link as={Link} to="/myProduct">My Product</Nav.Link>
                            </>
                        }


                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                        {user ?
                            <button className='btn btn-primary' onClick={handleLogout}>LogOut</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;