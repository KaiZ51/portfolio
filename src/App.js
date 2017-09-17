import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import NavMenu from './components/NavMenu';
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";

export default class App extends Component {
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