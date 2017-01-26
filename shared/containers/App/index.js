import React, { Component, PropTypes } from 'react';
import Footer from '../../components/Footer';
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
                <Footer/>
            </div>
        );
    }
}