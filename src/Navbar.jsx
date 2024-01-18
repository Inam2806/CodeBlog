// NavBar.jsx

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './images/logo.png';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.scss';

const NavBar = ({ isNavbarOpen, onToggle }) => {
    const navbarStyle = {
        zIndex: isNavbarOpen ? 0 : 100, // Set z-index to 0 when navbar is open, 100 otherwise
    };

    return (
        <Navbar style={navbarStyle} className="navbar navbar-expand-lg navbar-light" expand="lg" variant="light">
            <img src={Logo} alt="Logo" />
            <Navbar.Toggle onClick={onToggle} aria-controls="navbarTogglerDemo02" />

            <Navbar.Collapse id="navbarTogglerDemo02">
                <Nav className="navbar-nav ml-auto">
                    <Nav.Item className='item'>
                        <NavLink to="/" className="nav-link ab" style={{ color: 'white' }}>
                            <i className="fa fa-home" aria-hidden="true"></i> Home
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item className='item'>
                        <NavLink to="/about" className="nav-link ab" style={{ color: 'white' }}>
                            <i className="fa fa-user" aria-hidden="true"></i> About Me
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item className='item'>
                        <NavLink to="/contact" className="nav-link ab" style={{ color: 'white' }}>
                            <i className="fa fa-phone" aria-hidden="true"></i> Contact
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
