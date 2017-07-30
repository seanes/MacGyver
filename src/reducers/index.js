import { combineReducers } from 'redux';
import user from './user';
import particpants from './particpants';

const rootReducer = combineReducers({
  user,
  particpants
});

export default rootReducer;
