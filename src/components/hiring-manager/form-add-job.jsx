import React from 'react';
import TargetSkills from './targetSkillsCheckbox';

export default class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      focusArea: '',
      salary: 0,
      jobMission: '',
      desiredOutcomes1: '',
      desiredOutcomes2: '',
      desiredOutcomes3: '',
      targetSkills: {
        productSensitivity: false,
        strategy: false,
        projectManagement: false,
        design: false,
        dataExecution: false,
        communication: false,
        technical: false,
        userResearch: false,
        charisma: false
      }
    }

    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }

  handleInputs(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  onCheckboxClick(event) {
    const value = event.target.checked;
    const name = event.target.name;
    const updatedTargetSkills = Object.assign({}, this.state.targetSkills, {[name]: value});
    this.setState({targetSkills: updatedTargetSkills});
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
                type="number"
                name="salary"
                className="col-md-12"
                value={this.state.salary}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            Job Mission
              <input
                type="text"
                name="jobMission"
                className="col-md-12"
                value={this.state.jobMission}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            Desired Outcomes #1
              <input
                type="text"
                name="desiredOutcomes1"
                className="col-md-12"
                value={this.state.desiredOutcomes}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            Desired Outcomes #2
              <input
                type="text"
                name="desiredOutcomes2"
                className="col-md-12"
                value={this.state.desiredOutcomes}
                onChange={event => this.handleInputs(event)}
              />
            </div>
            <div className="mt-3">
            Desired Outcomes #3
              <input
                type="text"
                name="desiredOutcomes3"
                className="col-md-12"
                value={this.state.desiredOutcomes}
                onChange={event => this.handleInputs(event)}
              />
            </div>
          </div>
        </div>
        <TargetSkills 
          skillState={this.state.targetSkills}
          checkboxClick={this.onCheckboxClick}
        />
        <button onClick={() => this.submitData()}>submit</button>
      </div>
    );
  }
}