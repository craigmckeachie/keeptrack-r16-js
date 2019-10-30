import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import ProjectList from '../ProjectList';
import { Project } from '../Project';
import { MOCK_PROJECTS } from '../MockProjects';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('<ProjectList />', () => {
  let wrapper;
  let mockProjects;
  let handleSave;

  beforeEach(() => {
    mockProjects = MOCK_PROJECTS;
    handleSave = jest.fn();
    wrapper = shallow(
      <ProjectList projects={mockProjects} onSave={handleSave} />
    );
  });

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  test('renders <ProjectCard/>s', () => {
    const projectCardWrapper = wrapper.find('ProjectCard');
    expect(projectCardWrapper.length).toBe(mockProjects.length);
  });

  test('render <ProjectForm> for editingProject', () => {
    wrapper.setState({ editingProject: mockProjects[2] });
    expect(wrapper.find('Connect(ProjectForm)').length).toBe(1);
  });

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
