import React from 'react';

import {
  Editor,
  EditorState,
  RichUtils,
}
from 'draft-js';

import {
  ToolBar,
}
from '../Components/EditorComponents/ToolBar';


class DocEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
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


  _onClick(stlye) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, stlye));
  }

  render() {

    return (
      <div>
        <ToolBar
          Click={this._onClick.bind(this)}
        />
        <Editor editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}/>
      </div>
    );
  }
}


module.exports = {
  DocEditor,
};
