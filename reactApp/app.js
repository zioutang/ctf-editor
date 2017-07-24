import React from 'react';
import ReactDOM from 'react-dom';
import {
  Editor,
  EditorState,
  RichUtils
} from 'draft-js';
import {
<<<<<<< HEAD
  MyEditor
}
from './Components/MyEditor.js';
=======
  MyEditor,
} from './Components/MyEditor';
>>>>>>> 114c8cf1c3748d55b1016e279990f25bd7d86488
/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})


//
ReactDOM.render(
  <MyEditor />, document.getElementById('root'));;
