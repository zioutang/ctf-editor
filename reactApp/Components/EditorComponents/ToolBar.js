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
import Popover from 'material-ui/Popover';
import {
  CirclePicker
} from 'react-color';

class ToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: []
    }

  }

  handleFormat(style) {
    console.log(style);
    this.props.Click(style);
  }
  colorForm(color) {
    console.log(color);
    this.props.colorHandle(color);
  }

  openColorPicker(e) {
    this.setState({
      colorPickerOpen: true,
      colorPickerButton: e.target
    })
  }
  closeColorPicker() {
    this.setState({
      colorPickerOpen: false,
    })
  }


  formatButton({
    icon,
    style
  }) {
    return (
      <RaisedButton
        backgroundColor={
          colors.blue100
        }
        icon={<FontIcon className="material-icons">{icon}</FontIcon>}
        onClick={this.handleFormat.bind(this, style)}
      /> // bind with first arg and calling with the second arg
    )
  }
  colorPickerButton() {
    return (
      <div style={{display: 'inline-block'}}>
        <RaisedButton
          backgroundColor={
            colors.blue100
          }
          icon={<FontIcon className="material-icons">'format_paint'</FontIcon>}
          onClick={this.openColorPicker.bind(this)}
        />
        <Popover
          open={this.state.colorPickerOpen}
          anchorEl={this.state.colorPickerButton}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.closeColorPicker.bind(this)}
          >
          <CirclePicker
            onChangeComplete={this.colorForm.bind(this)}
          />
        </Popover>

      </div>

    )
  }

  render() {
    return (
      <div>
        {this.formatButton({icon: 'format_bold', style: 'BOLD'})}
        {this.formatButton({icon: 'format_italic', style: 'ITALIC'})}
        {this.formatButton({icon: 'format_underline', style: 'UNDERLINE'})}
        {this.colorPickerButton()}
      </div>
    );
  }
}
module.exports = {
  ToolBar
};;
