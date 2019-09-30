import React, { Fragment } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

class ProjectsPage extends React.Component {
  saveProject = project => {
    console.log('Saving project: ', project);
  };
  render() {
    return (
      <Fragment>
        <h1>Projects</h1>
        <ProjectList
          projects={MOCK_PROJECTS}
          onSave={this.saveProject}
        ></ProjectList>
      </Fragment>
    );
  }
}

export default ProjectsPage;
