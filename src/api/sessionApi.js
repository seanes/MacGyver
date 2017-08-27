import axios from 'axios';
import { serverUrl } from './../actions/';

const config = {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json',
  },
  withCredentials: true
};

export const login = ({username, password}) => {
  var params = new URLSearchParams();
  params.append('username', username.toLowerCase());
  params.append('password', password);
  return axios.post(serverUrl + '/login', params, config);
}

export const logout = () => axios.post(serverUrl + '/logout', null, config);