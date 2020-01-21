import React from 'react';

export default class TargetSkills extends React.Component {
  renderTargetSkills() {
    const skills = [
      {title: 'Product Sensitivity',
      name: 'productSensitivity'}, 
      {title: 'Strategy',
      name: 'strategy'}, 
      {title: 'Project Management',
      name: 'projectManagement'}, 
      {title: 'Design',
      name: 'design'}, 
      {title: 'Data/KPI Execution',
      name: 'dataExecution'}, 
      {title: 'Communication',
      name: 'communication'}, 
      {title: 'Technical',
      name: 'technical'}, 
      {title: 'User Research',
      name: 'userResearch'}, 
      {title: 'Charisma',
      name: 'charisma'}
    ];
    
    return skills.map( (skill, i) => {
      return (
        <div className="form-check" key={i}>
          <input 
            className="form-check-input" 
            type="checkbox" 
            name={skill.name}
            value={this.props.skillState[skill.name]} 
            id={`targetSkill${i}`} 
            onChange={this.props.checkboxClick}
          />
          <label className="form-check-label" htmlFor={`targetSkill${i}`}>
            {skill.title}
          </label>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        Top 3 Target Skills
        {this.renderTargetSkills()}
      </div>
    )
  }
}