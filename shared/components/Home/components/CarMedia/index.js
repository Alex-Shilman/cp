import React, { Component }     from 'react';
import Col                      from 'react-bootstrap/lib/Col';
import Row                      from 'react-bootstrap/lib/Row';
import Media                    from 'react-bootstrap/lib/Media';
import _unescape                from 'lodash/unescape';

(process.env.BROWSER) && require('./CarMedia.less');

export default class CardMedia extends Component {
    _renderCar = (car) => {
        debugger;
        const source = car.media.photos[0].sources[5];
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
                    <Media.Heading>{car.title}</Media.Heading>
                    <div dangerouslySetInnerHTML={{ __html: _unescape(car.body)}}></div>
                </Media.Body>
            </Media>
        );
    }
    render(){
        const { data: { cars }, isLoading, error } = this.props;
        debugger;
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