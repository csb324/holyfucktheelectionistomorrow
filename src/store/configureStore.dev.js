import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const finalCreateStore = compose(
  // Middleware you want to use in development:
  // applyMiddleware()
)(createStore);

function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line
    );
  }

  return store;
}

export default configureStore;
