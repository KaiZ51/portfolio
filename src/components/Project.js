import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row style={{paddingBottom: '5%'}}>
                <Col lg={3}>
                    <Image src="http://via.placeholder.com/250x150"/>
                </Col>
                <Col lg={9}>
                    <Row><h4>{this.props.title}</h4></Row>
                    <Row><h5>{this.props.content}</h5></Row>
                </Col>
            </Row>
        )
    }
}

export default Project;