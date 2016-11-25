import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/**
 * Add support for Service Worker
 * Reload the page automatically when updated code is detected
 */
if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime') // eslint-disable-line

  runtime.install({
    onUpdateReady: () => {
      console.log('SW Event:', 'onUpdateReady');

      // Tells to new SW to take control immediately
      runtime.applyUpdate();
    },

    onUpdated: () => {
      console.log('SW Event:', 'onUpdated');

      // Reload page to load the new version
      window.location.reload();
    }
  });
}
