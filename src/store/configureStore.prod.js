import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

function configureStore(initialState) {
  return finalCreateStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  );
}

export default configureStore;
