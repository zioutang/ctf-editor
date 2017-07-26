import React from 'react';

import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';


import {
  DocEditor
} from '../Components/EditorComponents/DocEditor';

import {
  LoginForm
} from '../Components/AuthComponents/LoginForm';

import {
  HomePage
} from '../Components/HomePage';

const Container = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/doc" component={DocEditor} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </HashRouter>
);

module.exports = {
  Container
};
