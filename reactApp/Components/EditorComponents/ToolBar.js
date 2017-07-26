import React from 'react';
import ReactDOM from 'react-dom';
import {
  Editor,
  EditorState,
  RichUtils
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

  handleFormat(styleInput, block) {
    // console.log(Array.isArray(this.state.style));
    // console.log(this.state.style);
    if (!block) {
      if (this.state.style.indexOf(styleInput) === -1) {
        let list = this.state.style.concat([styleInput]);
        this.setState({
          style: list
        })
      } else {
        let index = this.state.style.indexOf(styleInput);
        console.log(this.state.style);
        let copy = this.state.style.slice();
        copy.splice(index, 1);

        this.setState({
          style: copy
        })
        console.log(this.state.style);
      }
    }
    this.props.Click(styleInput, block);
  }
  colorForm(color) {
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
    // console.log(style);
    return (
      <RaisedButton
        backgroundColor={
          this.state.style.indexOf(style) === -1 ?
           colors.blue100  : colors.blue300
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
  increaseSize() {
    this.props.sizeIncrease();
  }
  decreaseSize() {
    this.props.sizeDecrease();
  }

  increaseSizeButton() {
    return (
      <RaisedButton
        backgroundColor={
          colors.blue100
        }
        icon={<FontIcon className="material-icons">zoom_in</FontIcon>}
        onClick={this.increaseSize.bind(this)}
      />
    )
  }

  decreaseSizeButton() {
    return (
      <RaisedButton
        backgroundColor={
          colors.blue100
        }
        icon={<FontIcon className="material-icons">zoom_out</FontIcon>}
        onClick={this.decreaseSize.bind(this)}
      />
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
        {this.formatButton({icon: 'format_align_left', style: 'left', block:true})}
        {this.formatButton({icon: 'format_align_center', style: 'center', block:true})}
        {this.formatButton({icon: 'format_align_right', style: 'right', block:true})}
        {this.increaseSizeButton()}
        {this.decreaseSizeButton()}
        {this.colorPickerButton()}
      </div>
    );
  }
}
module.exports = {
  ToolBar
};;
