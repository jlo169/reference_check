import React from 'react';
import axios from 'axios';
import Candidates from './candidates/tab-candidates';
import Dashboard from './dashboard/tab-dashboard';
import OpenJobs from './open-jobs/tab-open-jobs';
import AddJob from './form-add-job';
import AddCandidate from './form-add-candidate';
import "./hiring-manager.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'dashboard',
      openJobs: [],
      targetId: 0
    }
    this.handleTabClick = this.handleTabClick.bind(this);
    this.getOpenJobs = this.getOpenJobs.bind(this);
    this.addJobButton = this.addJobButton.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.handleAddCandidateButton = this.handleAddCandidateButton.bind(this);
    this.addCandidateToJob = this.addCandidateToJob.bind(this);
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
    data['dateCreated'] = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

    axios.post('/api/openJobs', data)
      .then(response => {
        const openJobsArr = [...this.state.openJobs, response.data.data.insertedJob];
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

  deleteJob(id) {
    axios.delete(`/api/openJobs/${id}`)
      .then(() => {
        const jobArr = [...this.state.openJobs];
        const updatedJobArr = jobArr.filter(job => job.id !== id);
        this.setState({ openJobs: updatedJobArr });
      })
      .catch(error => console.error(error));
  }

  handleAddCandidateButton(id) {
    this.setState({ currentTab: 'addCandidate', targetId: id});
  }

  addCandidateToJob(data) {
    let d = new Date();
    data['dateCreated'] = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

    axios.post('/api/candidates', data)
      .then(() => {
        this.setState({ currentTab: 'openJobs' })
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
          deleteJob = {this.deleteJob}
          addCandidate = {this.handleAddCandidateButton}
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
      case "addCandidate":
        currentTab = <AddCandidate 
          targetId={this.state.targetId}
          addCandidateToJob={this.addCandidateToJob}
        />
        break;
      default:
        currentTab = <Dashboard />
    }

    return (
      <div className="container-fluid">
        <ul className="nav nav-tabs mt-2">
          <li className="nav-item">
            <a className="nav-link pointer-cursor active" name="dashboard" data-toggle="tab" href="/dashboard" onClick={this.handleTabClick}> 
              Dashboard 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pointer-cursor" name="openJobs" data-toggle="tab" href="/openjobs" onClick={this.handleTabClick}>
              Open Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pointer-cursor" name="candidates" data-toggle="tab" href="/candidates" onClick={this.handleTabClick}>
              Candidates
            </a>
          </li>
        </ul>
        {currentTab}
    </div>
    )
  }
}