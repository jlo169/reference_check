import React from 'react';

export default class Candidates extends React.Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-4">
            <h3 className="font-weight-bold">Jon Snow</h3>
            <div className="border-top pt-2">Applying for: Product Manager, Growth</div>
            <div>Identified Focus Areas: Growth, Data</div>
          </div>
          <div className="col-8 border-left">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <button className="nav-link active">Averages</button>
              </li>
              <li className="nav-item mx-2">
                <button className="nav-link">Referencer Assessments</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Self Assessment</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}