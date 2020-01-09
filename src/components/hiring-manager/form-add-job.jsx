import React from 'react';

export default class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: 'asdf',
      focusArea: 'asdf',
      salary: 1
    }
  }

  handleInputs(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  submitData() {
    const formData = {...this.state}
    this.props.addJob(formData)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-3">
            Job Title
              <input
                type="text"
                name="jobTitle"
                className="col-md-12"
                value={this.state.jobTitle}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            Focus Area
              <input
                type="text"
                name="focusArea"
                className="col-md-12"
                value={this.state.focusArea}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            Salary
              <input
                type="text"
                name="salary"
                className="col-md-12"
                value={this.state.salary}
                onChange={event => this.handleInputs(event)}
              />
            </div>
          </div>
        </div>
        <button onClick={() => this.submitData()}>submit</button>
      </div>
    );
  }
}