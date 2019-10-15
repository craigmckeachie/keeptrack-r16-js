import { projectAPI } from '../projectAPI';

//action types
export const LOAD_PROJECTS_REQUEST = 'LOAD_PROJECTS_REQUEST';
export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const LOAD_PROJECTS_FAILURE = 'LOAD_PROJECTS_FAILURE';
export const SAVE_PROJECT_REQUEST = 'SAVE_PROJECT_REQUEST';
export const SAVE_PROJECT_SUCCESS = 'SAVE_PROJECT_SUCCESS';
export const SAVE_PROJECT_FAILURE = 'SAVE_PROJECT_FAILURE';
export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

//action creators
export function loadProjects(page) {
  return dispatch => {
    dispatch({ type: LOAD_PROJECTS_REQUEST });
    return projectAPI
      .get(page)
      .then(data => {
        dispatch({
          type: LOAD_PROJECTS_SUCCESS,
          payload: { projects: data, page }
        });
      })
      .catch(error => {
        dispatch({ type: LOAD_PROJECTS_FAILURE, payload: error });
      });
  };
}

export function saveProject(project) {
  return dispatch => {
    dispatch({ type: SAVE_PROJECT_REQUEST });
    return projectAPI
      .put(project)
      .then(data => {
        dispatch({ type: SAVE_PROJECT_SUCCESS, payload: data });
      })
      .catch(error => {
        dispatch({ type: SAVE_PROJECT_FAILURE, payload: error });
      });
  };
}
