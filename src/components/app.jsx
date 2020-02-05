import React from 'react';
import Header from './layout/header';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './shared/login';
import Home from './shared/home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSessionData: {
        id: null,
        type: null
      }
    }

    this.loginButton = this.loginButton.bind(this);
  }

  loginButton(loginInfo) {
    const id = {id: loginInfo.email, type: loginInfo.type};
    this.setState({ userSessionData: id }, () => {
      this.props.history.push({
        pathname: `/dashboard`
      });
    });
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={props =>
            <Login {...props}
              loginButton={this.loginButton}
            />
          }/>
          <Route exact path="/dashboard" render={props =>
            <Home {...props}
            />
          }/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
