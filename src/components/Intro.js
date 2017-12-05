import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image} from 'react-bootstrap';
import me from '../images/me.jpg';

export default class Intro extends Component {
    render() {
        return (
            <Row style={{paddingTop: '50px'}}>
                <Col xs={12}>
                    <Image className="center-block" src={me} width="150px" circle responsive/>
                </Col>
                <Col xs={12} className="text-center" style={{paddingTop: '15px'}}>
                    <h3>Hey there, welcome to my website!</h3>
                    <p>I'm a <b>software developer</b>, mainly focused on <b>web/mobile</b> development.</p>
                    <p>Here you can find some personal projects I've developed so far, with
                        more coming in the future.</p>
                    <p>Currently I'm available for hiring, so feel free to <Link to="/contacts">contact
                        me</Link> after checking out my <Link to="/projects">projects</Link> and <Link
                        to="/aboutme"> development experience</Link>.</p>
                </Col>
            </Row>
        );
    }
}