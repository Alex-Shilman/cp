import React, { Component, PropTypes }  from 'react';
import { Card, CardTitle, CardActions } from 'react-mdl/lib/Card';
import IconButton                       from 'react-mdl/lib/IconButton';
import Button                           from 'react-mdl/lib/Button';
import cx from 'classnames';

(process.env.BROWSER) && require('./CarCard.less');

class CarCard extends Component{
    render(){
        const { make, model, year, image, className } = this.props;

        return (
            <Card
                shadow={1}
                className={cx('cp-CarCard', className)}>

                <CardTitle className="cp-CarCard__head">
                    <div className="cp-CarCard__info">
                        <img
                            className="cp-CarCard__avatar"
                            src="//www.awzqt.com/wp-content/uploads/2016/11/Nice-Ferrari-Dealership-on-Car-Image-With-Ferrari-Dealership.jpg"
                        />
                        <div className="cp-CarCard__name-author">Dealer name</div>
                    </div>

                </CardTitle>
                <div className="cp-CarCard__media">
                    <img
                        className=""
                        style={{width:'100%', height:'100%'}}
                        src={image}
                    />
                </div>
                <div className="cp-CarCard__content">
                    <div className="cp-CarCard__description">
                        {`${year} ${make} ${model}`}
                    </div>
                </div>

                <CardActions
                    border
                    className="cp-CarCard__actions">
                    <div>
                        <IconButton
                            colored
                            className = 'cp-CarCard__share-button'
                            name      = 'share'
                        />
                    </div>
                    <Button
                        ripple
                        className = 'cp-CarCard__more-button'>
                        View details
                    </Button>
                </CardActions>
            </Card>
        );

    }
}

export default CarCard;