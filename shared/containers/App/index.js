import React, { Component, PropTypes } from 'react';
import Footer                          from '../../components/Footer';
import Navigation                      from '../../components/Nav';
import LoginDialog                     from '../../components/LoginDialog';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';
import { showLogin, hideLogin }        from '../../actions/user';

if(process.env.BROWSER){
    require( 'react-widgets/dist/css/react-widgets.css');
    require('./App.less');
}



@connect((state, ownProps) => ({
    user: state.user
}), dispatch => (
    bindActionCreators({
        showLogin, hideLogin
    }, dispatch)
))
export default class App extends Component{
   
    static propTypes = {
       children: PropTypes.object
    }

    render(){
        const { children, showLogin, hideLogin, user: { isShowLogin } }    = this.props;

        return(
            <div className='cp-App'>
                <Navigation signIn={showLogin}/>
                { children }

                <LoginDialog
                    isOpen={isShowLogin}
                    onRequestClose={hideLogin}
                />
                <Footer/>
            </div>
        );
    }
}