import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Container } from './Containers/Container';

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
    <Container />
  </MuiThemeProvider>,
  document.getElementById('root'));
