import * as types from '../constants/ActionTypes';

const initialState = [{
  profile: null
}];

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_PROFILE:
      return Object.assign({}, state, {
        profile: action.payLoad
      });

    default:
      return state;
  }
}