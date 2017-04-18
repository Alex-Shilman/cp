import React, { Component } from 'react';
import { connect }          from 'react-redux';
import _find                from 'lodash/find';
import _unescape            from 'lodash/unescape';
import { loadCarReviews }   from '../../../../actions/carReviews';
import connectDataFetchers  from '../../../../lib/connectDataFetchers';

class Review extends Component {
    _renderReviews = (car) => {
        debugger;
        return <p>Hello</p>
    }

    render(){
        const { data, params, location: { query } } = this.props;
        const car = _find(data.cars, {
            year    : {year     : +params.year },
            make    : {niceName : params.make},
            model   : {niceName : params.model}
        });
        debugger;
        return(
            <div className="cp-Review container">
                <h2>{car.title}</h2>
                <div>
                    <img
                        width="100%"
                        height="100%"
                        src={`https://media.ed.edmunds-media.com${car.media.photos[3].sources[1].link.href}`} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: _unescape(car.body)}}></div>
            </div>
        );
    }
}

const mapStateToProps = ({reviews}) => ({
    ...reviews
});

export default connect(mapStateToProps)(
    connectDataFetchers(Review, [loadCarReviews]));