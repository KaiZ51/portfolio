import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
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
import cubr_img1 from '../images/cubr/title.png';
import cubr_img2 from '../images/cubr/gameplay.png';
import cubr_img3 from '../images/cubr/finish.png';

export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    title: 'No Me',
                    content: '<p>No Me is a social app with the goal of letting people make new relationships.</p>' +
                    '<p>Unlike most other apps, it tries to persuade people to actually talk, and to forget about looks ' +
                    'for a bit.</p>' +
                    '<p>To achieve that, profiles are initially shown with the user\'s picture blurred, and as they chat, ' +
                    'it slowly gets uncovered.</p>',
                    images: [nome_img1, nome_img2, nome_img3, nome_img4, nome_img5, nome_img6],
                    height: '350px'
                },
                {
                    title: 'Readr',
                    content: '<p>Readr is a news aggregator app that tries to present a simple and quick way to read the ' +
                    'latest news.</p>' +
                    '<p>The news articles are shown separately in different categories, according to what the user wishes ' +
                    'to see.<br>' +
                    'Notifications can also be set, so that the user knows when new articles have been posted.</p>' +
                    '<p>The news articles are retrieved from <a href="https://newsapi.org/">NewsAPI</a>.</p>',
                    images: [readr_img1, readr_img2, readr_img3, readr_img4],
                    height: '350px'
                },
                {
                    title: 'Cubr',
                    content: '<p>Cubr is a game developed in the Unity game engine, with heavy influences from old school ' +
                    'classics such as Q*bert.</p>' +
                    '<p>On each level, the player has to paint all the cubes to red, and at the same time avoid the ' +
                    'enemies traversing the level.<br>' +
                    'If the player runs out of lives, the game ends.</p>',
                    images: [cubr_img1, cubr_img2, cubr_img3],
                    height: '200px'
                }
            ]
        };
    }

    renderProjects() {
        return this.state.projects.map(function (currentValue, index) {
            return <Project key={index} title={currentValue.title} content={currentValue.content}
                            images={currentValue.images} height={currentValue.height}/>;
        });
    }

    render() {
        return (
            <Row style={{paddingTop: '50px'}}>
                {this.renderProjects()}
            </Row>
        )
    }
}