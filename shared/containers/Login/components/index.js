import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import Row                  from 'react-bootstrap/lib/Row';

export default class Login extends Component {
    render(){
        const { children } = this.props;

        return (
            <div className="cp-Login container">
                <Row>
                    <Col md={3}>{children.sidebar}</Col>
                    <Col md={9}>{children.content}</Col>
                </Row>
            </div>
        );
    }
}