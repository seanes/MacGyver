import * as types from '../constants/ActionTypes';
import { participants } from '../mockdata/participantsMock';

const initialState = {
  data: participants
};

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