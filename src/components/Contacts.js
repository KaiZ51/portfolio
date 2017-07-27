import React, {Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <Row className="text-center" style={{paddingTop: '2%'}}>
                <h5>Below are some places where you can find me:</h5>
                <Col className="center-block" style={{width: '50%', paddingTop: '2%'}}>
                    <Table bordered hover>
                        <tbody>
                        <tr>
                            <td>Email</td>
                            <td>GitHub</td>
                            <td>LinkedIn</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}

export default Contacts;