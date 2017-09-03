import * as types from '../constants/ActionTypes';

const initialState = {
  data: [],
  myScore: null,
  myName: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_HIGHSCORE:
      return Object.assign({}, state, {
        data: action.payLoad.list,
        myScore: action.payLoad.myScore,
        myName: action.payLoad.myName
      });

    default:
      return state;
  }
}