import React from 'react';
import JobsListing from './jobs-listing';

export default class JobsTable extends React.Component {
  render() {
    const jobListing = this.props.jobListings.map( job => 
      <JobsListing 
        job = {job}
        key = {job.id}
      />
    )

    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark center-text">
            <tr>
              <th scope="col">Open Jobs</th>
              <th scope="col">Focus Area</th>
              <th scope="col">Salary</th>
              <th scope="col">Date Created</th>
              <th scope="col">Add Candidate</th>
              <th scope="col">Close Job</th>
            </tr>
          </thead>
          <tbody className="center-text">
            {jobListing}
          </tbody>
        </table>
      </div>
    )
  }
}