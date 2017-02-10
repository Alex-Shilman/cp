import React, { Component, PropTypes }  from 'react';
import { connect }                      from 'react-redux';
import Spinner                          from 'react-mdl/lib/Spinner';
import connectDataFetchers              from '../../../lib/connectDataFetchers';
import { loadCarList }                  from '../../../actions/carList';
import Container                        from '../../../components/common/Container';
import CarCard                          from './CarCard';
import ReactList                        from 'react-list';

import './Cars.less';

class Cars extends Component {
    _renderCarsGrid = (items, ref) => {
        return (
          <div className="cp-Cars__grid-container" ref={ref}>
              <div className="cp-Cars__grid">
                  { items }
              </div>
          </div>
        );
    }

    _renderCar = (index, key) => {
        debugger;
        const { data: { cars } } = this.props;
        const car = cars[index];
        return (
            <CarCard
                className="cp-Cars__car-card"
                make={car.make}
                model={car.model}
                year={car.year}
                image={car.image}
                key={key}
            />
        );
    }

    render(){
        const { data, isLoading, error } = this.props;
        return(
          <Container
             className="cp-Cars"
             title="Car List">
              {
                  (isLoading)
                    ? <Spinner />
                    : (data && data.cars.length)
                        ? <ReactList
                            itemRenderer={this._renderCar}
                            itemsRenderer={this._renderCarsGrid}
                            length={data.cars.length}
                            pageSize={24}
                            type="simple"
                          />
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