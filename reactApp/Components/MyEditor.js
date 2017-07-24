import React from 'react';
import ReactDOM from 'react-dom';
import {
  ToolBar
}
from './ToolBar.js';
import {
  Editor,
  EditorState,
  RichUtils
}
from 'draft-js';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      Bold: 'BOLD',
      Italic: 'ITALIC',
      Underline: 'UNDERLINE',

    };
    this.onChange = (editorState) => this.setState({
      editorState
    });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, this.state.Bold));
  }
  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, this.state.Italic));
  }
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, this.state.Underline));
  }

  render() {
    return (
      <div>
        {/* <button onClick={this._onBoldClick.bind(this)}>Bold</button> */}
        <ToolBar
          Bold={this._onBoldClick.bind(this)}
          Italic={this._onItalicClick.bind(this)}
          Underline={this._onUnderlineClick.bind(this)}
        />
        <Editor editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}/>
      </div>
    );
  }
}

module.exports = {
  MyEditor: MyEditor
}
