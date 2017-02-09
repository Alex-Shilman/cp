import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import connectDataFetchers from '../../../lib/connectDataFetchers';
import { loadCarList } from '../../../actions/carList';
import Container from '../../../components/common/Container';


class Cars extends Component {
    _renderCars = (cars) => {
        return cars.map(car => (
            <div>
                <span>{car.make}</span>
                <span>{car.model}</span>
                <span>{car.year}</span>
            </div>
        ))
    }
    render(){
        const { data, isLoading, error } = this.props;
        return(
          <Container
             className="cp-Cars"
             title="Car List">
              {
                  (isLoading)
                    ? 'Loading...'
                    : (data && data.cars.length)
                        ? this._renderCars(data.cars)
                        : 'There is no data'
              }
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