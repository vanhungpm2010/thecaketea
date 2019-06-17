import React, { Component } from 'react'
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { Redirect } from 'react-router-dom';

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
export default class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: '',
      toAdmin: false
    }
  }
  onSubmit(e){
    e.preventDefault();
    this.form.validateAll();

    var formData = new FormData();
    formData.append('email', e.target.email.value);
    formData.append('password',e.target.password.value);

    if ( this.checkBtn.context._errors.length === 0 ) {
      axios.post('/api/account/dangnhap', { email : e.target.email.value, password : e.target.password.value})
      .then(res => {
       if(res.data == 'success'){
          this.setState(() => ({
            toAdmin: true
          }))
       }
      })
    }
  }
  
  render() {
    if (this.state.toAdmin === true) {
      return <Redirect to='/admin' />
    }
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
                        validations={[required]}
                    />
                    <button className="btn btn-info btn-block login" type="submit">Login</button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                </Form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
