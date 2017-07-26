import React from 'react';

import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';


import { DocEditor } from './Containers/DocEditor';

const Container = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route path="/" exact component={DocEditor} />
      </Switch>
    </div>
  </HashRouter>
);

<<<<<<< HEAD
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
=======
module.exports = { Container };
>>>>>>> 4b9b671e4f63509ccb28683558042384d4a9f253
