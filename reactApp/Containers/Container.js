import React from 'react';

import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';


import { DocEditor } from './DocEditor';

const Container = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/" component={DocEditor} />
      </Switch>
    </div>
  </HashRouter>
);

module.exports = { Container };
