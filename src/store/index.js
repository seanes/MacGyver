import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { sessionService } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(preloadedState) {

  const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(thunkMiddleware)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES' };
  sessionService.initSessionService(store, options);

  return store;
}