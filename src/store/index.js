import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import * as actionCreators from '../actions';
import { sessionService } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';


export default function configureStore(preloadedState) {

  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators });

  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(thunkMiddleware), enhancer));

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