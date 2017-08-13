import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class AboutMe extends Component {
    render() {
        return (
            <Row style={{paddingTop: '25px'}}>
                <Col xs={12} className="about-padding text-center">
                    <h3>Myself</h3>
                    <p>My name is Pedro Silva, and I'm a software developer from Portugal.</p>
                    <p>I've recently graduated from a Bachelor's degree in Computer Science.</p>

                    <h3 style={{paddingTop: '30px'}}>Development experience</h3>
                    <p>So far, I've worked mainly with Android apps and Web Development.</p>
                    <p>On the web development side, I have experience with HTML, JavaScript, CSS, Bootstrap, PHP, and
                        most recently, ReactJS.</p>
                    <p>Aside from those, I've also got experience with MySQL, PostgreSQL, C#, Java, Firebase (database
                        and otherwise), and the Unity Game Engine.</p>

                    <h3 style={{paddingTop: '30px'}}>Interests</h3>
                    <p>As for my interests, ever since I was very young, I've always had an interest in technology in
                        some form, whether its computers, phones, or even games.</p>
                    <p>That still holds true to this day, and as such, I'm constantly looking to expand my
                        knowledge.</p>
                    <p>I'm also very passionate about gaming and music, and love traveling whenever possible.</p>
                </Col>
            </Row>
        )
    }
}

export default AboutMe;