import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import { showLogin }            from '../actions/user';

@connect(({user}) => ({
    user
}), dispatch => (
    bindActionCreators({
        showLogin
    }, dispatch)
))
export const requireAuth = (WrappedComponent) => {
    return class AuthenticatedComponent extends Component {
        componentDidMount(){
            debugger;
            const { user, showLogin } = this.props;
            (!user.authenticated) && showLogin();
        }
        render(){
            debugger;
            const { user } = this.props;

            return (
                <div className="cp-requireAuth">
                    {
                        (user.authenticated)
                            ? <WrappedComponent {...this.props}/>
                            : <p>You are not authorized to see this page.</p>
                    }
                </div>
            );
        }

    }
}