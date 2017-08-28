import * as types from '../constants/ActionTypes';

const getShowWalkthrough = () => {
  let hasVisited = false;
  // Why do we do this in 2017?
  if (window.localStorage) {
    hasVisited = window.localStorage.getItem('Mingling::hasVisited') || false;
  }
  return !hasVisited;
};

const initialState = {
  profile: null,
  showWalkthrough: getShowWalkthrough()
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_PROFILE:
      return Object.assign({}, state, {
        profile: action.payLoad
      });

    case types.CLOSE_WALKTHROUGH:
      return Object.assign({}, state, {
        showWalkthrough: false
      });

    case types.OPEN_WALKTHROUGH:
      return Object.assign({}, state, {
        showWalkthrough: true
      });

    default:
      return state;
  }
}