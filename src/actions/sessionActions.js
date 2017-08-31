import { sessionService } from 'redux-react-session';
import * as sessionApi from '../api/sessionApi';
import { clearUserFromState } from '../actions/user';

export const login = (user, history) => {
  return () => {
    return sessionApi.login(user).then(response => {
      const { token } = response;
      sessionService.saveSession({ token })
      .then(() => {
        sessionService.saveUser(response.data)
        .then(() => {
          history.push('/');
        }).catch(err => console.error(err));
      }).catch(err => console.error(err));
    });
  };
};

export const logout = (history) => {
  return (dispatch) => {
    return sessionApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      dispatch(clearUserFromState());
      history.push('/login');
    }).catch(err => {
      throw (err);
    });
  };
};
