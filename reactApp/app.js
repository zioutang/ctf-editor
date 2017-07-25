import React from 'react';
import ReactDOM from 'react-dom';

import {
  DocEditor,
}
from './Containers/DocEditor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

require('./css/style.css'); // loading css file as needed

// fetch('http://localhost:3000')
//   .then(resp => resp.text())
//   .then(text => console.log(text))
//   .catch(err => {
//     throw err
//   })

ReactDOM.render(
  <MuiThemeProvider>
  <DocEditor />
  </MuiThemeProvider>,
  document.getElementById('root'));
