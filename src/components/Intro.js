import React, {Component} from 'react';

class Intro extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center">Hey there, welcome to my website!</h3>
                <h5 className="text-center">Here you can find some personal projects I've developed so far, with
                    more coming in the future.</h5>
                <h5 className="text-center">Currently I'm available for hiring, so feel free to <a href="#"> contact
                    me </a>after checking out my <a href="#">projects</a>.</h5>
            </div>
        )
    }
}

export default Intro;