import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavMenu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand style={{paddingTop: '8px', paddingBottom: '8px'}}>
                        <Link to="/">Pedro Silva</Link>
                        <div style={{fontSize: 10}}>Software Developer</div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/projects">
                            <NavItem eventKey={1}>Projects</NavItem>
                        </LinkContainer>
                        <NavItem eventKey={2} href="#">About Me</NavItem>
                        <NavItem eventKey={3} href="#">Contacts</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavMenu;