import React from 'react';
import Candidates from './candidates/tab-candidates';
import Dashboard from './dashboard/tab-dashboard';
import OpenJobs from './open-jobs/tab-open-jobs';
import "./hiring-manager.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'openJobs'
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
      case "openJobs":
        currentTab = <OpenJobs />
        break;
      case "candidates":
        currentTab = <Candidates />
        break;
      default:
        currentTab = <Dashboard />
    }

    return (
      <div className="container-fluid">
        <ul className="nav nav-tabs mt-2">
          <li className="nav-item">
            <a className="nav-link pointer-cursor active" name="dashboard" data-toggle="tab" href="#" onClick={this.handleTabClick}> 
              Dashboard 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pointer-cursor" name="openJobs" data-toggle="tab" href="#" onClick={this.handleTabClick}>
              Open Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pointer-cursor" name="candidates" data-toggle="tab" href="#" onClick={this.handleTabClick}>
              Candidates
            </a>
          </li>
        </ul>
        {currentTab}
    </div>
    )
  }
}