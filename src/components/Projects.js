import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Project from "./Project";
import nome_img1 from '../images/nome/intro.png';
import nome_img2 from '../images/nome/search.png';
import nome_img3 from '../images/nome/match.png';
import nome_img4 from '../images/nome/chat.png';
import nome_img5 from '../images/nome/profile.png';
import nome_img6 from '../images/nome/settings.png';
import readr_img1 from '../images/readr/categories.png';
import readr_img2 from '../images/readr/newslist.png';
import readr_img3 from '../images/readr/article.png';
import readr_img4 from '../images/readr/settings.png';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    title: 'No Me',
                    content: 'No Me is a social app with the goal of letting people make new relationships.<br>' +
                    'Unlike most other apps, it tries to persuade people to actually talk, and to forget about looks ' +
                    'for a bit.<br>' +
                    'To achieve that, profiles are initially shown with the user\'s picture blurred, and as they chat, ' +
                    'it slowly gets uncovered.',
                    images: [nome_img1, nome_img2, nome_img3, nome_img4, nome_img5, nome_img6]
                },
                {
                    title: 'Readr',
                    content: 'Readr is a news aggregator app that tries to present a simple and quick way to read the ' +
                    'latest news.<br>' +
                    'The news articles are shown separately in different categories, according to what the user wishes ' +
                    'to see.<br>' +
                    'Notifications can also be set, so that the user knows when new articles have been posted.<br>' +
                    'The news articles are retrieved from NewsAPI.',
                    images: [readr_img1, readr_img2, readr_img3, readr_img4]
                }
            ]
        };
    }

    renderProjects() {
        return this.state.projects.map(function (currentValue, index) {
            return <Project key={index} title={currentValue.title} content={currentValue.content}
                            images={currentValue.images}/>;
        });
    }

    render() {
        return (
            <Row style={{paddingTop: '2%'}}>
                {this.renderProjects()}
            </Row>
        )
    }
}

export default Projects;