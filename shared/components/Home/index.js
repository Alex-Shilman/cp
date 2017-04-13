import React, { Component } from 'react';
import Col                  from 'react-bootstrap/lib/Col';
import Row                  from 'react-bootstrap/lib/Row';
import Banner               from './components/Banner';
import CarMedia             from './components/CarMedia';
import { connect }          from 'react-redux';
import { loadCarReviews }   from '../../actions/carReviews';
import connectDataFetchers  from '../../lib/connectDataFetchers';


(process.env.BROWSER) && require('./Home.scss');

class Home extends Component {
    render(){
        const { reviews } = this.props;
        return (
            <div className="cp-Home">
                <Banner />
                <div className="container">
                    <CarMedia { ...reviews }/>
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

const mapStateToProps = ({reviews}) => ({
    reviews: { ...reviews }
});

export default connect(mapStateToProps)(
    connectDataFetchers(Home, [loadCarReviews]));
