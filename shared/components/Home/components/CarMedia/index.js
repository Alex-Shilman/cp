import React, { Component }     from 'react';
import Col                      from 'react-bootstrap/lib/Col';
import Row                      from 'react-bootstrap/lib/Row';
import Media                    from 'react-bootstrap/lib/Media';
import _unescape                from 'lodash/unescape';
import _truncate                from 'lodash/truncate';
import { withRouter }           from 'react-router';

(process.env.BROWSER) && require('./CarMedia.less');

@withRouter
export default class CardMedia extends Component {
    _renderCar = (car) => {
        debugger;
        const source = car.media.photos[0].sources[5];
        const {title, year, make, model} = car;
        return (
            <Media className="cp-CarMedia__Media-Card">
                <Media.Left>
                    <img
                        width={source.size.width}
                        height={source.size.height}
                        src={`https://media.ed.edmunds-media.com${source.link.href}`}
                    />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{title}</Media.Heading>
                    <div
                        onClick={this._handleClick}
                        dangerouslySetInnerHTML={{ __html: _unescape(`${_truncate(car.driving,{'length': 200, 'separator': /\b/ig})} <a href='/editorials/${year.year}/${make.niceName}/${model.niceName}' data-navigate-to='/editorials/${year.year}/${make.niceName}/${model.niceName}'>more</a>`)}}>
                    </div>
                </Media.Body>
            </Media>
        );
    }

    _handleClick = (e) => {
        e.preventDefault();
        const target = e.target;
        (target.nodeName === 'A' && target.getAttribute('data-navigate-to'))
            && this.props.router.push(target.getAttribute('href'));
    }

    render(){
        const { data: { cars }, isLoading, error } = this.props;
        return(
            <div className="cp-CarMedia">
                <Row>
                    <Col md={6}>
                        <h3>Reviews</h3>
                        {cars.map(this._renderCar)}
                    </Col>
                    <Col md={6}>
                        <h3>Test Drives</h3>
                        {cars.map(this._renderCar)}
                    </Col>
                </Row>
            </div>
        );
    }

}