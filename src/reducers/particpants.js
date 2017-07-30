import * as types from '../constants/ActionTypes';

const initialState = [{
  data: []
}];

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_PARTICIPANTS:
      return {
        data: action.payload,
        ...state
      };

    default:
      return state;
  }
}