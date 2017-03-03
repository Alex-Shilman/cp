import React, { Component, PropTypes } from 'react';
import Dialog                          from '../common/Dialog';
import Icon                            from '../common/Icon';
(process.env.BROWSER) && require('./LoginDialog.less');

export default class LoginDialog extends Component{
    static propTypes = {
        isOpen         : PropTypes.bool.isRequired,
        title          : PropTypes.string,
        onRequestClose : PropTypes.func.isRequired
    }

    openLink = (URL) => {
        debugger;
        window.open(URL,  '_self')
    }

    onSocialLogin = (type) => {
        debugger;
        let redirectUrl = `/auth/${type}?redirectTo=${window.location.pathname}`;
        this.openLink(redirectUrl);
    }

    onEmailLogin = () => {

    }

    render(){
        const { title, onSocialLogin, onEmailLogin } = this.props;

        return (
            <div className='cp-LoginDialog'>
                <Dialog
                    title = {title}
                    {...this.props}
                >
                    <h4 className='cp-LoginDialog__title'>
                        Sign in with your social network account to continue
                    </h4>

                    <div className='cp-LoginDialog__buttons-container'>
                        <div
                            className='cp-LoginDialog__button cp-LoginDialog__button--facebook'
                            onClick={this.onSocialLogin.bind(null, 'facebook')}
                        >
                            <Icon type='facebook' className='cp-LoginDialog__icon' />
                        </div>

                        <div
                            className='cp-LoginDialog__button cp-LoginDialog__button--google'
                            onClick={this.onSocialLogin.bind(null, 'google')}
                        >
                            <Icon type='google-plus' className='cp-LoginDialog__icon' />
                        </div>

                        <div
                            className='cp-LoginDialog__button cp-LoginDialog__button--linkedin'
                            onClick={this.onSocialLogin.bind(null, 'linkedin')}
                        >
                            <Icon type='linkedin' className='cp-LoginDialog__icon' />
                        </div>

                    </div>

                    <h4 className='cp-LoginDialog__title cp-LoginDialog__title--clickable' onClick={this.onEmailLogin}>
                        or use your e-mail
                    </h4>
                </Dialog>
            </div>
        );
    }
}