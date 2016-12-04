import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

import pages from './constants/pages';
import App from './containers/App';
import Links from './components/links';

/**
 * Add support for Service Worker
 * Reload the page automatically when updated code is detected
 */
import './offline';

const getLink = (linkProps) => () => (<Links {...linkProps} />);

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: getLink(pages.index) },
  childRoutes: Object.keys(pages).map((path) => ({ path, component: getLink(pages[path]) }))
};

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);

/**
 * 1) Prevent full-page reloads when clicking the header or "start over" links
 * 2) Capture the outbound action links for Analytics
 * (They aren't rendered by React, so bind to the window)
 */
[...document.querySelectorAll('[data-restart]')].forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    hashHistory.push('/');

    const { type, tag } = pages.index.analytics;
    window.ga('send', 'event', type, tag);
  });
});
