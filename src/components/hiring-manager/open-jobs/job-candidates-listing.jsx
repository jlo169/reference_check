import React from 'react';

export default class JobCandidateListing extends React.Component {
  constructor(props) {
    super(props);
    
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    const d = new Date(date);
    return (`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`);
  }

  render() {
    const candidate = this.props.candidate;
    let date = this.formatDate(candidate.dateCreated);

    return (
      <tr>
        <th scope="row" className="pt-3">{candidate.name}</th>
        <td className="pt-3">{candidate.email}</td>
        <td className="pt-3">{candidate.linkedIn}</td>
        <td className="pt-3">{candidate.phone}</td>
        <td className="pt-3">{date}</td>
        <td><button type="button" className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button></td>
      </tr>
    )
  }
}