import { createStore } from 'redux';

import rootReducer from '../reducers';

/**
 * Hand off Redux logging to Redux Dev Tools extension
 * https://github.com/zalmoxisus/redux-devtools-extension
 *
 * @param initialState
 * @returns {*}
 */
function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  );

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default) // eslint-disable-line
    );
  }

  return store;
}

export default configureStore;
