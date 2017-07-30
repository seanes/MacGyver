import * as types from '../constants/ActionTypes';

const initialState = [{
  isLoggedIn: false,
  agentName: null,
  firstName: null,
  lastName: null
}];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}