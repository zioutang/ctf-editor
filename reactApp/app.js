// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   Editor,
//   EditorState,
//   RichUtils
// } from 'draft-js';
// import {
//   MyEditor,
// } from './Components/MyEditor';
// /* This can check if your electron app can communicate with your backend */
// // fetch('http://localhost:3000')
// // .then(resp => resp.text())
// // .then(text => console.log(text))
// // .catch(err => {throw err})
//
//
// //
// ReactDOM.render(
//   <MyEditor />, document.getElementById('root'));;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    <div>
      hello
    <div>
  }
}

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
