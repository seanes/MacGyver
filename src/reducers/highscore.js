import * as types from '../constants/ActionTypes';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_HIGHSCORE:
      return Object.assign({}, state, {
        data: action.payLoad,
      });

    default:
      return state;
  }
}