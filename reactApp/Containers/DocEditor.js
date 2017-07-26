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
      editorState: EditorState.createEmpty(),
      customStyleMap: {}
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
    this.setState({
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
    });
  }
  formatColor(color) {
    console.log(color);
    const map = {
      [color.hex]: {
        color: color.hex,
      },
    };

    var key = Object.keys(map)[0];
    console.log(key);
    console.log(map[key]);
    this.setState({
      customStyleMap: map,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, key)
    });
    console.log(this.state.customStyleMap);
  }

  render() {
    return (
      <div>
        <div>
          <AppBar title="CTF_Documents"/>
        </div>
        <div className="toolbar">
          <ToolBar
            Click={this._onClick.bind(this)}
            colorHandle={this.formatColor.bind(this)}
          />
        </div>
        <Editor
          // ref="editor"
          customStyleMap={this.state.customStyleMap}
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
