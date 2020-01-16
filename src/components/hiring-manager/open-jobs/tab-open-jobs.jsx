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
    return (
      <div className="container-fluid">
        <div className="row justify-content-between my-3">
        {this.state.jobListing.id ? (
          <div className="row col-xs-12 col-sm-4 ml-2">
            <h3 className="font-weight-bold my-0 ml-2">{this.state.jobListing.jobTitle}</h3>
              <h4 className="text-secondary ml-3 mt-1"><i className="fas fa-arrow-left" onClick={() => this.handleBackArrowClick()}></i></h4>
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