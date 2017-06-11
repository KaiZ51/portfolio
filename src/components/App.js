import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
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
                    <Col>
                        <Intro/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;