import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Container } from './Containers/Container';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Container />
  </MuiThemeProvider>,
  document.getElementById('root'));
