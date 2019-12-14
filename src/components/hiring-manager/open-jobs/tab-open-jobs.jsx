import React from 'react';
import JobsTable from './jobs-table';
import CandidatesTable from './job-candidates-table';


export default class OpenJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTable: 'jobs',
      jobListing: ''
    }
  }

  handleJobClick(event) {
    const jobName = event.target.innerText;
    this.setState({ currentTable: 'candidates', jobListing: jobName });
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
            <button type="button" className="btn btn-primary mx-3">Add Open Job</button>
            <button type="button" className="btn btn-primary mr-4">Add Candidate</button>
          </div>
        </div>
        {this.state.currentTable === 'jobs' ? (
          <JobsTable 
            handleJobClick={event => this.handleJobClick(event)}
          />
        ) : (
          <CandidatesTable />
        )}
      </div>
    )
  }
}