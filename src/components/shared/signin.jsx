import React from 'react';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleFormChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSignUp(event) {
    event.preventDefault();
    console.log('handleSignUp is',this.state);
  }

  render() {
    return (
      <div className='container-fluid'>
        <form className='col-12'>
          <div className="form-group row">
            <input 
              type="text" 
              className="form-control center-text" 
              name="username"
              placeholder="Username"
              value={this.state.username} 
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

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label class="form-check-label" for="defaultCheck1">
              Default checkbox
            </label>
          </div>

          <div className="row justify-content-center">
            <button 
              type='submit' 
              className="btn btn-primary"
              onClick={event => this.handleSignUp(event)}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    )
  }
}