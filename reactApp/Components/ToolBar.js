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
      value: 'format'
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
            <option onClick={this.props.Bold} value="Bold">Bold</option>
            <option onClick={this.props.Italic} value="Italic">Italic</option>
            <option onClick={this.props.Underline} value="Underline">Underline</option>
        </select>
        {/* <button onClick={this.props.Bold}>Bold</button>
        <button onClick={this.props.Italic}>Italic</button>
        <button onClick={this.props.Underline}>Underline</button> */}
      </div>
    );
  }
}

module.exports = {
  ToolBar: ToolBar
}
