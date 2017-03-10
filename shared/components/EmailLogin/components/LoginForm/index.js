import React, { Component } from 'react';
import Textfield            from 'react-mdl/lib/Textfield';
import Button               from 'react-mdl/lib/Button';

(process.env.BROWSER) && require('./LoginForm.less');

export default class LoginForm extends Component {
    handleSubmit = (e) => {
       e.preventDefault();
    }

    render(){
        const { buttonText } = this.props;
        return (
          <form
              className="cp-LoginForm"
              onSubmit={this.handleSubmit}>
                  <Textfield
                      onChange={() => {}}
                      label="Email"
                      floatingLabel
                      style={{width:'100%'}}
                  />

                  <Textfield
                      onChange={() => {}}
                      label="Password"
                      floatingLabel
                      style={{width:'100%'}}
                  />

                <Button
                    className="cp-LoginForm__Submit"
                    raised
                    ripple
                    accent>
                    {buttonText}
                </Button>

          </form>
        );
    }
}