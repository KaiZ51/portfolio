import React, {Component} from 'react';
import {Row, Col, Image, Carousel} from 'react-bootstrap';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    renderImages() {
        return this.props.images.map(function (currentValue, index) {
            return <Carousel.Item key={index}><img className="center-block" src={currentValue}/></Carousel.Item>;
        });
    }

    render() {
        return (
            <Col xs={12} style={{paddingBottom: '5%'}}>
                <Col sm={3}>
                    {/*<Image className="center-block" src="http://via.placeholder.com/250x150" responsive/>*/}
                    <Carousel indicators={false}>
                        {this.renderImages()}
                    </Carousel>
                </Col>
                <Col sm={9}>
                    <Row><h4><b>{this.props.title}</b></h4></Row>
                    <Row><h5 dangerouslySetInnerHTML={{__html: this.props.content}}/></Row>
                </Col>
            </Col>
        )
    }
}

export default Project;