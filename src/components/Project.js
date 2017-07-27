import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col xs={12} style={{paddingBottom: '5%'}}>
                <Col sm={3}>
                    <Image className="center-block" src="http://via.placeholder.com/250x150" responsive/>
                </Col>
                <Col sm={9}>
                    <Row><h4>{this.props.title}</h4></Row>
                    <Row><h5>{this.props.content}</h5></Row>
                </Col>
            </Col>
        )
    }
}

export default Project;