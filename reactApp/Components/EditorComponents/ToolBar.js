import React from 'react';
import ReactDOM from 'react-dom';
import {
  Editor,
  EditorState,
  RichUtils
}
from 'draft-js';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.Bold}>Bold</button>
        <button onClick={this.props.Italic}>Italic</button>
        <button onClick={this.props.Underline}>Underline</button>
      </div>
    );
  }
}

module.exports = {
  ToolBar: ToolBar
}
