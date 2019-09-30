import React from 'react';
import PropTypes from 'prop-types';
import { Project } from './Project';

class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;
    return <pre>{JSON.stringify(projects, null, ' ')}</pre>;
  }
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
};

export default ProjectList;
