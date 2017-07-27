import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Intro extends Component {
    render() {
        return (
            <Row style={{paddingTop: '2%'}}>
                <Col>
                    <Image className="center-block" src="http://via.placeholder.com/100x100" circle/>
                </Col>
                <Col className="text-center">
                    <h3>Hey there, welcome to my website!</h3>
                    <h5>Here you can find some personal projects I've developed so far, with
                        more coming in the future.</h5>
                    <h5>Currently I'm available for hiring, so feel free to <a href="#">contact
                        me</a> after checking out my <a href="#">projects</a>.</h5>
                </Col>
            </Row>
        )
    }
}

export default Intro;