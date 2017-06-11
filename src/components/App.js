import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import NavMenu from './NavMenu';
import Intro from "./Intro";

class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <NavMenu/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" style={{paddingTop: '5px'}}>
                        <Image src="http://via.placeholder.com/100x100" circle/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Intro/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;