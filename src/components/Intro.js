import React, {Component} from 'react';
import {Row, Image} from 'react-bootstrap';

class Intro extends Component {
    render() {
        return (
            <Row>
                <Row>
                    <div className="text-center" style={{paddingTop: '5px'}}>
                        <Image src="http://via.placeholder.com/100x100" circle/>
                    </div>
                </Row>
                <Row>
                    <h3 className="text-center">Hey there, welcome to my website!</h3>
                    <h5 className="text-center">Here you can find some personal projects I've developed so far, with
                        more coming in the future.</h5>
                    <h5 className="text-center">Currently I'm available for hiring, so feel free to <a href="#">contact
                        me</a> after checking out my <a href="#">projects</a>.</h5>
                </Row>
            </Row>
        )
    }
}

export default Intro;