import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import {
  projectReducer,
  initialProjectState
} from './projects/state/projectReducer';

const reducer = combineReducers({
  projectState: projectReducer
});

export default function configureStore(preloadedState) {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  //Thunk is middleware
  //DevTools is an enchancer (actually changes Redux)
  //applyMiddleware wraps middleware and returns an enhancer

  // to use only thunk middlewar
  // const enhancer = compose(middlewareEnhancer);

  //to use thunk & devTools
  const enhancer = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, enhancer);
  return store;
}

export const initialAppState = {
  projectState: initialProjectState
};

export const store = configureStore(initialAppState);
