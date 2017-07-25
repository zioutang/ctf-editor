import React from 'react';

import {
  Editor,
  EditorState,
  RichUtils
}
from 'draft-js';

import {
  ToolBar
}
from '../Components/EditorComponents/ToolBar';

import AppBar from 'material-ui/AppBar';

class DocEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = editorState => this.setState({
      editorState
    });
  }

  handleKeyCommand(command) { // // key command
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onClick(style) {
    // e.preventDefault();
    // this.refs.editor.focus();
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
    });

    // this.onChange();
  }

  render() {
    return (
      <div>
        <div>
          <AppBar title="CTF_Documents"/>
        </div>
        <div className="toolbar">
          <ToolBar
            Click={this._onClick.bind(this)}/>
        </div>
        <Editor
          // ref="editor"
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand.bind(this)}
          onChange={this.onChange}/>
      </div>
    );
  }
}

module.exports = {
  DocEditor
};
