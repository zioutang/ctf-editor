import React from 'react';
import ReactDOM from 'react-dom';

import {
  DocEditor,
} from './Containers/Editor';


// fetch('http://localhost:3000')
//   .then(resp => resp.text())
//   .then(text => console.log(text))
//   .catch(err => {
//     throw err
//   })

ReactDOM.render(
  <Editor />, document.getElementById('root'));
