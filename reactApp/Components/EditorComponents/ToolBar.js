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
    this.state = {
      format: '',
      fontColor: '',
      fontSize: ''
    };
    this.handleFormat = this.handleFormat.bind(this);
    this.handleFontColor = this.handleFontColor.bind(this);
  }

  handleFormat(event) {
    this.setState({
      format: event.target.value
    });
    this.props.Click(event.target.value);
  }

  handleFontColor(event) {
    this.setState({
      fontColor: event.target.value
    });
    this.props.Click(event.target.value);
  }
  render() {
    return (
      <div>
        <select value={this.state.format} onChange={this.handleFormat}>
            <option  value="" disabled>Format</option>
            <option  value="BOLD">Bold</option>
            <option  value="ITALIC">Italic</option>
            <option  value="UNDERLINE">Underline</option>
        </select>
        <select value={this.state.fontColor} onChange={this.handleFontColor}>
            <option  value="" disabled>Color</option>
            <option  value="COLOR: RED">Red</option>
            <option  value="COLOR: BLUE">Blue</option>
            <option  value="COLOR: YELLOW">Yellow</option>
        </select>
      </div>
    );
  }
}

module.exports = {
  ToolBar: ToolBar
}
