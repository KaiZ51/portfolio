import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import NavMenu from './NavMenu';
import Intro from "./Intro";
import Projects from "./Projects";

class App extends Component {
    render() {
        return (
            <Grid>
                <Router history={createHistory()}>
                    <div>
                        <NavMenu/>
                        <Route exact path="/" component={Intro}/>
                        <Route path="/projects" component={Projects}/>
                    </div>
                </Router>
            </Grid>
        );
    }
}

export default App;