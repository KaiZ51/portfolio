import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import NavMenu from './NavMenu';

class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <NavMenu/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;