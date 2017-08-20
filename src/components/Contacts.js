import React, {Component} from 'react';
import {Row, Col, Table} from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <Row className="text-center" style={{paddingTop: '50px'}}>
                <h5>Below are some places where you can find me:</h5>
                <Col className="center-block" style={{width: '50%', paddingTop: '2%'}}>
                    <Table bordered>
                        <tbody>
                        <tr>
                            <td><a href="mailto:webmaster@example.com">Email</a></td>
                            <td><a href="https://github.com/KaiZ51">GitHub</a></td>
                            <td><a href="#">LinkedIn</a></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}

export default Contacts;