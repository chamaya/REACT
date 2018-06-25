import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">History</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} to="/" href = "/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} to="/about" href = "/about">
                            About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} to="/life" href = "/news">
                            Life
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} to="/tictactoe" href="/tictactoe">
                            Play Game
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;