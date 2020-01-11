import React from 'react';
import axios from 'axios';
import Candidates from './candidates/tab-candidates';
import Dashboard from './dashboard/tab-dashboard';
import OpenJobs from './open-jobs/tab-open-jobs';
import AddJob from './form-add-job';
import "./hiring-manager.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'dashboard',
      openJobs: []
    }
    this.handleTabClick = this.handleTabClick.bind(this);
    this.getOpenJobs = this.getOpenJobs.bind(this);
    this.addJobButton = this.addJobButton.bind(this);
  }

  handleTabClick(event) {
    const tab = event.currentTarget.getAttribute('name');
    this.setState({ currentTab: tab })
  } 

  addJobButton() {
    this.setState({ currentTab: 'addJob' })
  }

  addJob(data) {
    let d = new Date();
    console.log(d.toDateString())
    data['dateCreated'] = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    axios.post('/api/openJobs', data)
      .then(response => {
        if (response.data.success) {
          console.log('job post is successful', response.data.data)
        }
        console.log('response.data is', response.data);
        const openJobsArr = [...this.state.openJobs, response.data.data.insertedJob];
        console.log(openJobsArr);
        this.setState({ currentTab: 'openJobs', openJobs: openJobsArr })
      })
      .catch(err => console.error(err));
  }

  getOpenJobs() {
    axios.get('/api/openJobs')
      .then(response => {
        this.setState({ openJobs: response.data });
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getOpenJobs();
  }

  render() {
    let currentTab;
    switch (this.state.currentTab) {
      case "openJobs":
        currentTab = <OpenJobs 
          jobListings = {this.state.openJobs}
          addJob = {this.addJobButton}
        />
        break;
      case "candidates":
        currentTab = <Candidates />
        break;
      case "addJob":
        currentTab = <AddJob 
          addJob = {event => this.addJob(event)}
        />
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