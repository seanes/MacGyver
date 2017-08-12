import * as types from '../constants/ActionTypes';
import { dispatchable } from './';
import axios from 'axios';
const serverUrl = 'http://localhost:8989';


export const getParticipants = participants => {
  return { type: types.GET_PARTICIPANTS, payload: participants };
}

export const getHighscore = () => dispatch => {
  axios.get(serverUrl + '/highscore', { withCredentials: true }).then( response => {
    if (response.data) {
      dispatch(dispatchable(
        types.GET_HIGHSCORE, response.data
      ));
    }
  }).catch( err => {
    console.log(err);
  });
}