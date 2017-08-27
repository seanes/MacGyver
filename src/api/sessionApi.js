import axios from 'axios';
import { serverUrl } from './../actions/';
import qs from 'querystring';

const config = {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json',
  },
  withCredentials: true
};

export const login = ({username, password}) => {
  return axios.post(serverUrl + '/login', qs.stringify({
    'username': username.toLowerCase(),
    'password': password
  }), config);
};

export const logout = () => axios.post(serverUrl + '/logout', null, config);