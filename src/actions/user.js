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