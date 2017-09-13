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

  if (isLocalStorageNameSupported()) {
    window.localStorage.setItem('Mingling::hasVisited', true);
  }

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

export const isLocalStorageNameSupported = () => {
  var testKey = 'test', storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true
  } catch (error) {
    return false;
  }
}