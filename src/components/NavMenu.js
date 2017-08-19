import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavMenu extends Component {
    render() {
        return (
            <Row>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Pedro Silva</Link>
                        </Navbar.Brand>
                        <Navbar.Text>Software Developer</Navbar.Text>
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
        )
    }
}

export default NavMenu;