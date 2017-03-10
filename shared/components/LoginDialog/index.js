import React, { Component, PropTypes } from 'react';
import Dialog                          from '../common/Dialog';
import Icon                            from '../common/Icon';
import EmailLogin                      from '../EmailLogin';
import _delay                          from 'lodash/delay';
import _bind                           from 'lodash/bind';

(process.env.BROWSER) && require('./LoginDialog.less');

export default class LoginDialog extends Component{
    state = {
        EmailLoginOpenToggle: false
    }

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
        let redirectUrl = `/auth/${type}?continue=${(window.location.pathname + window.location.search).replace(/&/g, '%26')}`;
        this.openLink(redirectUrl);
    }

    onEmailLogin = () => {
        const { EmailLoginOpenToggle } = this.state;
        this.setState({EmailLoginOpenToggle: !EmailLoginOpenToggle});
    }

    _componentDidUpdate(prevProps, prevState){
        _delay(_bind(
            () => { this.setState({EmailLoginOpenToggle: true})},
        this), 1000);
    }

    render(){
        const { title, onSocialLogin, onEmailLogin } = this.props;
        const { EmailLoginOpenToggle } = this.state;

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

                    <EmailLogin isExtended={EmailLoginOpenToggle}/>
                </Dialog>
            </div>
        );
    }
}