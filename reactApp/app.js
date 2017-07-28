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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
//
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <header>
//         <nav>
//           <ul>
//             <li><Link to='/'>Login</Link></li>
//             <li><Link to='/login'>Login</Link></li>
//             <li><Link to='/register'>Register</Link></li>
//           </ul>
//         </nav>
//       </header>
//     )
//   }
// }
//
// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       <div>this is home</div>
//     )
//   }
// }
//
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <main>
//         <Switch>
//           <Route exact path='/' component={Home}/>
//           <Route exact path='/login' component={Login}/>
//           <Route path='/register' component={Register}/>
//         </Switch>
//       </main>
//     )
//   }
// }
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <Header/>
//         <Main/>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//     <App />,
//   document.getElementById('root'),
// );


import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Container,
} from './Components/Container';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <HashRouter>
      <Container />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root'));
