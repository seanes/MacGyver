import * as types from '../constants/ActionTypes';

export const getParticipants = participants => {
  return { type: types.GET_PARTICIPANTS, payload: participants };
}
