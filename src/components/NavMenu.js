import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class NavMenu extends Component {
    render() {
        return (
            <Row>
                <Navbar staticTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Pedro Silva</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/projects">
                                <NavItem eventKey={1}>Projects</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/aboutme">
                                <NavItem eventKey={2}>About Me</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/contacts">
                                <NavItem eventKey={3}>Contacts</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        );
    }
}