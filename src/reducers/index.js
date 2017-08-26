import { combineReducers } from 'redux';
import user from './user';
import participants from './participants';
import tags from './tags';
import highscore from './highscore';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
  user,
  participants,
  highscore,
  tags,
  session: sessionReducer
});

export default rootReducer;
