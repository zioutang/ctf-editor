import React from 'react';
import AppBar from 'material-ui/AppBar';

import {
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';

import { ToolBar } from '../Components/EditorComponents/ToolBar';

class DocEditor extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.formatColor = this.formatColor.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.state = {
      editorState: EditorState.createEmpty(),
      customStyleMap: {},
    };
    this.onChange = editorState => this.setState({
      editorState,
    });
  }

  onClick(...args) {
    if (!args[1]) {
      this.setState({
        editorState: RichUtils.toggleInlineStyle(this.state.editorState, args[0]),
      });
    } else {
      this.setState({
        editorState: RichUtils.toggleBlockType(this.state.editorState, args[0]),
      });
    }
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  formatColor(color) {
    console.log(color);
    const map = {
      [color.hex]: {
        color: color.hex,
      },
    };

    const key = Object.keys(map)[0];
    this.setState({
      customStyleMap: map,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, key),
    });
  }

  render() {
    return (
      <div>
        <div>
          <AppBar title="CTF_Documents" />
        </div>
        <div className="toolbar">
          <ToolBar
            Click={this.onClick()}
            colorHandle={this.formatColor()}
          />
        </div>
        <Editor
          customStyleMap={this.state.customStyleMap}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand()}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

module.exports = {
  DocEditor,
};
