import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Project from "./Project";

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    title: 'Title',
                    content: 'Content'
                },
                {
                    title: 'Another Title',
                    content: 'Another content'
                }
            ]
        };
    }

    renderProjects() {
        return this.state.projects.map(function (currentValue, index) {
            return <Project key={index} title={currentValue.title} content={currentValue.content}/>;
        });
    }

    render() {
        return (
            <Row>
                {this.renderProjects()}
            </Row>
        )
    }
}

export default Projects;