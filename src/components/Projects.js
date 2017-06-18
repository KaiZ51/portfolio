import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <Row>
                <Row>
                    <Col lg={3}>
                        <Image src="http://via.placeholder.com/250x150"/>
                    </Col>
                    <Col lg={9}>
                        <Row><h4>Title</h4></Row>
                        <Row><h5>Content</h5></Row>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default Projects;