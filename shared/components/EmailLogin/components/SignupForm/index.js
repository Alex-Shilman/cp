import React, { Component }     from 'react';
import { Field, reduxForm }     from 'redux-form';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import Textfield                from 'react-mdl/lib/Textfield';
import Button                   from 'react-mdl/lib/Button';
import { signup }               from '../../../../actions/user';

@connect(null, dispatch => (
    bindActionCreators({
        handleSignup: signup
    }, dispatch)
))
@reduxForm({
    form: 'SignupForm'
})
export default class SignupForm extends Component {
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
        const { handleSignup } = this.props;
        handleSignup(data).then(resp => {
           debugger;
        });

    }

    render(){
        const { handleSubmit, buttonText, pristine, reset, submitting } = this.props;

        return (
          <form
            className="cp-SignupForm"
            onSubmit={handleSubmit(this._onSubmit)}>

              <Field
                  name="email"
                  component={this._renderTextField}
                  label="Email"
              />

              <Field
                  name="first_name"
                  component={this._renderTextField}
                  label="First name"
              />

              <Field
                  name="last_name"
                  component={this._renderTextField}
                  label="Last Name"
              />

              <Field
                  name="password"
                  component={this._renderTextField}
                  label="Password"
              />

              <Field
                  name="confirm_password"
                  component={this._renderTextField}
                  label="Confirm Password"
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