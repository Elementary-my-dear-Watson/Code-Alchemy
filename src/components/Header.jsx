import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logoImage from '../assets/images/marthalogo.svg';
import '../assets/styles/style.css';

export default function Header() {
    const location = useLocation();
    return (
        <header className="header">
            <Navbar bg="none" variant="none" expand="lg" className="px-3 w-100">
                <Navbar.Brand className="d-flex align-items-center">
                    <Link to="/about" className="logo-link">
                        <img
                            src={logoImage}
                            alt="Profile"
                            className="logo"
                        />
                    </Link>
                    <h5 className="ms-4">Martha Watson</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/about" active={location.pathname === '/about'} className="text-change">
                            About Me
                        </Nav.Link>
                        <Nav.Link as={Link} to="/portfolio" active={location.pathname === '/portfolio'} className="text-change">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'} className="text-change">
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/resume" active={location.pathname === '/resume'} className="text-change">
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
