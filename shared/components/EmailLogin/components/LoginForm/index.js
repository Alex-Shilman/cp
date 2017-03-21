import React, { Component }     from 'react';
import { Field, reduxForm }     from 'redux-form';
import { connect }              from 'react-redux';
import { bindActionCreators}    from 'redux';
import Textfield                from 'react-mdl/lib/Textfield';
import Button                   from 'react-mdl/lib/Button';
import { login }                from '../../../../actions/user';

(process.env.BROWSER) && require('./LoginForm.less');


@connect(null, dispatch => (
    bindActionCreators({
        handleLogin: login
    }, dispatch)
))
@reduxForm({
    form: 'LoginForm'
})
export default class LoginForm extends Component {

    _renderTextField = ({input, label, meta: { touched, error }, ...custom}) => (
        <Textfield
            floatingLabel
            label={label}
            errorText={touched && error}
            style={{width:'100%'}}
            { ...input  }
            { ...custom }
        />
    )
    _onSubmit = (data) => {
        debugger;
        const { handleLogin } = this.props;
        handleLogin(data).then(resp => {
            debugger;
        });
    }

    render(){
        const { handleSubmit, buttonText, pristine, reset, submitting } = this.props;

        return (
          <form
              className="cp-LoginForm"
              onSubmit={handleSubmit(this._onSubmit)}>

                  <Field
                      name="email"
                      component={this._renderTextField}
                      label="Email"
                  />

                  <Field
                      name="password"
                      type="password"
                      component={this._renderTextField}
                      label="Password"
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