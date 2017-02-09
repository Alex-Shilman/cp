import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import connectDataFetchers from '../../../lib/connectDataFetchers';
import { loadCarList } from '../../../actions/carList';
import Container from '../../../components/common/Container';


class Cars extends Component {
    render(){
        return(
          <Container
             className="cp-Cars"
             title="Car List">
            Car List
          </Container>
        );
    }
}

const mapStateToProps = ({cars}) => ({
    data: cars.data,
    isLoading: cars.isLoading,
    error: cars.error
});


export default connect(mapStateToProps)(
    connectDataFetchers(Cars, [loadCarList]));