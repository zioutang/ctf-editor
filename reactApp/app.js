import React from 'react';
import ReactDOM from 'react-dom';

import {
  DocEditor,
}
from './Containers/DocEditor';


// fetch('http://localhost:3000')
//   .then(resp => resp.text())
//   .then(text => console.log(text))
//   .catch(err => {
//     throw err
//   })

ReactDOM.render(
  <DocEditor />, document.getElementById('root'));
