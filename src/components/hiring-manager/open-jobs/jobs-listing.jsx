import React from 'react';

export default class JobsListing extends React.Component {
  constructor(props) {
    super(props);
    
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date) {
    const d = new Date(date);
    return (`${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`);
  }

  handleDeleteButtonClick() {
    this.props.deleteJob(this.props.job.id);
  }

  render() {
    const job = this.props.job;
    let date = this.formatDate(job.dateCreated)
    return (
      <tr>
        <th scope="row" className="pt-3" value={job.id} onClick={this.props.jobCandidates}>{job.jobTitle}</th>
        <td className="pt-3">{job.focusArea}</td>
        <td className="pt-3">${job.salary}</td>
        <td className="pt-3">{date}</td>
        <td>
          <button 
            type="button" 
            className="btn btn-success btn-sm"
          >
            <i className="fas fa-plus"></i>
          </button>
        </td>
        <td>
          <button 
            type="button" 
            className="btn btn-danger btn-sm" 
            onClick={() => this.handleDeleteButtonClick()}
          >
            <i className="fas fa-minus"></i>
          </button>
        </td>
      </tr>
    )
  }
}