/**
 * Based on the current environment variable, we need to make sure
 * to exclude any DevTools-related code from the production builds.
 * The code is envify'd - using 'DefinePlugin' in Webpack.
 */

// const env = (process.env.NODE_ENV === 'production') ? 'prod' : 'dev';
// const loadedStore = require(`./configureStore.${env}`).default // eslint-disable-line

import loadedStore from './configureStore.prod';

export default loadedStore;
