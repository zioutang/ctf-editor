import React from 'react';
import ReactDOM from 'react-dom';

import {
  DocEditor,
}
from './Containers/DocEditor';

require('./css/style.css'); // loading css file as needed

// fetch('http://localhost:3000')
//   .then(resp => resp.text())
//   .then(text => console.log(text))
//   .catch(err => {
//     throw err
//   })

ReactDOM.render(
  <DocEditor/>, document.getElementById('root'));
