import React, { Component, PropTypes } from 'react';
import Footer from '../../components/Footer';
if(process.env.BROWSER){
    require( 'react-widgets/dist/css/react-widgets.css');
    require('./App.scss');
}




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