import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';


import {
  DocEditor,
}
from './Containers/DocEditor';

class Container extends React.Component {
  render() {
    return (
      <HashRouter>
          <div>
              <Switch>
              <Route path="/" exact component={DocEditor}/>
              </Switch>
          </div>
    </HashRouter>
    )
  }
}
module.exports = {
  Container
};
