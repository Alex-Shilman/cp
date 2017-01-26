import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Banner from './components/Banner';
import Nav from '../Nav';

(process.env.BROWSER) && require('./Home.scss');

export default class Home extends Component {
    render(){
        return (
            <div className="cp-Home">
                <Nav />
                <Banner />
                <div className="container">
                    <Row>
                        <Col md={4}>One</Col>
                        <Col md={4}>Two</Col>
                        <Col md={4}>Three</Col>
                    </Row>
                </div>
            </div>
        );
    }
}
