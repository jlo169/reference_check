import React from 'react';

export default class JobsListing extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row" className="pt-3">Product Manager</th>
        <td className="pt-3">Growth</td>
        <td className="pt-3">$120000</td>
        <td className="pt-3">12/1/19</td>
        <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
        <td><button type="button" className="btn btn-danger btn-sm"><i className="fas fa-minus"></i></button></td>
      </tr>
    )
  }
}