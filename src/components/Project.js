import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Carousel} from 'react-bootstrap';

export default class Project extends Component {
    renderImages() {
        return this.props.images.map((currentValue, index) => {
            return (
                <Carousel.Item key={index}>
                    <img className="center-block" src={currentValue} style={{maxHeight: this.props.height}}/>
                </Carousel.Item>
            );
        });
    }

    render() {
        return (
            <Col xs={12} style={{paddingBottom: '100px'}}>
                <Col md={4}>
                    <Carousel indicators={false}>
                        {this.renderImages()}
                    </Carousel>
                </Col>
                <Col id="col_content" md={8}>
                    <Row id="project_title"><h4><b>{this.props.title}</b></h4></Row>
                    <Row><h5 dangerouslySetInnerHTML={{__html: this.props.content}}/></Row>
                </Col>
            </Col>
        );
    }
}

Project.propTypes = {
    height: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};