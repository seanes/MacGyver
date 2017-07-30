import { combineReducers } from 'redux';
import user from './user';
import participants from './participants';

const rootReducer = combineReducers({
  user,
  participants
});

export default rootReducer;
