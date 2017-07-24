import React from 'react';
import ReactDOM from 'react-dom';

import {
  MyEditor,
}
from './Containers/Editor';


// fetch('http://localhost:3000')
//   .then(resp => resp.text())
//   .then(text => console.log(text))
//   .catch(err => {
//     throw err
//   })

ReactDOM.render(
  <MyEditor />, document.getElementById('root'));
