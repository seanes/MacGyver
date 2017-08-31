import * as types from '../constants/ActionTypes';
import axios from 'axios';
import { dispatchable, handle403, serverUrl } from './';

export const getProfile = () => dispatch => {
  axios.get(serverUrl + '/profile', { withCredentials: true }).then( response => {
    if (response.data.profile) {
      dispatch(dispatchable(
        types.GET_PROFILE, response.data.profile
      ));
    }
  }).catch( err => {
    handle403(err);
  });
}

export const closeWalkthrough = () => dispatch => {
  window.localStorage.setItem('Mingling::hasVisited', true);
  dispatch(dispatchable(
    types.CLOSE_WALKTHROUGH, null
  ));
};

export const openWalkthrough = () => dispatch => {
  dispatch(dispatchable(
    types.OPEN_WALKTHROUGH, null
  ));
};

export const clearUserFromState = () => dispatch => {
  dispatch(dispatchable(
    types.CLEAR_USER_FROM_STATE, null
  ));
}