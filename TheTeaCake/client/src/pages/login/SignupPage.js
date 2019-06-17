import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
      return <small className="form-text text-danger">Invalid email format</small>;
  }
}

const minLength = (value) => {
  if (value.trim().length < 6) {
      return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
  }
}
export default class SignupPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: ''
    }
  }
  onSubmit(e){
    e.preventDefault();
    this.form.validateAll();

    if ( this.checkBtn.context._errors.length === 0 ) {
       alert('success');
    }
  }
  
  render() {
    return (

      <div className="limiter">
        <div className="container-login100" style={{ backgroundImage: 'url(images/loginpage.jpg)', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} >
          <div className="wrap-login100">
            <div className="login100-form-title" style={{ backgroundImage: 'url(images/bg-01.jpg)' }}>
              <span className="login100-form-title-1">
                <b>Sign In</b>
              </span>
            </div>
            <div className="form-box">
                <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                    <Input 
                        name="email" 
                        onChange={this.onChangeHandler}
                        type="text" 
                        placeholder="Email"
                        className="form-control" 
                        validations={[required, email]}
                    />
                    <Input 
                        name="password" 
                        onChange={this.onChangeHandler}
                        type="password" 
                        placeholder="Password"
                        className="form-control"
                        validations={[required,minLength]}
                    />
                    <button className="btn btn-info btn-block login" type="submit">Sign up</button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                </Form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
