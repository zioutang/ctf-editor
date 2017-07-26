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

  handleFormat(style, block) {
    // console.log(style);
    console.log(block);
    this.props.Click(style, block);
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
    style,
    block
  }) {
    console.log(block);
    return (
      <RaisedButton
        backgroundColor={
          colors.blue100
        }
        icon={<FontIcon className="material-icons">{icon}</FontIcon>}
        onClick={this.handleFormat.bind(this, style, block)}
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
        {this.formatButton({icon: 'format_list_numbered', style: 'ordered-list-item', block:true})}
        {this.formatButton({icon: 'format_list_bulleted', style: 'unordered-list-item', block:true})}
        {this.colorPickerButton()}
      </div>
    );
  }
}
module.exports = {
  ToolBar
};;
