import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

import pages from './constants/pages';
import App from './containers/App';
import Links from './components/links';

const getLink = (linkProps) => () => (<Links {...linkProps} />);

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: getLink(pages['/']) },
  childRoutes: Object.keys(pages).map((path) => ({ path, component: getLink(pages[path]) }))
};

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
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
