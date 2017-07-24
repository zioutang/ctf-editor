const React = require('react');
const ReactDOM = require('react-dom');

/* This can check if your electron app can communicate with your backend */
// fetch('http://localhost:3000')
// .then(resp => resp.text())
// .then(text => console.log(text))
// .catch(err => {throw err})

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        This is App
        <Editor />
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ border: '1 black solid' }}>
        <p>This is Editor</p>
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('root'));
