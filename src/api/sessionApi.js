import axios from 'axios';

const serverUrl = 'http://localhost:8989';
const config = {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json',
  }
};

export const login = ({username, password}) => {
  var params = new URLSearchParams();
  params.append('username', username);
  // TODO: hash the password
  params.append('password', password);
  return axios.post(serverUrl + '/login', params, config);
}

export const logout = () => axios.post(serverUrl + '/logout', null, config);