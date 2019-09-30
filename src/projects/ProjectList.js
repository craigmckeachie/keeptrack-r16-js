import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

class ProjectList extends React.Component {
  state = {
    editingProject: {}
  };
  handleEdit = project => {
    this.setState({ editingProject: project });
  };
  cancelEditing = () => {
    this.setState({ editingProject: {} });
  };
  render() {
    const { projects } = this.props;

    let item;
    const items = projects.map(project => {
      if (project !== this.state.editingProject) {
        item = (
          <div key={project.id} className="cols-sm">
            <ProjectCard
              project={project}
              onEdit={() => {
                this.handleEdit(project);
              }}
            ></ProjectCard>
          </div>
        );
      } else {
        item = (
          <div key={project.id} className="cols-sm">
            <ProjectForm onCancel={this.cancelEditing}></ProjectForm>
          </div>
        );
      }
      return item;
    });

    return <div className="row">{items}</div>;
  }
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;
