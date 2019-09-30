import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

class ProjectForm extends React.Component {
  state = {
    project: this.props.project
  };
  handleChange = event => {
    const { type, name, value, checked } = event.target;
    let updatedValue = type === 'checkbox' ? checked : value;
    if (type === 'number') {
      updatedValue = +updatedValue;
    }
    const updatedProject = {
      [name]: updatedValue
    };

    this.setState(previousState => {
      // Shallow clone using Object.assign while updating changed property
      const project = Object.assign(
        new Project(),
        previousState.project,
        updatedProject
      );
      return { project };
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSave(this.state.project);
  };
  render() {
    const { onCancel } = this.props;
    return (
      <form className="input-group vertical" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={this.state.project.name}
          onChange={this.handleChange}
        />
        <label htmlFor="description">Project Description</label>
        <textarea
          name="description"
          placeholder="enter description"
          value={this.state.project.description}
          onChange={this.handleChange}
        />
        <label htmlFor="budget">Project Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="enter budget"
          value={this.state.project.budget}
          onChange={this.handleChange}
        />
        <label htmlFor="isActive">Active?</label>
        <input
          type="checkbox"
          name="isActive"
          checked={this.state.project.isActive}
          onChange={this.handleChange}
        />
        <div className="input-group">
          <button className="primary bordered medium">Save</button>
          <span />
          <button type="button" className="bordered medium" onClick={onCancel}>
            cancel
          </button>
        </div>
      </form>
    );
  }
}

ProjectForm.propTypes = {
  project: PropTypes.instanceOf(Project),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ProjectForm;
