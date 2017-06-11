import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class NavMenu extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand style={{paddingTop: '8px', paddingBottom: '8px'}}>
                        <a href="#">Pedro Silva</a>
                        <div style={{fontSize: 10}}>Software Developer</div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Projects</NavItem>
                        <NavItem eventKey={2} href="#">About Me</NavItem>
                        <NavItem eventKey={3} href="#">Contacts</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavMenu;