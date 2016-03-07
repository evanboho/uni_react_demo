import _ from 'lodash';
import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import routes from '../app/routes';
import { match, RouterContext } from 'react-router';

import configureStore from '../app/configureStore';

const app = express();
app.set('view engine', 'jade');

app.use(reactRouterMatcher);

app.get('*', (req, res) => {
  res.render('index', { dom: res.dom, initialState: res.initialState });
});

app.listen(4000);

function reactRouterMatcher(req, res, next) {
  const location = req.url;

  match({ routes, location }, (err, redirectLoc, renderProps) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirectLoc) {
      return res.redirect(302, redirectLoc.pathname + redirectLoc.search);
    }

    if (renderProps) {
      const store = configureStore();

      const routingContext = <RouterContext {...renderProps} />;

      res.dom = renderToString(
        <Provider store={store}>
          {routingContext}
        </Provider>
      );

      res.initialState = store.getState();
    }

    next();
  });

}
