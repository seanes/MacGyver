import { combineReducers } from 'redux';
import user from './user';
import participants from './participants';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
  user,
  participants,
  session: sessionReducer
});

export default rootReducer;
