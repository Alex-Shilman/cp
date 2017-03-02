import React, { Component, PropTypes } from 'react';
import Footer                          from '../../components/Footer';
import Navigation                      from '../../components/Nav';
import LoginDialog                     from '../../components/LoginDialog';

if(process.env.BROWSER){
    require( 'react-widgets/dist/css/react-widgets.css');
    require('./App.less');
}




export default class App extends Component{
    state = {
        isLoggingIn: false
    }

    static propTypes = {
       children: PropTypes.object
    }

    signIn = () => {
        this.setState({ isLoggingIn: true });
    }

    render(){
        const { children }    = this.props;
        const { isLoggingIn } = this.state;
        return(
            <div className='cp-App'>
                <Navigation signIn={this.signIn}/>
                { children }

                <LoginDialog
                    isOpen={isLoggingIn}

                />
                <Footer/>
            </div>
        );
    }
}