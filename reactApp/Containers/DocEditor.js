import React from 'react';

import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap
}
from 'draft-js';

import {
  ToolBar
}
from '../Components/EditorComponents/ToolBar';

import AppBar from 'material-ui/AppBar';
import {
  Map
} from 'immutable';
const blockTypes = DefaultDraftBlockRenderMap.merge(new Map({
  center: {
    wrapper: <div className="center-align"/>
  },
  left: {
    wrapper: <div className="left-align"/>
  },
  right: {
    wrapper: <div className="right-align"/>
  }
}))

class DocEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      customStyleMap: {},
      currentFontSize: 7
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

  _onClick(...args) {
    console.log(this.state.editorState);

    if (!args[1]) {
      this.setState({
        editorState: RichUtils.toggleInlineStyle(this.state.editorState, args[0])
      });
    } else {
      this.setState({
        editorState: RichUtils.toggleBlockType(this.state.editorState, args[0])
      });
    }
  }
  formatColor(color) {
    console.log(color);
    let map = {
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
  increaseSize() {
    var newSize = this.state.currentFontSize + 1;
    let size = {
      [newSize]: {
        fontSize: `${newSize}px`
      },
    };
    this.setState({
      customStyleMap: size,
      currentFontSize: newSize,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, String(newSize))
    });
  }
  decreaseSize() {
    var newSize = this.state.currentFontSize - 1;
    let size = {
      [newSize]: {
        fontSize: `${newSize}px`
      },
    };
    this.setState({
      customStyleMap: size,
      currentFontSize: newSize,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, String(newSize))
    });
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
            sizeIncrease={this.increaseSize.bind(this)}
            sizeDecrease={this.decreaseSize.bind(this)}
          />
        </div>
        <div className="editor">
          <Editor
            // ref="editor"
            blockRenderMap={blockTypes}
            customStyleMap={this.state.customStyleMap}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand.bind(this)}
            onChange={this.onChange}/>
        </div>

      </div>
    );
  }
}

module.exports = {
  DocEditor
};
