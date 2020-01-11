import React from 'react';
import axios from 'axios';
import JobsTable from './jobs-table';
import CandidatesTable from './job-candidates-table';


export default class OpenJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTable: 'jobs',
      jobListing: '',
      candidates: []
    }

    this.getJobCandidates = this.getJobCandidates.bind(this);
  }

  getJobCandidates(event) {
    const jobId = event.target.getAttribute('value');
    const jobListing = event.target.innerText;

    axios.get(`/api/openJobs/${jobId}`)
      .then(response => {
        this.setState({ 
          currentTable: 'candidates', 
          jobListing: jobListing,
          candidates: response.data
        })
      })
      .catch(error => console.error(error));
  }

  handleBackArrowClick() {
    this.setState({ currentTable: 'jobs', jobListing: '' });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-between my-3">
          <div className="row col-xs-12 col-sm-4 ml-2">
            <h3 className="font-weight-bold my-0 ml-2">{this.state.jobListing}</h3>
            {this.state.jobListing ? (
              <h4 className="text-secondary ml-3 mt-1"><i className="fas fa-arrow-left" onClick={() => this.handleBackArrowClick()}></i></h4>
            ) : (
              <div></div>
            )}
          </div>
          <div className="row col-xs-12 col-sm-4 justify-content-end">
            <button type="button" className="btn btn-primary mx-3" onClick={() => this.props.addJob()}>Add Open Job</button>
            <button type="button" className="btn btn-primary mr-4">Add Candidate</button>
          </div>
        </div>
        {this.state.currentTable === 'jobs' ? (
          <JobsTable 
            handleJobClick={event => this.handleJobClick(event)}
            jobListings={this.props.jobListings}
            jobCandidates={this.getJobCandidates}
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