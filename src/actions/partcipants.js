import * as types from '../constants/ActionTypes';
import { dispatchable } from './';
import axios from 'axios';
const serverUrl = 'http://localhost:8989';


export const getParticipants = participants => dispatch => {
  axios.get(serverUrl + '/participants', { withCredentials: true }).then( response => {
    if (response.data) {
      dispatch(dispatchable(
        types.GET_PARTICIPANTS, response.data
      ));
    }
  }).catch( err => {
    console.log(err);
  });
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