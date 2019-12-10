import React from 'react';
import Header from './layout/header';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './hiring-manager/login';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Login />
      </div>
    )
  }
}

export default withRouter(App);
