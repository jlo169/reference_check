import React from 'react';
import Candidates from './tab-candidates';
import Dashboard from './tab-dashboard';
import OpenJobs from './tab-open-jobs';
import "./hiring-manager.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'dashboard'
    }
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    const tab = event.currentTarget.getAttribute('name');
    this.setState({ currentTab: tab })
  } 

  render() {
    let currentTab;
    switch (this.state.currentTab) {
      case "dashboard":
        currentTab = <Dashboard />
        break;
      case "openJobs":
        currentTab = <OpenJobs />
        break;
      case "candidates":
        currentTab = <Candidates />
    }

    return (
      <div className="container-fluid">
        <ul className="nav nav-tabs mt-2">
          <li className="nav-item">
            <a className="nav-link active" name="dashboard" data-toggle="tab" onClick={this.handleTabClick}> 
              Dashboard 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="openJobs" data-toggle="tab" onClick={this.handleTabClick}>
              Open Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" name="candidates" data-toggle="tab" onClick={this.handleTabClick}>
              Candidates
            </a>
          </li>
        </ul>
        {currentTab}
    </div>
    )
  }
}