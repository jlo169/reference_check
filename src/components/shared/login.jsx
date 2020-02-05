import React from 'react';
import './hiring-manager.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogIn(event) {
    event.preventDefault();
    const loginInfo = { email: this.state.email, password: this.state.password, type: 'employer'};
    this.props.loginButton(loginInfo);
  }

  render() {
    return (
      <div className="container-fluid">
        <form className="col-xs-12 col-md-4 offset-md-4 mt-login">
          <div className="form-group row">
            
            <input 
              type="email" 
              className="form-control center-text" 
              name="email"
              placeholder="Email"
              value={this.state.email} 
              onChange={event => this.handleFormChange(event)}
            />
          </div>
          <div className="form-group row">
            <input 
              type="password" 
              className="form-control center-text"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={event => this.handleFormChange(event)}
            />
          </div>

          <div className="row justify-content-center">
            <button type="submit" className="btn btn-primary px-5" onClick={event => this.handleLogIn(event)}>Log In</button>
          </div>

          <div className="row justify-content-center mt-3">
            <i className="fab fa-facebook-square mt-1 mr-1"></i>
            <div>Sign in with Facebook</div>
          </div>
          <div className="row justify-content-center mt-1">
            <i className="fab fa-linkedin mt-1 mr-1"></i>
            <div>Sign in with LinkedIn</div>
          </div>

          <div className="row justify-content-center mt-1 pb-3">
            <div className="font-weight-light"><u><small>Forgot password?</small></u></div>
          </div>

          <div className="row justify-content-center pt-3 border-top">
            <div><u>No Account? Sign Up</u></div>
          </div>
        </form>
      </div>
    )
  }
}