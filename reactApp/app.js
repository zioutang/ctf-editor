import React from 'react';
import ReactDOM from 'react-dom';
import {
  Editor,
  EditorState,
  RichUtils
}
from 'draft-js';
import {
  MyEditor
}
from './Components/MyEditor.js';
/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})


//
ReactDOM.render(
  <MyEditor />, document.getElementById('root'));
