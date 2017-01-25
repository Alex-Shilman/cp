import React, { Component } from 'react';

(process.env.BROWSER) && require('./Home.scss');

export default class Home extends Component {
    render(){
        return (
            <div className='cp-Home'>
                Home
            </div>
        );
    }
}
