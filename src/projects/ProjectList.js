import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

class ProjectList extends React.Component {
  handleEdit = project => {
    console.log(project);
  };
  render() {
    const { projects } = this.props;
    const items = projects.map(project => (
      <div key={project.id} className="cols-sm">
        <ProjectCard project={project} onEdit={this.handleEdit} />
        <ProjectForm />
      </div>
    ));
    return <div className="row">{items}</div>;
  }
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;
