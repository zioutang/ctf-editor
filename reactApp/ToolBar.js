import React from 'react';
import ReactDOM from 'react-dom';
import {
  Editor,
  EditorState,
  RichUtils
}
from 'draft-js';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({
      editorState
    });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}/>
      </div>
    );
  }
}

module.exports = {
  Button: Button
}
