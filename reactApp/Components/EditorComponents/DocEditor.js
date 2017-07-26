import React from 'react';
import AppBar from 'material-ui/AppBar';

import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
} from 'draft-js';

import {
  Map
} from 'immutable';


import {
  ToolBar
} from './ToolBar';


const blockTypes = DefaultDraftBlockRenderMap.merge(new Map({
  center: {
    wrapper: <div className="center-align" />,
  },
  left: {
    wrapper: <div className="left-align" />,
  },
  right: {
    wrapper: <div className="right-align" />,
  },
}));


class DocEditor extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.formatColor = this.formatColor.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.increaseSize = this.increaseSize.bind(this);
    this.decreaseSize = this.decreaseSize.bind(this);
    this.onChange = editorState => this.setState({
      editorState,
    });
    this.state = {
      editorState: EditorState.createEmpty(),
      customStyleMap: {},
      currentFontSize: 7,
    };
  }

  onClick(...args) {
    // console.log(this.state.editorState.getCurrentInlineStyle().has(args[0]));
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

  handleKeyCommand(command) { // // key command
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  formatColor(color) {
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

  increaseSize() {
    const newSize = this.state.currentFontSize + 1;
    const size = {
      [newSize]: {
        fontSize: `${newSize}px`
      }
    };
    this.setState({
      customStyleMap: size,
      currentFontSize: newSize,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, String(newSize)),
    });
  }
  decreaseSize() {
    const newSize = this.state.currentFontSize - 1;
    const size = {
      [newSize]: {
        fontSize: `${newSize}px`
      }
    };
    this.setState({
      customStyleMap: size,
      currentFontSize: newSize,
      editorState: RichUtils.toggleInlineStyle(this.state.editorState, String(newSize)),
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
            Click={this.onClick}
            colorHandle={this.formatColor}
            sizeIncrease={this.increaseSize}
            sizeDecrease={this.decreaseSize}
            // currentInlineStyle={this.state.editorState.getCurrentInlineStyle()}
          />
        </div>
        <div className="editor">
          <Editor
            // ref="editor"
            blockRenderMap={blockTypes}
            customStyleMap={this.state.customStyleMap}
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}/>
        </div>
        </div>
    );
  }
}

module.exports = {
  DocEditor,
};
