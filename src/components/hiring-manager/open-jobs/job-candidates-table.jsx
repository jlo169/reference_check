import React from 'react';
import JobCandidateListing from './job-candidates-listing';

export default class CandidatesTable extends React.Component {
  render() {
    const candidates = this.props.candidates.map( candidate => 
      <JobCandidateListing 
        candidate = {candidate}
        key = {candidate.id}
      />
    )

    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark center-text">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">LinkedIn</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">Ask for References</th>
            </tr>
          </thead>
          <tbody className="center-text">
            {candidates}
          </tbody>
        </table>
      </div>
    )
  }
}