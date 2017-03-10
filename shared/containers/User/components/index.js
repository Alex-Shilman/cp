import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import Row                  from 'react-bootstrap/lib/Row';

(process.env.BROWSER) && require('./User.less');

export default class User extends Component {
    render(){
        const { children, sidebar, content } = this.props;
        return (
            <div className="cp-User container">
                <Row>
                    <Col md={3}>{sidebar}</Col>
                    <Col md={9}>{content}</Col>
                </Row>
            </div>
        );
    }
}