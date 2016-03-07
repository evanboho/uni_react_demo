import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import AppContainer from './containers/app';

import { browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
    </Route>
  </Router>
);
