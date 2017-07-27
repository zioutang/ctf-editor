import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';


import {
  DocEditor
} from './EditorComponents/DocEditor';

import {
  Login
} from './AuthComponents/Login';

import {
  DocDirectory
} from './DocDirectory';

import {
  Register
} from './AuthComponents/Register';

const Container = () => (
  <div>
      <Switch>
        <Route exact path="/docdirect" component={DocDirectory} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/edit/:dochash" component={DocEditor} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
);

module.exports = {
  Container
};
