import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import NavMenu from './NavMenu';
import Intro from "./Intro";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";

class App extends Component {
    render() {
        return (
            <Grid>
                <Router history={createHistory()}>
                    <div>
                        <NavMenu/>
                        <Route exact path="/" component={Intro}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/aboutme" component={AboutMe}/>
                        <Route path="/contacts" component={Contacts}/>
                    </div>
                </Router>
            </Grid>
        );
    }
}

export default App;