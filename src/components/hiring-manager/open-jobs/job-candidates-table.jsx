import React from 'react';

export default class CandidatesTable extends React.Component {
  render() {
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
            <tr>
              <th scope="row" className="pt-3">Jon Snow</th>
              <td className="pt-3">jsnow@thewall.com</td>
              <td className="pt-3">linkedin.com/in/jsnow</td>
              <td className="pt-3">1234567890</td>
              <td className="pt-3">12/1/19</td>
              <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
            </tr>
            <tr>
              <th scope="row" className="pt-3">Jorah Mormont</th>
              <td className="pt-3">jbear@khaleesi.com</td>
              <td className="pt-3">linkedin.com/in/jorahtheexplorah</td>
              <td className="pt-3">1234567890</td>
              <td className="pt-3">12/1/19</td>
              <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
            </tr>
            <tr>
              <th scope="row" className="pt-3">Sam Tarly</th>
              <td className="pt-3">mtarly@citadel.com</td>
              <td className="pt-3">linkedin.com/in/mtarly</td>
              <td className="pt-3">1234567890</td>
              <td className="pt-3">12/1/19</td>
              <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
            </tr>
            <tr>
              <th scope="row" className="pt-3">Pugnelius McPugpug</th>
              <td className="pt-3">brachycephalic@puggy.com</td>
              <td className="pt-3">linkedin.com/in/pugpug</td>
              <td className="pt-3">1234567890</td>
              <td className="pt-3">12/1/19</td>
              <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}