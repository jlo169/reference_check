import React from 'react';

export default class AddCandidate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      linkedIn: '',
      phone: ''
    }
  }

  handleInputs(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitData() {
    const data = {...this.state};
    data.jobId = this.props.targetId;
    this.props.addCandidateToJob(data);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-3">
            Name
              <input
                type="text"
                name="name"
                className="col-md-12"
                value={this.state.jobTitle}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            E-mail
              <input
                type="text"
                name="email"
                className="col-md-12"
                value={this.state.focusArea}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            LinkedIn
              <input
                type="text"
                name="linkedIn"
                className="col-md-12"
                value={this.state.salary}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            Phone Number
              <input
                type="text"
                name="phone"
                className="col-md-12"
                value={this.state.jobMission}
                onChange={event => this.handleInputs(event)}
              />
            </div>
          </div>
        </div>
        <button onClick={() => this.submitData()}>submit</button>
      </div>
    )
  }
}