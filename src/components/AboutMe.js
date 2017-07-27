import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class AboutMe extends Component {
    render() {
        return (
            <Row className="text-center" style={{paddingTop: '2%'}}>
                <h3>Myself</h3>
                <h5>My name is Pedro Silva, and I'm a guy from Portugal.</h5>
                <h5>I've recently graduated from a Bachelor's degree in Computer Science.</h5>

                <h3 style={{paddingTop: '3%'}}>Development experience</h3>
                <h5>So far, I've worked mainly with Android apps and Web Development. On the web development side, I
                    have experience with HTML, JavaScript, CSS, PHP, and most recently, ReactJS.</h5>
                <h5>Aside from those, I've also got experience with MySQL, PostgreSQL, C#, Java, Firebase (database and
                    otherwise), and Unity Game Engine.</h5>

                <h3 style={{paddingTop: '3%'}}>Interests</h3>
                <h5>As for my interests, ever since I was very young, I've always had an interest in technology in some
                    form, whether its computers, phones, or even games.</h5>
                <h5>That still holds true to this day, and as such, I'm constantly looking to expand my knowledge.</h5>
                <h5>I'm also very passionate about gaming and music, and love traveling whenever possible.</h5>
            </Row>
        )
    }
}

export default AboutMe;