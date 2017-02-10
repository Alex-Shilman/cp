import React, { Component, PropTypes } from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Nav';
if(process.env.BROWSER){
    require( 'react-widgets/dist/css/react-widgets.css');
    require('./App.less');
}




export default class App extends Component{
    static propTypes = {
       children: PropTypes.object
    }

    render(){
        const { children } = this.props;
        return(
            <div className='cp-App'>
                <Navigation />
                { children }
                <Footer/>
            </div>
        );
    }
}