import React from 'react';

import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';


import {
  DocEditor
} from './Containers/DocEditor';

const Container = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route path="/" exact component={DocEditor} />
      </Switch>
    </div>
  </HashRouter>
);


module.exports = {
  Container
};
