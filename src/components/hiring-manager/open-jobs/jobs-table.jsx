import React from 'react';

export default class JobsTable extends React.Component {
  render() {
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
            <tr>
              <th scope="row" className="pt-3" onClick={this.props.handleJobClick}>Product Manager</th>
              <td className="pt-3">Growth</td>
              <td className="pt-3">$120000</td>
              <td className="pt-3">12/1/19</td>
              <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
              <td><button type="button" className="btn btn-danger btn-sm"><i className="fas fa-minus"></i></button></td>
            </tr>
            <tr>
              <th scope="row" className="pt-3">Senior Product Manager</th>
              <td className="pt-3">Platform</td>
              <td className="pt-3">$180000</td>
              <td className="pt-3">12/1/19</td>
              <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
              <td><button type="button" className="btn btn-danger btn-sm"><i className="fas fa-minus"></i></button></td>
            </tr>
            <tr>
              <th scope="row" className="pt-3">Associate Product Manager</th>
              <td className="pt-3">General</td>
              <td className="pt-3">$95000</td>
              <td className="pt-3">12/1/19</td>
              <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
              <td><button type="button" className="btn btn-danger btn-sm"><i className="fas fa-minus"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}