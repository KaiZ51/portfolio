import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class AboutMe extends Component {
    render() {
        return (
            <Row style={{paddingTop: '25px', paddingBottom: '65px'}}>
                <Col xs={12} className="about-padding text-center">
                    <h2>Myself</h2>
                    <p>My name is <b>Pedro Silva</b>, and I'm a <b>software developer</b> from Portugal.</p>
                    <p>I've recently graduated with a Bachelor's degree in <b>Computer Science</b>.</p>

                    <h2 style={{paddingTop: '40px'}}>Development experience</h2>
                    <p>So far, I've worked mainly with Android app and web development.</p>
                    <p>On the web development side, I have experience with <b>HTML</b>, <b>JavaScript</b>, <b>CSS</b>,
                        <b> PHP</b>, <b>Bootstrap</b>, and most recently, <b>ReactJS</b>.</p>
                    <p>Aside from those, I've also got experience with <b>MySQL</b>, <b>PostgreSQL</b>, <b>C#</b>, <b>Java</b>,
                        <b> Firebase</b> (database and otherwise), and the <b>Unity</b> game engine.</p>

                    <h2 style={{paddingTop: '40px'}}>Interests</h2>
                    <p>Ever since I was very young, I've always been fond of technology in some form, whether its
                        computers, phones, or even games.</p>
                    <p>That still holds true to this day, and as such, I'm constantly looking to expand my
                        knowledge and tinker with new stuff.</p>
                    <p>I'm also very passionate about gaming and music, and love traveling whenever possible.</p>
                </Col>
            </Row>
        )
    }
}

export default AboutMe;