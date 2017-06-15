import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NavMenu from './NavMenu';
import Intro from "./Intro";
import Projects from "./Projects";

class App extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Router history={createHistory()}>
                            <div>
                                <NavMenu/>
                                <Route exact path="/" component={Intro}/>
                                <Route path="/projects" component={Projects}/>
                            </div>
                        </Router>
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