import React, { Fragment } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

class ProjectsPage extends React.Component {
  state = {
    projects: MOCK_PROJECTS
  };
  saveProject = project => {
    this.setState(previousState => {
      let projects = previousState.projects.map(p => {
        return p.id === project.id ? Object.assign({}, p, project) : p;
      });
      return { projects };
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Projects</h1>
        <ProjectList
          projects={this.state.projects}
          onSave={this.saveProject}
        ></ProjectList>
      </Fragment>
    );
  }
}

export default ProjectsPage;
