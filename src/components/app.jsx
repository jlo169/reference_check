import React from 'react';
import Header from './layout/header';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        pug pug
      </div>
    )
  }
}

export default withRouter(App);
