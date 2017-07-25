import React from 'react';
import ReactDOM from 'react-dom';
import {
  Editor,
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap
}
from 'draft-js';
import * as colors from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: false
    }

  }


  handleFormat(style) {
    console.log(style);
    this.props.Click(style);
    this.setState({
      style: !this.state.style
    })
  }


  formatButton({
    icon,
    style
  }) {
    return (
      <RaisedButton
        backgroundColor={
          this.state.style === true ? colors.red700 : colors.red400
        }

        icon={<FontIcon className="material-icons">{icon}</FontIcon>}
        onClick={this.handleFormat.bind(this, style)}
      /> // bind with first arg and calling with the second arg
    )
  }

  render() {
    return (
      <div>
        {this.formatButton({icon: 'format_bold', style: 'BOLD'})}
        {this.formatButton({icon: 'format_italic', style: 'ITALIC'})}
        {this.formatButton({icon: 'format_underline', style: 'UNDERLINE'})}
      </div>
    );
  }
}
module.exports = {
  ToolBar
};
