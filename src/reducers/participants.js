import * as types from '../constants/ActionTypes';

const initialState = {
  data: [],
  agents: {
    data: [],
    message: null
  },
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.GET_PARTICIPANTS:
      return Object.assign({}, state, {
        data: action.payLoad
      });

    case types.GET_CAUGHT_AGENTS:
      return Object.assign({}, state, {
        agents: {
          data: action.payLoad,
          error: null
        }
      });

    case types.INVALID_AGENT_CODE:
      return Object.assign({}, state, {
        agents: {
          ...state.agents,
          message: action.payLoad
        }
      });

    default:
      return state;
  }
}