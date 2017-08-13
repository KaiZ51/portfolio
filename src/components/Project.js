import React, {Component} from 'react';
import {Row, Col, Carousel} from 'react-bootstrap';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    renderImages() {
        const height = this.props.height;

        return this.props.images.map(function (currentValue, index) {
            return <Carousel.Item key={index}><img className="center-block" src={currentValue}
                                                   style={{height: height}}/></Carousel.Item>;
        });
    }

    render() {
        return (
            <Col xs={12} style={{paddingBottom: '100px'}}>
                <Col md={4}>
                    {/*<Image className="center-block" src="http://via.placeholder.com/250x150" responsive/>*/}
                    <Carousel indicators={false}>
                        {this.renderImages()}
                    </Carousel>
                </Col>
                <Col id="col_content" md={8}>
                    <Row id="project_title"><h4><b>{this.props.title}</b></h4></Row>
                    <Row><h5 dangerouslySetInnerHTML={{__html: this.props.content}}/></Row>
                </Col>
            </Col>
        )
    }
}

export default Project;