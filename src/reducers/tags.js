import * as types from '../constants/ActionTypes';

const initialState = {
  active: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.CLICK_TAG:

      const isAdded = state.active.indexOf(action.payLoad) > -1;

      let newActive = [];

      if (!isAdded) {
        newActive = state.active.concat(action.payLoad);
      } else {
        newActive = state.active.filter( tag => tag !== action.payLoad)
      }

      return Object.assign({}, state, {
        active: newActive
      });

    default:
      return state;
  }
}