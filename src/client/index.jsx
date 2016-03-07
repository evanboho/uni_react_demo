import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../app/routes';

import { Provider } from 'react-redux';
import configureStore from '../app/configureStore';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(window.__INITIAL_STATE__);

  window.__INITIAL_STATE__ = null;

  console.log('Starting app...'); // eslint-disable-line no-console
  const el = document.getElementById('app');

  const app = (
    <Provider store={store}>
      {routes}
    </Provider>
  );

  ReactDOM.render(app, el);
});
