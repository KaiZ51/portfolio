import React, {Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import '../font-awesome/css/font-awesome.min.css';

export default class Contacts extends Component {
    render() {
        return (
            <Row className="text-center" style={{paddingTop: '50px'}}>
                <h5>Below are some places where you can find me:</h5>

                <Col className="center-block contacts-table">
                    <Table bordered>
                        <tbody>
                        <tr>
                            <td>
                                <a href="mailto:pedrosilvadev51@gmail.com">
                                    <FontAwesome name='envelope' className="contacts-table-icon"/>Email
                                </a>
                            </td>
                            <td>
                                <a href="https://github.com/KaiZ51">
                                    <FontAwesome name='github' className="contacts-table-icon"/>GitHub
                                </a>
                            </td>
                            <td>
                                <a href="https://www.linkedin.com/in/pedro-silva-497706128/">
                                    <FontAwesome name='linkedin-square' className="contacts-table-icon"/>LinkedIn
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}