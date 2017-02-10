import React, { Component, PropTypes }  from 'react';
import { Card, CardTitle, CardActions } from 'react-mdl/lib/Card';
import cx from 'classnames';
import './CarCard.less';

class CarCard extends Component{
    render(){
        const { make, model, year, image, className } = this.props;

        return (
            <Card
                shadow={1}
                className={cx('cp-CarCard', className)}>

                <CardTitle>`${year} ${make} ${model}`</CardTitle>
                <div>
                    <img
                        className=""
                        src={image}
                    />
                </div>
                <CardActions
                    border>
                    Some actions
                </CardActions>
            </Card>
        );

    }
}

export default CarCard;