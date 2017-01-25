import React, { Component, PropTypes } from 'react';

(process.env.BROWSER) && require('./App.scss');

export default class App extends Component{
    static propTypes = {
       children: PropTypes.object
    }

    render(){
        const { children } = this.props;
        return(
            <div className='cp-App'>
                { children }
            </div>
        );
    }
}