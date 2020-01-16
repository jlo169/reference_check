import React from 'react';
import axios from 'axios';
import JobsTable from './jobs-table';
import CandidatesTable from './job-candidates-table';


export default class OpenJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTable: 'jobs',
      jobListing: [],
      candidates: []
    }

    this.getJobCandidates = this.getJobCandidates.bind(this);
  }

  getJobCandidates(event) {
    const jobId = parseInt(event.target.getAttribute('value'));
    const jobListing = this.props.jobListings.filter(job => job.id === jobId);

    axios.get(`/api/openJobs/${jobId}`)
      .then(response => {
        console.log(response.data)
        this.setState({ 
          currentTable: 'candidates', 
          jobListing: jobListing[0],
          candidates: response.data
        })
      })
      .catch(error => console.error(error));
  }

  handleBackArrowClick() {
    this.setState({ currentTable: 'jobs', jobListing: [] });
  }

  render() {
    const job = this.state.jobListing;
    let desiredOutcomes;
    console.log('job',job)

    if (job.id) {
      desiredOutcomes = job.desiredOutcomes;
      desiredOutcomes = JSON.parse(desiredOutcomes)
      desiredOutcomes = desiredOutcomes.map((listItem, i) => <li key={i}>{listItem}</li>);
    }

    return (
      <div className="container-fluid">
        <div className="row justify-content-between my-3">
        {job.id ? (
          <div className="row col-12 ml-2">
            <p className="col-12 text-secondary my-1 pl-0" onClick={() => this.handleBackArrowClick()}><i className="fas fa-arrow-left mr-1"></i>Back to jobs</p>
            <h3 className="col-12 font-weight-bold my-0 ml-2 mb-2">{job.jobTitle}</h3>
            <div className="row col-xs-12 col-sm-8">
              <h5 className="col-xs-12 col-sm-6">Focus Area: {job.focusArea}</h5>
              <h5 className="col-xs-12 col-sm-6">Salary: ${job.salary}</h5>
              <h5 className="col-12">Job Mission: {job.jobMission}</h5>

              {desiredOutcomes ? (
                <ul className="col">
                  {desiredOutcomes}
                </ul>
              ) : (
                <div></div>
              )}
            </div>
            <div className="row col-xs-12 col-sm-4">
              <h5>Targetted Skills</h5>
            </div>
          </div>
        ) : (
          <div className="row col-12 justify-content-end">
            <button type="button" className="btn btn-primary mx-3" onClick={() => this.props.addJob()}>Add Open Job</button>
          </div>
        )}
        </div>
        {this.state.currentTable === 'jobs' ? (
          <JobsTable 
            handleJobClick={event => this.handleJobClick(event)}
            jobListings={this.props.jobListings}
            jobCandidates={this.getJobCandidates}
            deleteJob={this.props.deleteJob}
            addCandidate={this.props.addCandidate}
          />
        ) : (
          <CandidatesTable 
            candidates={this.state.candidates}
            getJobCandidates={this.getJobCandidates}
          />
        )}
      </div>
    )
  }
}